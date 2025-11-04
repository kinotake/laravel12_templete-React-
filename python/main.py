from fastapi import FastAPI, Request
from openai import OpenAI
import numpy as np
import os
from dotenv import load_dotenv
from sklearn.metrics.pairwise import cosine_similarity
import json
from pathlib import Path

app = FastAPI()

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def vectorize_text(text):
    response = client.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    )
    return np.array(response.data[0].embedding)

@app.post("/rag/query")
async def receive_message(request: Request):
    data = await request.json()
    query = data.get("query")
    print(f"打ち込んだ値: {query}")

    vec_query = vectorize_text(query)

    file_path = "venv/data/departments/10_qa.txt"

    json_save_path = os.path.join(os.getcwd(), "./venv/embeddings/department_relations.json")

    with open(json_save_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    paragraphs = [d["text"] for d in data]
    vec_paragraphs = [np.array(d["embedding"]) for d in data]

    scores = [
        cosine_similarity([vec_query], [vec_para])[0][0]
        for vec_para in vec_paragraphs
    ]

    # 最大スコアとそのインデックスを取得
    max_index = int(np.argmax(scores))
    max_score = scores[max_index]
    context = paragraphs[max_index]

    department_id = context.split("_")[0]

    json_base_dir = "./venv/embeddings/departments"

    target_path = None
    for filename in os.listdir(json_base_dir):
        if filename.startswith(f"{department_id}_"):
            json_department_path = os.path.join(json_base_dir, filename)
            break

    with open(json_department_path, "r", encoding="utf-8") as f:
        json_department_data = json.load(f)

    paragraphs = [d["text"] for d in json_department_data]
    vec_paragraphs = [np.array(d["embedding"]) for d in json_department_data]

    scores = [
        cosine_similarity([vec_query], [vec_para])[0][0]
        for vec_para in vec_paragraphs
    ]

    # 最大スコアとそのインデックスを取得
    max_index = int(np.argmax(scores))
    max_score = scores[max_index]

    context = paragraphs[max_index]

# GPTに質問 + コンテキストを渡して回答生成
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "あなたは社内FAQ回答AIです。次の制約を必ず守ってください：\
            1. 回答は、与えられた社内情報の範囲内でのみ行ってください。\
            2. 社内情報に記載がない内容については、推測せずに「不明です」と答えてください。\
            3. 回答は簡潔で正確に、日本語で書いてください。"},
            {"role": "user", "content": f"以下の社内情報を参考に質問に答えてください。\n\n参考情報:\n{context}\n\n質問:{query}"}
        ]
    )

    answer = response.choices[0].message.content

    print(context)
    print(f"reply {answer}")
    print(max_index)
    print(max_score)

    return {
        "reply": answer,
        "max_index": max_index,
        "max_score": max_score
    }

@app.post("/document/get")
async def test(request: Request):

    data = await request.json()
    department_id = data.get("department_id")

    base_dir = "./venv/data/departments"

    target_path = None
    for filename in os.listdir(base_dir):
        if filename.startswith(f"{department_id}_"):
            target_path = os.path.join(base_dir, filename)
            break

            print(target_path)

    with open(target_path, "r", encoding="utf-8") as f:
        document = f.read()

    return {"document": document}


@app.post("/document/edit")
async def edit(request: Request):

    data = await request.json()
    text = data.get("text")
    department_id = data.get("department_id")

    base_dir = "./venv/data/departments"

    target_path = None
    for filename in os.listdir(base_dir):
        if filename.startswith(f"{department_id}_"):
            target_path = os.path.join(base_dir, filename)
            break

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(text)

    paragraphs = text.split("\n\n")

    vec_paragraphs = [vectorize_text(para) for para in paragraphs]

    embedding_base_dir = "./venv/embeddings/departments"

    txt_path = None

    for filename in os.listdir(base_dir):
        if filename.startswith(f"{department_id}_"):
            txt_path = os.path.join(embedding_base_dir, filename)
            break

    embedding_path = Path(txt_path).with_suffix(".json")

    # # 保存データを作成
    data_to_save = [
        {"id": i, "text": para, "embedding": vec_para.tolist()}
        for i, (para, vec_para) in enumerate(zip(paragraphs, vec_paragraphs))
    ]

    with open(embedding_path, "w", encoding="utf-8") as f:
        json.dump(data_to_save, f, ensure_ascii=False, indent=2)

    return {"編集が完了しました"}

@app.post("/rag/department/query")
async def receive_department_message(request: Request):
    data = await request.json()
    query = data.get("query")
    department_id = data.get("department_id")
    base_dir = "./venv/data/departments"

    print({department_id})

    target_path = None
    for filename in os.listdir(base_dir):
        if filename.startswith(f"{department_id}_"):
            target_path = os.path.join(base_dir, filename)
            break

    vec_query = vectorize_text(query)

    json_base_dir = "./venv/embeddings/departments/"


    target_path = None
    for filename in os.listdir(json_base_dir):
        if filename.startswith(f"{department_id}_"):
            json_path = os.path.join(json_base_dir, filename)
            break

    print(json_path)

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    paragraphs = [d["text"] for d in data]
    vec_paragraphs = [np.array(d["embedding"]) for d in data]

    scores = [
        cosine_similarity([vec_query], [vec_para])[0][0]
        for vec_para in vec_paragraphs
    ]

    # 最大スコアとそのインデックスを取得
    max_index = int(np.argmax(scores))
    max_score = scores[max_index]

    context = paragraphs[max_index]

# GPTに質問 + コンテキストを渡して回答生成
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "あなたは社内FAQ回答AIです。次の制約を必ず守ってください：\
            1. 回答は、与えられた社内情報の範囲内でのみ行ってください。\
            2. 社内情報に記載がない内容については、推測せずに「不明です」と答えてください。\
            3. 回答は簡潔で正確に、日本語で書いてください。"},
            {"role": "user", "content": f"以下の社内情報を参考に質問に答えてください。\n\n参考情報:\n{context}\n\n質問:{query}"}
        ]
    )

    answer = response.choices[0].message.content

    return {
        "reply": answer,
        "max_index": max_index,
        "max_score": max_score
    }

@app.post("/edit/relation")
async def relation(request: Request):
    # 分岐ファイルごと書き換える場合
    target_path = "./venv/data/department_relations.txt"

    with open(target_path, "r", encoding="utf-8") as f:
        text = f.read()

    paragraphs = text.split("\n\n")
    vec_paragraphs = [vectorize_text(para) for para in paragraphs]
    embedding_path = "./venv/embeddings/department_relations.json"

    data_to_save = [
        {"id": i, "text": para, "embedding": vec_para.tolist()}
        for i, (para, vec_para) in enumerate(zip(paragraphs, vec_paragraphs))
    ]

    with open(embedding_path, "w", encoding="utf-8") as f:
        json.dump(data_to_save, f, ensure_ascii=False, indent=2)

    return {"message": "OK"}