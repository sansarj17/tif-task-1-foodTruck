import IMG from "@/assets";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {}

export default function Header({}: IProps) {
    const { width, height } = useWindowSize();

    return (
        <header className="flex lg:justify-between lg:items-center lg:flex-row flex-col-reverse lg:pl-[6.25rem] ">
            <div className="text-content flex-[0.8] lg:pt-[0rem] pt-[4.6875rem] text-center lg:text-left">
                <h1 className="main-heading mx-auto lg:mx-0 text-primaryBlue font-source font-bold lg:text-[3.875rem] text-[2.375rem] lg:leading-[4.1875rem] leading-[2.875rem] lg:w-[11ch] w-[13ch]">
                    Discover the{" "}
                    <span className="inner-highlight text-brightRed">Best</span>{" "}
                    Food and Drinks
                </h1>
                <p className="hero-text font-open lg:text-[1.0275rem] lg:leading-[1.7131rem] leading-[1.125rem] text-[0.6875rem] w-[40ch] lg:mx-0 mx-auto lg:mt-[1.375rem] mt-[1.3125rem]">
                    Naturally made Healthcare Products for the better care &
                    support of you body.
                </p>
                <Link href="#Articles">
                    <button className=" transition-all hover:scale-110 border-[0.125rem] lg:mt-[2.375rem] mt-[1.75rem] lg:px-[2.1875rem] px-[1.1563rem] lg:py-[0.875rem] py-[0.75rem] rounded-full border-white bg-brightRed text-white">
                        <p className="button-text text-white font-source lg:leading-[2.25rem] lg:text-[1.125rem] tracking-[0.01em] text-[0.7669rem] font-semibold">
                            Explore Now!
                        </p>
                    </button>
                </Link>
            </div>
            {width && width < 768 ? (
                <>
                    <div className="hero-img flex-[1] relative w-full">
                        <Image
                            className="w-full  object-cover absolute"
                            src={IMG.heroOverlay}
                            alt="hero_img"
                        />
                        <Image
                            className="w-full object-cover lg:max-h-[51rem] lg:object-fill"
                            src={IMG.hero}
                            alt="hero_img"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="hero-img flex-[1] relative w-full">
                        <Image
                            className="w-full  object-cover lg:-translate-y-[0.125rem] lg:max-h-[51rem] lg:object-fill"
                            src={IMG.heroCombined}
                            alt="hero_img"
                        />
                    </div>
                </>
            )}
        </header>
    );
}
