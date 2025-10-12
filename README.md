# laravel12_templete-React-

origin-right rotate-[30deg]

<div className="absolute fixed right-[0vh] top-[77vh]">
            <div className="relative">
                <img
                    src={UserImage}
                    alt="ユーザー画像"
                    className="w-10 h-30 absolute fixed right-[0vh]"
                />
                <div
                    className={
                        `w-15 h-4 bg-black rounded-l-lg origin-right transition-transform duration-300 absolute ` +
                    (rotated ? 'rotate-[30deg]' : '')
                    }
                    ></div>
            </div>
        </div>
