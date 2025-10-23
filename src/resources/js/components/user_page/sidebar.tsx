import YourData from '../department_page/member.tsx';
import ScheduleList from '../common/schedule_list';
import Study from '../common/study';
import { useState } from "react";

const Sidebar = () => {

    const [rangeValue, setRangeValue] = useState(80);

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRangeValue(Number(value));
        console.log("現在の値:", value);
    };

    return (
        <div className="w-80 h-[105vh] bg-[#D9D9D9]">
            <div>
                <a href="/">
                    <img src="/images/logo_icon/estra_logo.png" alt="estraのロゴ" className="w-60 h-25 mx-auto" />
                </a>
            </div>
            <div>
                <div className="flex mt-[-25px]">
                    <YourData />
                </div>
                <div className="flex mt-[10px]">
                    <img src="/images/home/schedule/leaves.png" className="w-[20px] h-[20px] ml-[10px] mr-[5px] mt-[5px]" />
                    <input type="range" id="range1" value={rangeValue} onChange={handleRangeChange} className="appearance-none mt-[10px] w-[230px]  h-[13px] bg-gradient-to-l from-[#FF3131] via-[#FFEB32] to-[#D3F222] rounded-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[4px] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#878787]" />
                    <img src="/images/home/schedule/flame.png" className="w-[30px] h-[30px]" />
                </div>
                <div className="bg-[#ffffff] h-[450px] pt-[10px] mt-[25px] w-[250px] mx-auto rounded">
                    <ScheduleList />
                </div>
                    <Study />
            </div>
        </div>
    );
};

export default Sidebar;
