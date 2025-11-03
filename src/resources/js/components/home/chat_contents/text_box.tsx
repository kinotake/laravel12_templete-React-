import React from 'react'
import QueryReply from './query_reply';

const TextBox = ({ chats , route  }) => {

    return (
        <div className="bg-[#F9F9F9]">
            <QueryReply chats={chats}/>
            <div className="fixed left-[2.5vw] bottom-[2.5vw]">
                <div className="flex">
                    <p className="ml-[37vw] text-sm">顧客モード</p>
                    <label className="cursor-pointer relative inline-block ml-[0.5vw]">
                        <input type="checkbox" className="sr-only peer" />
                        <img src="/images/home/off.png" className="block peer-checked:hidden" />
                        <img src="/images/home/on.png" className="hidden peer-checked:block" />
                    </label>
                </div>
                <form action={route == "all_search" ? "/api/rag/query" : "/hoge"} method="POST" className="w-[45vw] rounded bg-[#ffffff] border flex">
                    <textarea
                        name="query"
                        placeholder="ここに入力してください"
                        className="w-[42.5vw] h-[10vh] p-2 focus:outline-none"
                    ></textarea>
                    <button type="submit" className="mt-[6vh]">
                        <img
                        src="/images/home/arrow-up.png"
                        className="w-[30px] h-[30px] opacity-50 hover:opacity-100"
                        alt="送信"
                        />
                    </button>
                </form>
                <p className="text-center mt-[0.5vh]">フィードバックを共有する</p>
            </div>
        </div>
    );
};

export default TextBox;