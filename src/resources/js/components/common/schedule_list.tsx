const ScheduleList = ({ schedules }) => {

    console.log("schedulesの値のデバックです")
    console.log(schedules)

    const csrfToken =
    typeof document !== 'undefined'
        ? document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute('content')
            : '';

    return (
        <div className="border-l-4 border-gray-300 ml-[10px] h-[413px]">
                        {schedules?.map((schedule, j) => {
                            const startDay = schedule.start.split("T")[0];
                            const endDay = schedule.end.split("T")[0];

                            const now = new Date();
                            const todayMonth = now.getMonth() + 1;

                            const startDayMonth = startDay.split("-")[1];
                            const endDayMonth = endDay.split("-")[1];

                            let replacedStartDay;
                            if (todayMonth != startDayMonth) {
                                replacedStartDay = 1;
                            } else {
                                replacedStartDay = startDay.split("-")[2];
                            }

                            let replacedEndDay;
                            if (todayMonth != endDayMonth) {
                                replacedEndDay = 31;
                            } else {
                                replacedEndDay = endDay.split("-")[2];
                            }

                            const longDay = replacedEndDay - replacedStartDay;
                            const day_height = 13;
                            const fox_mt = (replacedStartDay - 1) * day_height;
                            const fox_height = (replacedEndDay - replacedStartDay) * day_height;
                            const fox_z = (31 - longDay) * 3;
                            const text_mt = (fox_height - 20) / 2;

                            return (
                                <div key={j}>
                                    <div
                                        className="flex absolute hover:bg-[#ffffff] group"
                                        style={{
                                            marginTop: `${fox_mt}px`,
                                            zIndex: fox_z,
                                        }}
                                    >
                                        <img
                                            className="w-[30px] group-hover:z-100"
                                            src="/images/home/schedule/blue_fox.png"
                                            alt=""
                                            style={{
                                                height: `${fox_height}px`,
                                            }}
                                        />
                                        <div className=" flex flex-col gap-2 group-hover:z-[100] group-hover:bg-[#ffffff]" style={{ marginTop: `${text_mt}px` }}>
                                            <p
                                                className="text-sm text-gray-500 w-[200px]"
                                            >
                                                {schedule.detail}
                                            </p>
                                            <p className="text-sm text-gray-500 hidden group-hover:block">
                                                ({startDay}〜{endDay})
                                            </p>
                                            <form
                                            action={`/schedule/delete/${schedule.id}`}
                                            method="POST">
                                                <input type="hidden" name="_token"  value={csrfToken}/>
                                                <button
                                                    type="submit"
                                                    className="text-red-500 ml-2 text-gray-400"
                                                >
                                                    削除
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
        </div>
    );
};

export default ScheduleList;
