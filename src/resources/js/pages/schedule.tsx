import React from 'react';
import UserButton from '../components/common/user_button/summarize';
import Sidebar from '../components/department_page/sidebar.tsx';
import UserSchedule from '../components/schedule/user_schedule'

const Schedule: React.FC = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div>
                    <UserSchedule />
                </div>
            </div>
            <UserButton />
        </div>
    );
};

export default Schedule;