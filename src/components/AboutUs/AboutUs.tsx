import IMG from "@/assets";
import Image from "next/image";
import React from "react";

interface IProps {};

export default function AboutUs({}: IProps) {
    return (
        <>
            <div id="AboutUs" className="about-us-wrapper lg:max-h-[29.1875rem] lg:overflow-hidden lg:mt-[9.375rem] mt-16 bg-lightGray lg:flex justify-between lg:px-[12.8125rem]">
                <div className="img-container lg:block hidden max-h-[29.1875rem] min-w-[24rem] mr-[12.5rem]">
                    <Image
                        className="object-cover w-full max-h-[29.1875rem]"
                        src={IMG.aboutUs}
                        alt="about_us_img"
                    />
                </div>
                <div className="about-text-content lg:py-[6.5625rem] py-[8.75rem] lg:text-left text-center flex-1 w-full">
                    <h2 className="section-head font-poppins font-semibold lg:text-[2.8125rem] lg:leading-[1.6875rem] text-[1.625rem] leading-[2.1875rem] text-primaryBlue">
                        About Us
                    </h2>
                    <p className="section-subtext lg:mt-[1.5rem] mt-[1.3125rem] lg:mx-0 mx-auto font-open font-normal text-[0.6875rem] leading-[1.3125rem] lg:text-[0.9375rem] lg:leading-[1.6875rem] lg:w-[53ch] w-[44ch]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. t has
                        survived not only five centuries.
                    </p>
                    <button className="transition-all hover:scale-110 border-[0.125rem] mt-[1.3494rem] lg:px-7 lg:py-[0.75rem] px-[1.3438rem] py-[0.375rem] bg-brightRed rounded-full border-brightRed">
                        <p className="button-text text-white font-source lg:text-base text-[0.6875rem] tracking-[3%] font-semibold">
                            Read More
                        </p>
                    </button>
                </div>
            </div>
        </>
    );
}

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
