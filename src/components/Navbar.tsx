import IMG from "@/assets";
import Image from "next/image";
import React from "react";

interface IProps {};

export default function Navbar({}: IProps) {
    return (
        <>
            <nav className="navbar lg:mt-8 mt-[1.125rem] w-full flex justify-between items-start pl-[6.25rem] lg:pr-[2.5rem] pr-[1.1594rem] bg-transparent absolute z-10">
                <div className="logo-wrapper w-[6.6875rem]">
                    <Image className="lg:w-[6.6875rem] lg:block lg:object-cover hidden" src={IMG.logo} alt="FoodTruck_Logo" />
                </div>
                <button className=" transition-all hover:scale-110 border-[0.0625rem] lg:px-4 lg:py-2 px-3 py-1.5 rounded-full border-white bg-transparent text-white">
                    <p className="button-text text-white font-source lg:text-base text-[11px] font-semibold">
                        Get In Touch
                    </p>
                </button>
            </nav>
        </>
    );
}
