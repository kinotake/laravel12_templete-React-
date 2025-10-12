import React, { useState } from 'react';
import WaitingUserButton from './waiting_user';
import HoveredUserButton from './user';

const UserButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} className=" w-20 h-40  absolute fixed right-[0vh] top-[77vh] z-50">
        {isHovered ? <HoveredUserButton /> : <WaitingUserButton />}
        </div>
    );
};

export default UserButton;
