import React from 'react'

const WaitingUserButton = () => {
    return (
        <div className="relative">
            <img
            src="/images/home/waitting_user.png"
            alt="ユーザー画像"
            className="w-3 h-30 absolute right-[0px] top-[10px]"
            />
        </div>
    );
};

export default WaitingUserButton;