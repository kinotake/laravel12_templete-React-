import { usePage } from "@inertiajs/react";

const DepartmentPage = () => {
    const { props } = usePage();
    const department = props.department;
    const members = department?.members || [];

    return (
        <div>
            <h1 className="text-center">{department?.department_name}</h1>
            <ul className="h-150 overflow-y-scroll">
                {members.map((member: any) => (
                    <div className="flex mt-8">
                        <div>
                            <div className="w-17 h-17 rounded-full ml-4">
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
            </ul>
        </div>
    );
    };

export default DepartmentPage;