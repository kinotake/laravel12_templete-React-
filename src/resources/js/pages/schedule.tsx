import React from 'react';
import UserButton from '../components/common/user_button/summarize';
import Sidebar from '../components/department_page/sidebar';
import UserNameContent from '../components/schedule/user_name_content'
import GoDepartments from "../layouts/scroll/go_departments";
import { usePage } from "@inertiajs/react";

const Schedule: React.FC = () => {

    const { props } = usePage();
    const members_items = props.display_data?.members_items || [];

    console.log("データが")
    console.log(members_items)

    return (
        <GoDepartments>
            <div className="flex">
                <Sidebar />
                <div>
                    <UserNameContent members_items={members_items} />
                </div>
            </div>
            <UserButton />
        </GoDepartments>
    );
};

export default Schedule;