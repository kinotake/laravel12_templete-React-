import React from 'react';
import RightSummarize from '../components/home/right_contents/summarize';
import LeftSummarize from '../components/home/left_contents/summarize';

const Home: React.FC = () => {
    return (
        <div className="flex">
            <div className="w-1/2">
                <LeftSummarize />
            </div>
            <div className="w-1/2">
                <RightSummarize />
            </div>
        </div>
    );
};

export default Home;