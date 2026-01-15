'use client';
import YourData from '../department_page/member';
import ScheduleList from '../common/schedule_list';
import Study from '../common/study';
import { useEffect, useState } from "react";
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react';

const Sidebar = ({ display_data }) => {
    const { departments, user_all_surveys, schedules, user } = display_data;

    console.log("schedulesの中身です");
    console.log(schedules);

    console.log("user_all_surveysの中身です");
    console.log(user_all_surveys);
    // カラーバー部分
    const [rangeValue, setRangeValue] = useState(user.energy);

    const handleRangeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRangeValue(Number(value));
        console.log("現在の値:", value);

        const token = document
        .querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        await fetch('/energy_update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': token ?? '',
            },
            credentials: 'include',
            body: JSON.stringify({
                new_energy_value: Number(value),
            }),
        });

        router.reload();
    };

    const { errors } = usePage().props;

    // 予定記入部分
    const [detail, setDetail] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [scheduleSubmitted, setScheduleSubmitted] = useState(false);

    const handleKeyDown = async (e) => {
            if (e.key === "Enter") {
                console.log("エンター押された");
                console.log(detail, start, end);

                setScheduleSubmitted(true);
                router.post('/schedule/store', { detail, start: "20" + start, end: "20" + end })

                const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
                await fetch('/schedule/store', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': token ?? '',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        detail: String(detail),
                        start: String(start),
                        end: String(end),
                        department_id: String(selectedDepartmentId),
                    }),
                });

            }
        };

    // チェックボックスの変更処理
    const [selectedDepartmentId, setSelectedDepartment] = useState(departments[0]?.id || null);

    // 追加
    const [textList, setTextList] = useState([])

    useEffect(() => {
        let surveys = null;
        let department_surveys = null;

        if (selectedDepartmentId == undefined) {

            const department_id = departments[0].id;
            department_surveys = user_all_surveys?.find(survey => survey.department_id == department_id);
            surveys = department_surveys ? department_surveys.surveys : [];

        } else {

            department_surveys = user_all_surveys?.find(
                survey => String(survey.department_id) === String(selectedDepartmentId)
            );
            surveys = department_surveys ? department_surveys.surveys : [];
        }

        setTextList(surveys?.map((s) => s.detail) ?? [])
    }, [selectedDepartmentId])

    const [scheduleList, setScheduleList] = useState([])

    useEffect(() => {
        let user_schedules = null;
        let department_schedules = null;

        if (selectedDepartmentId == undefined) {

            const department_id = departments[0].id;
            department_schedules = schedules?.find(schedules => schedules.department_id == department_id);
            user_schedules = department_schedules ? department_schedules.schedules : [];

        } else {

            department_schedules = schedules?.find(
                schedules => String(schedules.department_id) === String(selectedDepartmentId)
            );
            user_schedules = department_schedules ? department_schedules.schedules : [];

        }

        setScheduleList(user_schedules)
    }, [selectedDepartmentId])

    console.log("scheduleListの中身です")
    console.log(scheduleList)

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
                    <input type="range" id="range1" value={rangeValue} onChange={handleRangeChange} className="appearance-none mt-[10px] w-[230px]  h-[13px] bg-gradient-to-l from-[#FF3131] via-[#FFEB32] to-[#7fff00] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[4px] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#878787]" />
                    <img src="/images/home/schedule/flame.png" className="w-[30px] h-[30px]" />
                </div>
                <div className="bg-[#ffffff] h-auto pt-[10px] mt-[25px] w-[275px] mx-auto rounded">
                    <div className="mt-[5px] ml-[12px] mb-[20px]">
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
                    <ScheduleList departments={departments} schedules={scheduleList} selectedDepartmentId={selectedDepartmentId}/>
                    <div className="border-l-2 border-l-yellow-500 mt-[20px] ml-[12px]">
                        <div className="ml-[18px]">
                            <textarea placeholder="ここに予定を記入してください" className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none" value={detail} onChange={(e) => setDetail(e.target.value)} onKeyDown={handleKeyDown}/>
                            <div className="flex mt-[-px]">
                                <input type="date" placeholder="YY/MM/DD" pattern="\d{2}-\d{2}-\d{2}" className="w-[100px] !text-sm focus:border-none focus:outline-none" value={start} onChange={(e) => setStart(e.target.value)} onKeyDown={handleKeyDown}/>
                                <p>-</p>
                                <input type="date" placeholder="YY/MM/DD" pattern="\d{2}-\d{2}-\d{2}" className="w-[100px] !text-sm focus:border-none focus:outline-none" value={end} onChange={(e) => setEnd(e.target.value)} onKeyDown={handleKeyDown}/>
                            </div>
                            {detail.length >= 30 && (
                                <p style={{ color: "red" }} className="text-sm">
                                30文字以下で入力してください
                                </p>
                            )}
                            {end && start > end && (
                                <p style={{ color: "red" }} className="text-sm">
                                開始日は終了日より前に
                                </p>
                            )}
                        </div>
                    </div>
                    {/* <Study departments={departments} user_all_surveys={user_all_surveys} selectedDepartmentId={selectedDepartmentId}/> */}
                    <Study textList={textList} selectedDepartmentId={selectedDepartmentId}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
