const ScheduleList = () => {
    return (
        <div className="border-l-4 border-gray-300 ml-[10px] h-[390px] relative mt-[15px]">
            {/* mtの値は月の初めから換算して、 一日13px*/}
            {/* 期間の長さによって重なりの値を変える z-(31-日付の日数) */}
            <div className="flex absolute hover:bg-[#ffffff] z-10 group mt-[26px]">
                {/* h-[90px]のみ日付の長さによって可変にする 一日13px*/}
                <img className="w-[30px] h-[45px] group-hover:z-100" src="/images/home/schedule/blue_fox.png" alt="" />
                {/* 孤の高さhの値をxとおくと、 mt-[（x-20）/2] */}
                <div className="group-hover:z-100">
                    <p className="text-sm text-gray-500 mt-[8px] w-[200px]">ここに内容が入る</p>
                    <p className="text-sm text-gray-500 hidden group-hover:block">(10/3-10/6)</p>
                </div>
            </div>
            <div className="flex absolute hover:bg-[#ffffff] z-10 group">
                {/* h-[90px]のみ日付の長さによって可変にする 一日13px*/}
                <img className="w-[30px] h-[45px] group-hover:z-100" src="/images/home/schedule/blue_fox.png" alt="" />
                {/* 孤の高さhの値をxとおくと、 mt-[（x-20）/2] */}
                <div className="group-hover:z-100">
                    <p className="text-sm text-gray-500 mt-[8px] w-[200px]">社内の情報の構造化をしたい</p>
                    <p className="text-sm text-gray-500 hidden group-hover:block">(10/3-10/6)</p>
                </div>
            </div>
        </div>
    );
};

export default ScheduleList;