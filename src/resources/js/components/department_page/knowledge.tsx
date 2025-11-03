const Knowledge = ({department_id}) => {

    let lms = {
        url: "https://lms.coachtech.site/renewal/user/login/",
        image: "/images/logo_icon/lms.png",
    };

    let notion = {
        url: "https://www.notion.so/estra-inc/COACHTECH-a488d565274847a1a6228945b1cc06be",
        image: "/images/logo_icon/notion.png",
    };
    let document = {
        url: `/document/edit/${department_id}`,
        image: "/images/logo_icon/document.png",
    };

    return (
        <div className="bg-[#ffffff] w-70 h-30 rounded ml-5 bottom-[3vh] fixed">
            <p className="pt-3 ml-5">ナレッジ・ツール一覧</p>
            <div className="flex ml-5">
                <div className="border-4 border-gray-350 mr-2 hover:animate-bounce">
                    <a href={lms.url}>
                        <img src={lms.image} className="w-15 h-15 mx-auto" />
                    </a>
                </div>
                <div className="border-4 border-gray-350 ml-2 mr-2 hover:animate-bounce">
                    <a href={notion.url}>
                        <img src={notion.image} className="w-15 h-15 mx-auto" />
                    </a>
                </div>
                <div className="border-4 border-gray-350 mr-2 ml-2 hover:animate-bounce">
                    <a href={document.url}>
                        <img src={document.image} className="w-15 h-15 mx-auto" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Knowledge;