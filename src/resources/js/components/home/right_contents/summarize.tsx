import React from 'react'
import PeopleText from './belong_people';
import NoPeopleText from './no_belong_people';
import BelongPeopleImage from '../../../images/home/belong_people.png';
import NoBelongPeopleImage from '../../../images/home/no_belong_people.png';
import LeftCurveImage from '../../../images/home/left_curve.png';
import VectorImage from '../../../images/home/vector.png';
import EstraLogoImage from '../../../images/logo_icon/estra_logo.png';
import UserButton from '../../common/user_button/summarize';


const RightSummarize = () => {
    return (
        <div class="border-l-1">
            <div className="flex relative">
                <img src={LeftCurveImage} alt="カーブ画像" className="w-70 h-90" />
                <div className="flex absolute">
                    <div className="mt-45 ml-50">
                        <PeopleText
                        imageSrc={BelongPeopleImage}
                        altText="所属の画像"
                        description="career counselor_" />
                    </div>
                    <div className="mt-7 ml-0">
                        <PeopleText
                        imageSrc={BelongPeopleImage}
                        altText="所属の画像"
                        description="sales_" />
                    </div>
                    <div className="mt-60">
                        <PeopleText
                        imageSrc={BelongPeopleImage}
                        altText="所属の画像"
                        description="development_(PT)" />
                    </div>
                    <div className="mt-20">
                        <NoPeopleText
                        imageSrc={NoBelongPeopleImage}
                        altText="所属の画像"
                        description="manager_" />
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="ml-20">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="development_(CT)" />
                </div>
                <div className="ml-30">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="coach_" />
                </div>
            </div>
            <div className="flex">
                <div className="mt-30 ml-10">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="counselor_" />
                </div>
                <div className="ml-10">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="CS_" />
                </div>
                <div className="mt-30">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="marketing_" />
                </div>
                <div className="ml-10">
                    <PeopleText
                    imageSrc={BelongPeopleImage}
                    altText="所属の画像"
                    description="QA_" />
                </div>
                <UserButton/>
                <div className="fixed right-0 top-[70vh]">
                    <div className="relative">
                        <img src={VectorImage} alt="カーブ画像" className="w-120 h-70" />
                        <div className="absolute inset-0 mt-40 ml-50">
                            <img src={EstraLogoImage} alt="estraのロゴ" className="w-60 h-25" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSummarize;