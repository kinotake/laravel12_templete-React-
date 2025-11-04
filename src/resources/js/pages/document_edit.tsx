import { usePage } from '@inertiajs/react';
import ChatSummarize from '../components/home/chat_contents/summarize';
import React, { useState } from 'react';
import { router } from "@inertiajs/react";

const DocumentEdit: React.FC = () => {
    const { chats, route, document, department_id } = usePage().props;
    console.log(department_id);

    let [text, setText] = useState(document)

    const [isLoading, setIsLoading] = useState(false);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                // Shift + Enter → 改行OK（何もしない）
                return;
            } else {
                // Enterのみ → 送信処理
                e.preventDefault();
                console.log("送信内容:", text);
                setIsLoading(true);

                router.post(`/rag/edit/${department_id}`, {
                        department_id: department_id,
                        text: text,
                    }, {
                    onSuccess: () => {
                        console.log("送信成功！");
                    },
                    onError: (errors) => {
                        console.error("送信失敗:", errors);
                    },
                });
            }
        }
    };


    return (
        <div className="flex">
            <div className="w-1/2 bg-[#F9F9F9]">
                <ChatSummarize chats={chats} route={route} department_id={department_id} />
            </div>
            <div className="w-1/2 h-[90vh] overflow-y-auto border-4 border-gray-300 ml-[20px] mt-[20px] w-[700px] rounded-sm">
                <textarea className="h-[90vh] w-[680px] ml-[10px] mt-[10px]" value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}></textarea>
                <div>
                    <p className="ml-[10px] mt-2 text-gray-500">shift+enter  改行   enter 書き換え</p>
                </div>
            </div>
        </div>
    );
};

export default DocumentEdit;