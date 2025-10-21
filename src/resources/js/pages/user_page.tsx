import React from 'react';
import UserButton from '../components/common/user_button/summarize';
import Sidebar from '../components/department_page/sidebar.tsx';
import Notice from '../components/department_page/main/notice.tsx';
import Todo from '../components/department_page/main/todo.tsx';

const Home: React.FC = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div>
                    <Notice />
                    <Todo />
                </div>
            </div>
            <UserButton />
        </div>
    );
};

export default Home;