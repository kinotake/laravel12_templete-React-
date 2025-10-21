import React, { useState, useEffect } from 'react';

const HoveredUserButton = () => {
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setRotated(prev => !prev); // 1秒ごとに状態を反転
        }, 200);

        return () => clearInterval(interval); // クリーンアップ
    }, []);

    return (
        <div className="relative">
            <a href="/hoge">
                <img
                    src="/images/home/user.png"
                    alt="ユーザー画像"
                    className="w-10 h-32 absolute right-[0px]"
                />
                <div className={
                    `absolute top-[47px] w-15 h-4 bg-black rounded-l-lg origin-right transition-transform duration-300 ` +(rotated ? 'rotate-[30deg]' : '')
                    }
                ></div>
            </a>
        </div>
    );
};

export default HoveredUserButton;
