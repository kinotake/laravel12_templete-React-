import { usePage } from "@inertiajs/react";
import MyComponent from './my_component';


const Todos = () => {
    const { props } = usePage();
    const display_todos = props.display_data?.display_todos || [];

    return (
        <div className="ml-10">
            {display_todos.map((group) => (
                <div key={group.department_id}>
                    <h2 className="mt-4">あなたの{group.department_name ?? "未分類"}に関するTodo</h2>
                    <div className="border-b">
                        <div className="w-[75vw] mt-[10px] overflow-x-scroll flex">
                        {group.todos.length === 0 ? (
                            <p>Todoはありません。</p>
                            ) : (
                            group.todos.map((todo: any) => (
                                <div className="w-[340px] h-[200px] ml-[5px] mt-[10px] mb-[5px] border-x border-gray-300" key={todo.id} id="notice_content">
                                    <div className="flex">
                                        <p className=" w-[280px] ml-2">{todo.title}</p>
                                        <div className="bg-[#ffffff] hover:animate-bounce mt-2">
                                            <a href={todo.slack_url} target="_blank">
                                                <img src="/images/logo_icon/slack.png" className="w-8 h-7" />
                                            </a>
                                        </div>
                                        <div className="bg-[#ffffff] mt-[8px] ml-[7px] mr-[10px]">
                                            <a href="">
                                                <img src="/images/home/todo/done.png" className="w-7 h-7 hover:content-[url('/images/home/todo/done_hover.png')]" />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="whitespace-pre-line leading-[1.0] m-0 text-sm mr-5 ml-5 mt-2 overflow-y-scroll h-[150px]">
                                    {todo.content.replaceAll('<br>', '\n')}
                                    </p>
                                </div>
                            ))
                        )}
                        <MyComponent />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todos;