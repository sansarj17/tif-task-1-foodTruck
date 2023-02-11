import Image from "next/image";
import React from "react";

import {FaInstagram,FaTwitter,FaFacebookF} from "react-icons/fa"

import IMG from "@/assets";
import FooterSubLead from "./FooterSubLead";
import Link from "next/link";

interface IProps {};

export default function Footer({}: IProps) {
    return (
        <>
            <footer id="Footer" className="bg-lightGray lg:mt-[4.0625rem] mt-[3.25rem] lg:flex justify-between items-center lg:px-[6.5625rem] px-[2.625rem] pt-[5.25rem] pb-[5.75rem]">
				<div className="logo lg:flex-[1.5] flex justify-center lg:justify-start">
					<Image className="lg:w-[10rem] w-[8.125rem]" src={IMG.logo} alt="FoodTruck_Logo" />
				</div>
				<div className="contact-us lg:mt-0 mt-[2.625rem] self-start mr-16 flex-1">
					<FooterSubLead>Contact Us</FooterSubLead>
					<p className="address lg:mt-[0.875rem] font-source lg:text-[0.9163rem] text-[0.5475rem] font-normal lg:leading-[1.4394rem] leading-[0.7669rem] lg:w-[30ch] w-[65ch] text-footerSubtext">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
					<p className="email lg:mt-[0.875rem] font-source lg:text-[0.9163rem] text-[0.5475rem] font-normal lg:leading-[1.4394rem] leading-[1.8406rem] lg:w-[30ch] w-[65ch] text-footerSubtext">example2020@gmail.com</p>
					<p className="phone-number lg:mt-[0.875rem] font-source lg:text-[14.66px] text-[0.5475rem] font-normal lg:leading-[1.4394rem] leading-[1.8406rem] lg:w-[30ch] w-[65ch] text-footerSubtext">(904) 443-0343</p>
				</div>
				<div className="more-links lg:mt-0 mt-[0.75rem] self-start flex-[0.8]">
				<FooterSubLead>More</FooterSubLead>
					<Link href="#AboutUs">
					<p className="about-us-link lg:mt-[0.875rem] mt-0 font-source font-normal lg:text-[0.9163rem] text-[0.5475rem] lg:leading-[1.7012rem] leading-[1.375rem] text-footerSubtext">About Us</p>
					</Link>
					<Link href="#Articles">
					<p className="about-us-link lg:mt-[0.875rem] mt-0 font-source font-normal lg:text-[0.9163rem] text-[0.5475rem] lg:leading-[1.7012rem] leading-[1.375rem] text-footerSubtext">Products</p>
					</Link>
					<Link href="#Carrers">
					<p className="about-us-link lg:mt-[0.875rem] mt-0 font-source font-normal lg:text-[0.9163rem] text-[0.5475rem] lg:leading-[1.7012rem] leading-[1.375rem] text-footerSubtext">Career</p>
					</Link>
					<Link href="#Footer">
					<p className="about-us-link lg:mt-[0.875rem] mt-0 font-source font-normal lg:text-[0.9163rem] text-[0.5475rem] lg:leading-[1.7012rem] leading-[1.375rem] text-footerSubtext">Contact Us</p>
					</Link>
				</div>
				<div className="socials-copyright-info lg:mt-0 mt-[1.875rem] self-start h-full flex-[0.5] lg:text-right text-center">
					<div className="socials">
						<h4 className="sub-section-lead lg:block hidden pr-8 font-source font-semibold text-[1.1875rem] leading-[1.6875rem] text-primaryBlue tracking-[3%]">Social Links</h4>
						<div className="social-links-icons flex lg:justify-end justify-center mt-1">
							<Link href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
							<button className="icon-wrapper transition-all hover:scale-110">
								<FaInstagram className="lg:w-[1.3125rem] lg:h-[1.3125rem] w-[0.75rem] h-[0.75rem]" />
							</button>
							</Link>
							<Link href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
							<button className="icon-wrapper transition-all hover:scale-110 lg:ml-8 ml-[1.375rem]">
								<FaTwitter className="lg:w-[1.3125rem] lg:h-[1.3125rem] w-[0.75rem] h-[0.75rem]" />
							</button>
							</Link>
							<Link href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> 
							<button className="icon-wrapper transition-all hover:scale-110 lg:ml-8 ml-[1.375rem]">
								<FaFacebookF className="lg:w-[1.3125rem] lg:h-[1.3125rem] w-[0.75rem] h-[0.75rem]" />
							</button>
							</Link>
						</div>
					</div>
					<p className="copyright-text lg:mt-[6.375rem] mt-0 text-footerCopyText font-roboto font-normal text-[0.5475rem] leading-[2.0081rem] lg:text-[0.9163rem] lg:leading-[1.5625rem] lg:w-[30ch] w-full">© 2022 Food Truck Example</p>
				</div>
			</footer>
        </>
    );
}
