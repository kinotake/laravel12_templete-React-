import { usePage } from "@inertiajs/react";

const DepartmentPage = () => {
    const { props } = usePage();
    const department = props.department;
    const members = department?.members || [];

    return (
        <div>
            <h1 className="text-center">{department?.department_name}</h1>
            <div className="">
                {members.map((member: any) => (
                    <div className="flex mt-[50px]">
                        <div className="relative w-[100px]">
                            <div className="w-[80px] h-[80px] rounded-full ml-4 absolute bg-blue-300"></div>
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