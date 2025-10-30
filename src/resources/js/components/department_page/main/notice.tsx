import { usePage } from "@inertiajs/react";
import MyComponent from './my_component';


const Notice = () => {
    const { props } = usePage();
    const display_data = props.display_data;
    const notices = display_data?.notices || [];

    return (
        <div className="ml-10">
            <h2 className="mt-4">{display_data?.department_name}お知らせ一覧</h2>
            <div className="border-y">
                <div className="w-[75vw] mt-[10px] overflow-x-scroll flex">
                {notices.length === 0 ? (
                    <p>お知らせはありません。</p>
                    ) : (
                    notices.map((notice: any) => (
                        <div className="w-[340px] h-[200px] ml-[5px] mt-[10px] mb-[5px] border-x border-gray-300" key={notice.id} id="notice_content">
                            <div className="flex">
                                <p className=" w-72 ml-2">{notice.title}</p>
                                <div className="bg-[#ffffff] hover:animate-bounce mt-2">
                                    <img src="/images/logo_icon/slack.png" className="w-7 h-7 mx-auto" />
                                </div>
                            </div>
                            <p className="whitespace-pre-line leading-[1.0] m-0 text-sm mr-5 ml-5 mt-2 overflow-y-scroll h-[150px]">
                                {notice.content.replaceAll('<br>', '\n')}
                            </p>
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    );
};

export default Notice;