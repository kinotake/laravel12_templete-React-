import React, { useEffect, useRef } from 'react';

const TextBox = ({ chats }) => {

    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [chats]);

    return (
        <div className="h-[80vh] overflow-y-auto" ref={scrollRef}>
            {chats.map((chat, index) => (
                <li key={index}>
                    <div className="rounded-lg w-[37.5vw] bg-[#D9D9D9] mt-[20px] ml-[10vw]">
                        <p className="w-[35vw] text-sm text-gray-700 py-[2px] ml-[1vw] pt-[20px] pb-[20px]">{chat.query}</p>
                    </div>
                    <div className="">
                        <p className="text-sm py-[2px] ml-[1vw] pt-[40px] pb-[20px] w-[42vw] ml-[4vw]">{chat.answer}</p>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TextBox;