import React from "react";
import { useEffect } from "react";

type LayoutProps = {
    children: React.ReactNode;
};

const UpScroll = ({ children }: LayoutProps) => {
    useEffect(() => {

        const handleScroll = () => {

            let outerHeight = window.scrollY;

            let isCooldown = false;

            console.log(`現在のスクロール位置の高さ: ${outerHeight}px`);

            if (outerHeight > 40) {
                window.location.href = "/schedule";
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

                isCooldown = true;

                setTimeout(() => {
                    isCooldown = false;
                    console.log("再び実行可能になりました");
                }, 2000);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // クリーンアップ（アンマウント時）
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default UpScroll;
