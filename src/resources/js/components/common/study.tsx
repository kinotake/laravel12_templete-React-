const Study = () => {
    return (
        <div className="border-l-2 border-[#C090FF] h-[205px] w-[270px] ml-[10px] mt-[15px] pl-[5px]">
            <div className="ml-[5px] pt-3 flex">
                <img className="w-[30px] h-[30px]" src="/images/home/schedule/study.png" alt="" />
                <p className="text-[#C090FF] ml-[5px] pt-[5px]">調査中・思考中</p>
            </div>
            <ul className="text-sm text-gray-500 pt-[8px] flex">
                <p>・</p>
                <p>採点をAIに読み込ませて自動化する改行のため少し長くしてます</p>
            </ul>
            <ul className="text-sm text-gray-500 pt-[8px] flex">
                <p>・</p>
                <p>bladeファイルから素のHTMLファイルへの書き換え</p>
            </ul>
            <ul className="text-sm text-gray-500 pt-[8px] flex">
                <p>・</p>
                <p>採点をAIに読み込ませて自動化する改行のため少し長くしてます</p>
            </ul>
        </div>
    );
};

export default Study;