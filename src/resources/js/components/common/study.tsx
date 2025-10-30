const Study = ({ data, survey }) => {

    let display_data = undefined;


    if (survey) {
        display_data = {
            surveys: survey
        };

    } else {
        const surveys = data.surveys;
        let selectedDepartmentId = data.selectedDepartmentId;

        console.log(selectedDepartmentId);
        if (selectedDepartmentId == null) {

            const department_id =data.departments[0].id;
            display_data = surveys.find(survey => survey.department_id === department_id);
        }
        else {

            display_data = surveys.find(survey => survey.department_id === selectedDepartmentId);
        }
        console.log(display_data);
    }

    return (
        <>
            {[display_data].map((display_item, i) => (
                <div className="border-l-2 border-[#C090FF] h-[205px] w-[270px] ml-[10px] mt-[15px] pl-[5px] mb-[15px]">
                    <div className="ml-[5px] pt-3 flex">
                        <img className="w-[30px] h-[30px]" src="/images/home/schedule/study.png" alt="" />
                        <p className="text-[#C090FF] ml-[5px] pt-[5px]">調査中・思考中</p>
                    </div>
                    <div className="text-sm text-gray-500 pt-[8px] flex">
                        <p>・</p>
                        <textarea placeholder="ここに色々記入してください" className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none" value={display_data?.surveys?.[0]?.detail ?? ""} />
                    </div>
                    <div className="text-sm text-gray-500 pt-[8px] flex">
                        <p>・</p>
                        <textarea placeholder="ここに色々記入してください" className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none" value={display_data?.surveys?.[1]?.detail ?? ""} />
                    </div>
                    <div className="text-sm text-gray-500 pt-[8px] flex">
                        <p>・</p>
                        <textarea placeholder={display_data?.surveys?.[1]?.detail ?? "ここに色々記入してください"} className="w-[230px] !text-sm h-[40px] resize-none focus:border-none focus:outline-none" />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Study;