import React, { useEffect } from "react";
import BackUserButton from '../components/common/user_button/back_user';
import Sidebar from '../components/user_page/sidebar';
import Notice from '../components/department_page/main/notice';
import Todo from '../components/department_page/main/todo';

const Home: React.FC = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div>
                    <div
                        style={{ height: "110vh", padding: "1rem" }}
                        className=""
                    >
                        <Notice />
                        <Todo />
                    </div>
                </div>
            </div>
            <BackUserButton />
        </div>
    );
};

export default Home;
