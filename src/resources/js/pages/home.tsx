import React from 'react';
import { usePage } from '@inertiajs/react';
import RightSummarize from '../components/home/right_contents/summarize';
import ChatSummarize from '../components/home/chat_contents/summarize';

const Home: React.FC = () => {
    const { chats,route } = usePage().props;

    return (
        <div className="flex">
            <div className="w-1/2 bg-[#F9F9F9]">
                <ChatSummarize chats={chats} route={route} />
            </div>
            <div className="w-1/2">
                <RightSummarize />
            </div>
        </div>
    );
};

export default Home;