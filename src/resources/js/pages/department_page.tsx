import React from 'react';
import UserButton from '../components/common/user_button/summarize';
import Sidebar from '../components/department_page/sidebar';
import Notice from '../components/department_page/main/notice';
import Todo from '../components/department_page/main/todo';
import GoSchedule from "../layouts/scroll/go_schedule";

const Home: React.FC = ({ display_data }) => {

    const department_id = display_data.department_id;
    console.log({ department_id });

    let arr = ["「無成果無価値」をお探しですか？ ヒント:かっこつけないで愛に語れば見つけられるかもしれません。"];

    console.log({ arr });

    return (
        <GoSchedule>
            <div>
                <div className="flex">
                    <Sidebar department_id={department_id} />
                    <div>
                        <Notice />
                        <Todo />
                    </div>
                </div>
                <UserButton />
            </div>
        </GoSchedule>
    );
};

export default Home;