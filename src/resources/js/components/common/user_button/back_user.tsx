import React, { useState, useEffect } from 'react';

const BackUser = () => {

    return (
        <div className='fixed right-[2vh] top-[80vh] z-50'>
            <a href="/">
                <img
                    src="/images/home/back_user.png"
                    alt="ユーザー画像"
                    className="w-25 h-25 opacity-9"
                />
            </a>
        </div>
    );
};

export default BackUser;