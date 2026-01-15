import React from "react";
import ScheduleList from '../common/schedule_list';
import Study from '../common/study';


const UserNameContent = ({ members_items }) => {

    const setTextList = (member_items) => {
    console.log("konnnitiha");
    return member_items?.surveys?.map((s) => s.detail) ?? [];
};

    return (
        <div className="flex overflow-y-scroll w-[77vw] relative">
            {members_items.map((member_items, i) => (
                <div key={member_items.user_name}>
                    <div className="border-x border-gray-100 w-[280px] mt-[20px]">
                        <div className="relative w-[250px] h-[180px] ml-[55px]">
                            <img
                                className="absolute rounded-full w-[160px] h-[160px] z-100 mt-[5px] ml-[5px]"
                                src="/storage/hito.jpg"
                                alt=""
                            />
                            <div className="absolute rounded-full bg-blue-300 w-[170px] h-[170px] z-0"></div>
                        </div>
                        <div className="text-center h-[30px]">
                            <p className="text-xl">{member_items.user_name}</p>
                        </div>
                        <div className="mt-[15px]">
                            <ScheduleList schedules={member_items.schedules} />
                            <Study
                                textList={setTextList(member_items)}
                                selectedDepartmentId={member_items.selectedDepartmentId}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserNameContent;
