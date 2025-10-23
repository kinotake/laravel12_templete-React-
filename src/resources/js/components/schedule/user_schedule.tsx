import React from "react";
import ScheduleList from '../common/schedule_list';
import Study from '../common/study';

const UserSchedule = () => {

    return (
        <div className="flex overflow-y-scroll w-[77vw]">
            <div className="border-x border-gray-100 w-[280px] mt-[20px]">
                <div className="relative w-[250px] h-[180px] ml-[55px]">
                    <img
                        className="absolute rounded-full w-[160px] h-[160px] z-100 mt-[5px] ml-[5px]"
                        src="/storage/hito.jpg"
                        alt=""
                    />
                    <div className="absolute rounded-full bg-blue-300 w-[170px] h-[170px] z-0"></div>
                </div>
                <div className="text-center">
                    <p className="text-xl">Chiaki Nagashima</p>
                </div>
                <ScheduleList />
                <Study />
            </div>
        </div>
    );
};

export default UserSchedule;
