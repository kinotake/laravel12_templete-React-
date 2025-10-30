import YourData from '../department_page/member';
import ScheduleList from '../common/schedule_list';
import Study from '../common/study';
import { useState } from "react";
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react';

const Sidebar = ({ departments, surveys, schedules }) => {

    // カラーバー部分
    const [rangeValue, setRangeValue] = useState(80);

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRangeValue(Number(value));
        console.log("現在の値:", value);
    };

    // 予定記入部分
    const [detail, setDetail] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [scheduleSubmitted, setScheduleSubmitted] = useState(false);

    const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                console.log(detail, start, end);

                setScheduleSubmitted(true);
                router.post('/schedule/store',{ detail, start: "20" + start, end: "20" + end })
            }
        };

    const { errors } = usePage().props;
    console.log(errors);

    // チェックボックスの変更処理
    const [selectedDepartmentId, setSelectedDepartment] = useState(departments[0]?.id || null);

    return (
        <div className="w-80 h-auto bg-[#D9D9D9]">
            <div>
                <a href="/">
                    <img src="/images/logo_icon/estra_logo.png" alt="estraのロゴ" className="w-60 h-25 mx-auto" />
                </a>
            </div>
            <div>
                <div className="flex mt-[5px]">
                    <YourData />
                </div>
                <div className="flex">
                    <img src="/images/home/schedule/leaves.png" className="w-[20px] h-[20px] ml-[10px] mr-[5px] mt-[5px]" />
                    <input type="range" id="range1" value={rangeValue} onChange={handleRangeChange} className="appearance-none mt-[10px] w-[230px]  h-[13px] bg-gradient-to-l from-[#FF3131] via-[#FFEB32] to-[#D3F222] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[4px] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#878787]" />
                    <img src="/images/home/schedule/flame.png" className="w-[30px] h-[30px]" />
                </div>
                <div className="bg-[#ffffff] h-auto pt-[10px] mt-[25px] w-[275px] mx-auto rounded">
                    <ScheduleList departments={departments} displaySchedules={schedules} selectedDepartmentId={selectedDepartmentId}/>
                    <div className="mt-[20px] ml-[12px]">
                        {departments.map((department) => (
                            <label className="flex border-l-2 border-l-blue-400">
                                <div className="w-[210px] ml-[18px]">
                                    <p className="text-gray-500">{ department.name }</p>
                                </div>
                                <input type="radio" name="toggle" className="sr-only peer" checked={selectedDepartmentId === department.id} onChange={() => setSelectedDepartment(department.id)}/>
                                {selectedDepartmentId === department.id ? (
                                <img src="/images/logo_icon/checked.png" className="w-[20px] h-[20px]" />
                                ) : (
                                <img src="/images/logo_icon/check.png" className="w-[20px] h-[20px] opacity-50" />
                                )}
                            </label>
                        ))}
                    </div>
                    <div className="border-l-2 border-l-yellow-500 mt-[20px] ml-[12px]">
                        <div className="ml-[18px]">
                            <textarea placeholder="ここに予定を記入してください" className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none" value={detail} onChange={(e) => setDetail(e.target.value)} onKeyDown={handleKeyDown}/>
                            <div className="flex mt-[-px]">
                                <input type="text" placeholder="YY/MM/DD" pattern="\d{2}-\d{2}-\d{2}" className="w-[80px] !text-sm focus:border-none focus:outline-none" value={start} onChange={(e) => setStart(e.target.value)} onKeyDown={handleKeyDown}/>
                                <p>-</p>
                                <input type="text" placeholder="YY/MM/DD" pattern="\d{2}-\d{2}-\d{2}" className="w-[80px] !text-sm focus:border-none focus:outline-none" value={end} onChange={(e) => setEnd(e.target.value)} onKeyDown={handleKeyDown}/>
                            </div>
                            {errors && Object.entries(errors).map(([key, message]) => (
                                <p key={key} className="text-red-500 text-[11px] mt-1">
                                    {message}
                                </p>
                            ))}
                        </div>
                    </div>
                    <Study data={{ departments, surveys, selectedDepartmentId }} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
