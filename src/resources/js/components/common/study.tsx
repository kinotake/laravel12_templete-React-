import React, { useState, useEffect, useCallback } from "react";
import { TLSSocket } from "tls";

interface Props {
    textList: string[]
}

const Study = ({ textList, selectedDepartmentId }: Props) => {
    console.log("textListの中の値です")
    console.log(textList)

    const [texts, setTexts] = useState<string[]>(textList);

    // 案1: useEffectなどを用いでtexts stateを更新する
    // 案2: 表示用のデータと入力用の状態管理を分ける

    const handleChange = (index: number, value: string) => {
        setTexts((prev) => {
            const newArr = [...prev];
            newArr[index] = value;
            return newArr;
        });
    };

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>, textIndex: number) => {
            if (e.key === "Enter") {
                console.log("送信内容:", textIndex, texts[textIndex]);
                const array_number = textIndex + 1;
                console.log("デパートメント:", selectedDepartmentId);

                const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
                await fetch('/study/store', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': token ?? '',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        detail: String(texts[textIndex]),
                        array_number: String(array_number),
                        department_id: String(selectedDepartmentId),
                    }),
                });
            }
    };

    return (
        <>
            <div
                className="border-l-2 border-[#C090FF] h-[205px] w-[270px] ml-[10px] mt-[15px] pl-[5px] mb-[15px]"
            >
                <div className="ml-[5px] pt-3 flex">
                    <img
                        className="w-[30px] h-[30px]"
                        src="/images/home/schedule/study.png"
                        alt=""
                    />
                    <p className="text-[#C090FF] ml-[5px] pt-[5px]">
                        調査中・思考中
                    </p>
                </div>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="text-sm text-gray-500 pt-[8px] flex">
                        <p>・</p>
                        <textarea
                            placeholder="ここに色々記入してください"
                            className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none"
                            defaultValue={textList[index] ?? ""}
                            onChange={(event) => handleChange(index, event.target.value)}
                            onKeyDown={(keyboardEvent) => handleKeyDown(keyboardEvent, index)}
                        />
                    </div>
                ))}
                {/* {texts.map((t) => t)} // 改行不可
                {texts.map((t) => { return t })} //複数行可
                {texts.map((t) => (t))} // 複数行可 */}
            </div>
        </>
    );
};

export default Study;

