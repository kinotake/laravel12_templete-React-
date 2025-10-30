import React from 'react'
import PeopleText from './belong_people';
import NoPeopleText from './no_belong_people';
import UserButton from '../../common/user_button/summarize';
import { usePage } from "@inertiajs/react";
import type { DepartmentsTable } from "../../../types/database";

const RightSummarize = () => {

    const { props } = usePage();
    const { departments, user_department_ids } = usePage().props;

    console.log(user_department_ids);

    return (
        <div class="border-l-1">
            <div className="flex relative">
                <img src="/images/home/left_curve.png" alt="カーブ画像" className="w-70 h-90" />
                <div className="flex absolute">
                    <div className="mt-45 ml-50">
                        <a href={`/departments/${props.departments[0].id}`}>
                            {user_department_ids.includes(1)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[0].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[0].name}
                                    />
                                )
                            }
                        </a>
                    </div>
                    <div className="mt-7 ml-0">
                        <a href={`/departments/${props.departments[1].id}`}>
                            {user_department_ids.includes(2)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[1].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[1].name}
                                    />
                                )
                            }
                        </a>
                    </div>
                    <div className="mt-60">
                        <a href={`/departments/${props.departments[2].id}`}>
                            {user_department_ids.includes(3)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[2].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[2].name}
                                    />
                                )
                            }
                        </a>
                    </div>
                    <div className="mt-20">
                        <a href={`/departments/${props.departments[3].id}`}>
                            {user_department_ids.includes(4)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[3].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[3].name}
                                    />
                                )
                            }
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="ml-20 z-100">
                    <a href={`/departments/${props.departments[4].id}`}>
                        {user_department_ids.includes(5)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[4].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[4].name}
                                    />
                                )
                            }
                    </a>
                </div>
                <div className="ml-30 z-100">
                    <a href={`/departments/${props.departments[5].id}`}>
                        {user_department_ids.includes(6)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[5].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[5].name}
                                    />
                                )
                            }
                    </a>
                </div>
            </div>
            <div className="flex z-100">
                <div className="mt-30 ml-10">
                    <a href={`/departments/${props.departments[6].id}`}>
                        {user_department_ids.includes(7)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[6].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[6].name}
                                    />
                                )
                            }
                    </a>
                </div>
                <div className="ml-10 z-100">
                    <a href={`/departments/${props.departments[7].id}`}>
                        {user_department_ids.includes(8)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[7].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[7].name}
                                    />
                                )
                            }
                    </a>
                </div>
                <div className="mt-30 z-100">
                    <a href={`/departments/${props.departments[8].id}`}>
                        {user_department_ids.includes(9)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[8].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[8].name}
                                    />
                                )
                            }
                    </a>
                </div>
                <div className="ml-10 relative z-100">
                    <a href={`/departments/${props.departments[9].id}`}>
                        {user_department_ids.includes(10)
                                ? (
                                    <PeopleText
                                        imageSrc="/images/home/belong_people.png"
                                        altText="所属の画像"
                                        description={props.departments[9].name}
                                    />
                                )
                                : (
                                    <NoPeopleText
                                        imageSrc="/images/home/no_belong_people.png"
                                        altText="非所属の画像"
                                        description={props.departments[9].name}
                                    />
                                )
                            }
                    </a>
                </div>
                <UserButton/>
                <div className="fixed right-0 top-[70vh] z-20">
                    <div className="relative">
                        <img src="/images/home/vector.png" alt="カーブ画像" className="w-120 h-70" />
                        <div className="absolute inset-0 mt-40 ml-50">
                            <img src="/images/logo_icon/estra_logo.png" alt="estraのロゴ" className="w-60 h-25" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSummarize;