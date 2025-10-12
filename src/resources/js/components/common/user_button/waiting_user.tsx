import React from 'react'
import UserImage from '../../../images/home/waitting_user.png';

const WaitingUserButton = () => {
    return (
        <div className="relative">
            <img
            src={UserImage}
            alt="ユーザー画像"
            className="w-3 h-30 absolute right-[0px] top-[10px]"
            />
        </div>
    );
};

export default WaitingUserButton;