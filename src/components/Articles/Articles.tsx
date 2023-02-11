import Image from "next/image";
import React from "react";

import { IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import IMG from "@/assets";
import Card from "./Card";
import useWindowSize from "@/hooks/useWindowSize";

interface IProps {};

const cardsData = [
    {
        id: 1,
        img: IMG.Carousel1,
        title: "Grilled Tomatoes at Home",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
    {
        id: 2,
        img: IMG.Carousel2,
        title: "Snacks for Travel",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
    {
        id: 3,
        img: IMG.Carousel3,
        title: "Post-workout Recipes",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
    {
        id: 4,
        img: IMG.Carousel4,
        title: "How to Grill Corn",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
    {
        id: 5,
        img: IMG.Carousel5,
        title: "Crunchwrap Supreme",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
    {
        id: 6,
        img: IMG.Carousel6,
        title: "Broccoli Cheese Soup",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
    },
];

export default function Articles({}: IProps) {
    const [currPage, setCurrPage] = React.useState<number>(1);
    const [currData, setCurrData] = React.useState<typeof cardsData>(cardsData);

    const cardsPerPage = React.useRef<number>(3);
    const firstIdx = React.useRef<number>(0);
    const lastIdx = React.useRef<number>(
        firstIdx.current + cardsPerPage.current
    );

    const totalPages = React.useRef<number>(
        cardsData.length / cardsPerPage.current
    );

	const {height,width} = useWindowSize()

    React.useEffect(() => {
        setCurrData(cardsData.slice(firstIdx.current, lastIdx.current));
    }, []);

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "next") {
            if (currPage < totalPages.current) {
                firstIdx.current = lastIdx.current;
                lastIdx.current = lastIdx.current + cardsPerPage.current;
                setCurrData(cardsData.slice(firstIdx.current, lastIdx.current));
                setCurrPage((prev) => prev + 1);
            }
        }
        if (direction === "prev") {
            if (currPage > 1) {
                lastIdx.current = firstIdx.current;
                firstIdx.current = firstIdx.current - cardsPerPage.current;
                setCurrData(cardsData.slice(firstIdx.current, lastIdx.current));
                setCurrPage((prev) => prev - 1);
            }
        }
    };

    return (
        <>
            <div id="Articles" className="articles-section-wrapper lg:mt-[9.5rem] mt-[8.25rem] lg:px-[6.75rem]">
                <h2 className="section-head font-source lg:text-left text-center lg:text-[3.5rem] lg:leading-[2.625rem] tracking-[0.04em] text-[1.75rem] leading-[3.375rem] font-semibold text-primaryBlue ">
                    Latest Articles
                </h2>
                <div className="cards-wrapper lg:mt-[4.5rem] lg:flex mt-[1.4375rem] lg:px-0 px-[3.25rem] justify-between">
                    {currData.map((article, idx) => (
                        <Card
                            key={`idx-${idx}-${article.title.substring(0, 5)}`}
                            img={article.img}
                            title={article.title}
                            desc={article.desc}
                            idx={idx}
                        />
                    ))}
                </div>
                <div className="cards-navigation mt-16 flex justify-center w-full items-center">
                    <button
                        onClick={() => handlePageChange("prev")}
						disabled={currPage === 1 ? true : false}
                        className={`left-icon ${currPage === 1 ? 'opacity-40' : 'transition-all hover:scale-110'} w-4 h-4 lg:w-7 lg:h-7 flex justify-center items-center border-[0.0625rem] rounded-[0.3125rem] border-c_button`}
                    >
                        <ChevronLeftIcon
                            boxSize={(width && width > 768) ? 6 : 3.5}
                            className="text-c_button"
                        />
                    </button>
                    <p className="page-indicator mx-[0.875rem] font-source font-normal lg:text-[1.375rem] text-[0.75rem] leading-[1.6875rem] ">
                        {currPage}/{totalPages.current}
                    </p>
                    <button
                        onClick={() => handlePageChange("next")}
						disabled={currPage === totalPages.current ? true : false}
                        className={`right-icon ${currPage === totalPages.current ? 'opacity-40' : 'transition-all hover:scale-110'} w-4 h-4 lg:w-7 lg:h-7 flex justify-center items-center  border-[0.0625rem] rounded-[0.3125rem] border-c_button`}
                    >
                        <ChevronRightIcon
                            boxSize={(width && width > 768) ? 6 : 3.5}
                            className="text-c_button"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

// PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
