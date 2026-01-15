import { usePage } from "@inertiajs/react";
import { useState } from "react";

const DepartmentPage = () => {
    const { props } = usePage();
    const display_data = props.display_data;
    const members = display_data?.members || [];

    const getColor = (value: number): string => {
        console.log("型定義です");
        console.log(value, typeof value);
        if (value === 0) return '#7fff00';
        if (value === 100) return '#FF3131';
        if (value < 20) return '#baf81c';
        if (value < 40) return '#ebf02c';
        if (value < 60) return '#ffeb32';
        if (value < 80) return '#ff9035';
        if (value < 99) return '#ff6633';
        return '#00ff00';
    };

    console.log("membersの値です");
    console.log(members);

    return (
        <div>
            <h1 className="text-center">{display_data?.department_name}</h1>            <div className="">
                {members.map((member: any ,index: number) => (
                    <div className="flex h-[100px]">
                        <div className="relative w-[100px]">
                            <div
                                className="w-[80px] h-[80px] rounded-full ml-4 absolute"
                                style={{ backgroundColor : getColor(member.energy) }}
                            ></div>
                            <div className="w-[69px] h-[68px] rounded-full ml-[22px] absolute mt-[2px]">
                                <img className="rounded-full" src={'/storage/hito.jpg'} alt="" />
                            </div>
                        </div>
                        <div className="w-50 ml-2">
                            <p className="font-bold text-lg">{member.name}</p>
                            {/* tweetが存在する場合のみ表示 */}
                            {member.tweet ? (
                            <p className="text-gray-800 text-xs">{member.tweet.content}</p>
                        ) : (
                            <p className="text-gray-400 text-xs">ひとこと</p>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    };

export default DepartmentPage;