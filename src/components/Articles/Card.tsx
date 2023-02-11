import IMG from "@/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
    idx: number;
    img: StaticImageData;
    title: string;
    desc: string;
}

export default function Card({ idx, img, title, desc }: IProps) {
    return (
        <div
            className={`card lg:p-7 lg:mt-0 ${
                idx === 0 ? "" : "mt-[3.8125rem]"
            } rounded-[1.3081rem] lg:mx-4 xl:mx-0 border-[0.0813rem] lg:border-c_card border-c_border_m lg:w-[23.8125rem]`}
        >
            <Image
                className="lg:px-0 lg:pt-0 px-8 pt-8 transition-all hover:scale-105 mx-auto lg:mx-0"
                src={img}
                alt="carousel_1"
            />
            <div className="text-content text-center lg:text-left lg:mt-[2.1875rem] mt-[2.4375rem]">
                <h3 className="card-lead text-primaryBlue font-poppins font-bold lg:text-[21px] lg:leading-[27px] text-base leading-[35px] ">
                    {title}
                </h3>
                <p className="card-subText text-left lg:px-0 px-7  lg:mt-[14px] mt-[6px] font-open font-normal lg:text-[15px] text-[12px] tracking-[-1%]">
                    {desc}
                </p>
            </div>
            <div className="button-wrapper w-full flex justify-center lg:justify-start lg:mb-0 mb-[2.5rem]">
                <button className="transition-all hover:scale-110 border-[0.125rem] lg:mt-[1.3494rem] mt-[1.625rem] lg:px-7 px-[2.0313rem] lg:py-[0.75rem] py-[0.375rem] rounded-full border-c_button bg-white">
                    <p className="button-text text-c_button font-source lg:text-base text-[0.6875rem] font-semibold">
                        Read More
                    </p>
                </button>
            </div>
        </div>
    );
}
