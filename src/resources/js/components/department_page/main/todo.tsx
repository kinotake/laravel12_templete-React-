import { usePage } from "@inertiajs/react";
import MyComponent from './my_component';


const Todos = () => {
    const { props } = usePage();
    const department = props.department;
    const todos = department?.todos || [];

    console.log(todos);

    return (
        <div className="ml-10">
            <h2 className="mt-4">あなたの{department?.department_name}に関するTodo</h2>
            <div className="border-y">
                <div className="w-[75vw] mt-[10px] overflow-x-scroll flex">
                {todos.length === 0 ? (
                    <p>Todoはありません。</p>
                    ) : (
                    todos.map((todo: any) => (
                        <div className="w-[340px] h-[200px] ml-[5px] mt-[10px] mb-[5px] border-x border-gray-300" key={todo.id} id="notice_content">
                            <div className="flex">
                                <p className=" w-[280px] ml-2">{todo.title}</p>
                                <div className="bg-[#ffffff]">
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
    );
};

export default Todos;