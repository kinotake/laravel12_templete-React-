import React, { useEffect, useState } from "react";

const MyComponent = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [shouldRender, setShouldRender] = useState(false); // 描画判定用のstate

    useEffect(() => {
        const elements = document.querySelectorAll('#notice_content');

        if (elements.length > 4) {
            const show = true;
            const random = oneInTen();

            // 両方trueのときのみ描画
            if (show && random) {
                setShowMessage(true);
            }
        }
    }, []);

    function oneInTen() {
        const result = Math.random() < 0.01; // 確率
        return result;
    }

    return showMessage ? (
        <div className="w-[170px] h-[200px] ml-[5px] mt-[10px] mb-[5px] bg-[#f7fff8] border-x border-gray-300">
            <div className="flex">
                <p className="w-72 mt-2 ml-2">〜for you〜🕊️</p>
            </div>
            <p className="whitespace-pre-line leading-[1.0] m-0 text-sm mr-5 ml-5 mt-2 overflow-y-scroll h-[150px]">
                今日もお疲れ様です<br/><br/>
                (出現する確率は1%です🍀<br/>やったね！)
            </p>
        </div>
    ) : null;
};

export default MyComponent;