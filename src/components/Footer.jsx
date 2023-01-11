import React from "react";
import { MdOutlineMailOutline, MdPhone, MdLocationPin } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="relative h-[30rem] flex justify-center mt-0 md:mt-16 ">
            <img src="/footer.svg" className="absolute bottom-0" alt="" />
            <div className="w-full sm:w-[90%] relative bottom-0">
                <div className="bg-[#f3f3f370] relative flex flex-wrap lg:justify-around md:justify-center sm:justify-around gap-4 w-full h-auto p-10 rounded-3xl">
                    <div className="flex flex-col  lg:w-[200px] md:w-[300px] sm:w-[160px] pl-5">
                        <div className="font-semibold mb-1 text-[#474747]">Quick Links</div>
                        <div className="flex flex-col text-sm text-[#474747]">
                            <Link target="_blank" href="https://mybooklo.com">
                                <div className="mb-1 cursor-pointer text-[#474747]">Home</div>
                            </Link>

                            <Link target="_blank" href="https://mybooklo.com/courses">
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    Courses
                                </div>
                            </Link>
                            <Link target="_blank" href="https://mybooklo.com/books">
                                <div className="mb-1 cursor-pointer text-[#474747]">Books</div>
                            </Link>
                            <Link target="_blank" href="https://mybooklo.com/testseries">
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    Test Series
                                </div>
                            </Link>
                            <Link target="_blank" href="https://mybooklo.com/privacy-policy">
                                <div className="cursor-pointer text-[#474747]">
                                    Privacy Policy
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col  lg:w-[200px] md:w-[300px] sm:w-[160px] pl-5">
                        <div className="font-semibold mb-1 text-[#474747]">
                            Make Money With Us
                        </div>
                        <div className="flex flex-col text-sm text-[#474747]">
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.mybooklo.app&hl=en_IN&gl=US"
                                target="_BLANK"
                            >
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    User App
                                </div>
                            </Link>
                            <Link href="https://mybooklo.com/affiliate" target="_blank">
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    Affiliate Panel
                                </div>
                            </Link>
                            <Link href="https://mybooklo.com/educator_admin" target="_blank">
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    Educator Panel
                                </div>
                            </Link>
                            <Link href="https://mybooklo.com/publisher" target="_blank">
                                <div className="mb-1 cursor-pointer text-[#474747]">
                                    Publisher Panel
                                </div>
                            </Link>
                            <Link href="https://mybooklo.com/contact" target="_blank">
                                <div className="cursor-pointer text-[#474747]">
                                    Create Personal App
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col  lg:w-[200px] md:w-[300px] sm:w-[160px] box-border pl-5">
                        <div className="font-semibold mb-1 text-[#474747]">Contact</div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-1 text-sm text-[#474747]">
                                <MdOutlineMailOutline className="bg-[#707070] text-white rounded-full mr-2 h-4 w-4 p-[2px]" />
                                <div>contact@mybooklo</div>
                            </div>

                            <div className="flex items-center mb-1 text-sm text-[#474747]">
                                <MdPhone className="bg-[#707070] text-white rounded-full mr-2 h-4 w-4 p-[2px]" />
                                <div>+91 84400 11716</div>
                            </div>

                            <div className="flex items-start mb-1 text-sm text-[#474747]">
                                <div className="mt-[3px]">
                                    <MdLocationPin className="bg-[#707070] text-white text-lg rounded-full mr-2 h-4 w-4 p-[2px]" />
                                </div>
                                <div>
                                    UbGot Software Pvt. Ltd. 5th Floor, Bhamasha Techno Hub,
                                    Malviya Nagar, Jaipur, Rajasthan 302017
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  lg:w-[200px] md:w-[300px] sm:w-[160px] box-border border-l-2 pl-5 ">
                        <div className="font-semibold mb-1 text-[#474747]">About Us</div>
                        <div className="flex flex-col text-sm text-[#474747]">
                            MyBookLo provides a platform that acts as an imtermidiate between
                            user and educator.
                        </div>
                        <div className="font-semibold mt-3 mb-1 text-[#474747]">
                            Follow us on
                        </div>
                        <div className="flex items-center">
                            <AiFillFacebook className="text-blue-500 text-3xl mr-[9px]" />
                            <BsInstagram className="text-2xl mr-3" />
                            <BsLinkedin className="text-2xl text-blue-500 bg-white mr-3" />
                            <FaTelegramPlane className="text-2xl mr-2 bg-blue-400 text-white p-[2px] rounded-sm" />
                            <FaYoutube className="text-4xl mr-2 text-red-500 p-[2px] rounded-sm" />
                        </div>
                        <div>
                            <img src="/playstore.svg" className="h-14 mt-1" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#ffffff60] w-full rounded-full mb-8 mt-5 p-3">
                    <text className="text-sm flex justify-center text-[#858585] items-center">
                        @2022 MyBookLo. All rights reserved. Designed by MyBookLo Infotech
                        Pvt. Ltd.
                    </text>
                </div>
            </div>
        </div>
    );
};

export default Footer;
