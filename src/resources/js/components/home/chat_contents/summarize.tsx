import React from 'react'
import TextBox from './text_box';

const LeftSummarize = ({ chats , route ,department_id}) => {
    return (
        <div className="bg-[#F9F9F9] min-h-screen">
            <TextBox chats={chats} route={route} department_id={department_id} />
        </div>
    );
};

export default LeftSummarize;