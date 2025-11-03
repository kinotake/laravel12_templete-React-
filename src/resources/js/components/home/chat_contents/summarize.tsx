import React from 'react'
import TextBox from './text_box';

const LeftSummarize = ({ chats , route }) => {
    return (
        <div className="bg-[#F9F9F9] min-h-screen">
            <TextBox chats={chats} route={route}/>
        </div>
    );
};

export default LeftSummarize;