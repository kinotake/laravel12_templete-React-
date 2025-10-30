import BackUserButton from '../components/common/user_button/back_user';
import Sidebar from '../components/user_page/sidebar';
import Todo from '../components/department_page/main/todo';
import { usePage } from '@inertiajs/react';


const Home: React.FC = () => {
    const { display_data } = usePage().props;
    const { departments } = display_data;
    const { surveys } = display_data;
    const { schedules } = display_data;

    return (
        <div>
            <div className="flex">
                <Sidebar departments ={departments} surveys={surveys} schedules ={schedules}/>
                <div>
                    <div
                        style={{ height: "110vh", padding: "1rem" }}
                        className=""
                    >
                        <Todo />
                    </div>
                </div>
            </div>
            <BackUserButton />
        </div>
    );
};

export default Home;