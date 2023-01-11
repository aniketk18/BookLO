import {
    BiChevronUp,
    BiChevronRight,
    BiChevronDown,
    BiSearch,
} from "react-icons/bi";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Typed from 'react-typed';
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()

    const [showFilter, setShowFilter] = useState(false);

    const [currentAffair, setCurrentAffair] = useState({});
    const [topEducators, setTopEducators] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const [res1, res2, res3] = await Promise.all([
                    axios.get(
                        `https://mybooklo.com/user-service/api/fetch/today/current/affair`
                    ),
                    axios.get(`https://mybooklo.com/user-service/api/fetch/top/3/educator`),
                    axios.get(`https://mybooklo.com/publisher-service/api/fetch/publisher/list`),
                ]);

                setCurrentAffair(res1.data.data.current_affair);
                setTopEducators(res2.data.data.top_educator);
                setPublishers(res3.data.data.publisher);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get(`https://mybooklo.com/course/api/playlist/show/category`)
                    .then((res) => res.data)
                    .then((data) => setCategories(data.data.playlist_category));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    console.log(currentAffair)

    return (
        <>
            <div className="w-full justify-center items-center flex flex-col">
                <div className="w-full absolute top-10">
                    <Navbar />
                </div>
                <img src="/bg.svg" className="" />

                <div className="w-full flex flex-col items-center relative bottom-44">
                    <div className="mt-3 w-[90%] lg:w-[60%] justify-center hidden sm:flex relative">
                        {showFilter ? (
                            <div className="bg-[#ffffff] shadow-xl z-30 w-full h-[30rem] top-10 absolute flex flex-col items-center lg:p-6 rounded-3xl">
                                <div className="flex w-full h-full p-4 justify-between">
                                    <div className="w-[50%] lg:w-[20%] h-full pr-4 overflow-y-scroll overflow-x-hidden flex flex-col border-r-2">
                                        {categories?.map((ele, i) => (
                                            <div
                                                key={i}
                                                onClick={() => setSelectedCategory(i)}
                                                className="bg-[#dcdcdc] last:mb-6 cursor-pointer flex items-center justify-between mb-2 p-1 pl-3 rounded-full text-sm text-gray-600 font-medium"
                                            >
                                                <div className="line-clamp-1">{ele.course_name}</div>
                                                <div>
                                                    <BiChevronRight className="text-lg" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-[50%] lg:w-[80%]  content-start justify-start h-full grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-scroll">
                                        {categories[+selectedCategory]?.children?.map((ele, i) => (
                                            <div
                                                key={i}
                                                // onClick={() =>
                                                //     router.push(`/testseries/category/${ele.id}`)
                                                // }
                                                // onClick={() => navigate(`/details/${ele.id}`)}

                                                className="bg-[#dcdcdc] h-fit cursor-pointer mb-2 p-2 px-4 rounded-full text-sm text-gray-600 font-medium"
                                            >
                                                <div className="line-clamp-1">{ele.course_name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <button
                            onClick={() => setShowFilter((prev) => !prev)}
                            className="flex bg-[#dcdcdc] items-center text-white text-xs px-4 p-2 rounded-full"
                        >
                            <text className="text-black">Select</text>
                            <BiChevronDown className="text-lg ml-1 text-black" />
                        </button>
                    </div>
                    <div className="bg-[#ffffff90] w-[70%] md:w-[50%] hidden sm:flex justify-between px-4 mt-20 sm:mt-4 rounded-3xl">
                        <div
                            className="p-2 ml-5 rounded-2xl cursor-pointer flex flex-col items-center"
                            onClick={() => navigate('/cources')}
                        >
                            <div className="h-14 sm:h-32">
                                <img
                                    height={116}
                                    width={115}
                                    objectFit="unset"
                                    layout="intrinsic"
                                    src="/course.png"
                                    alt=""
                                />
                            </div>
                            <div className="font-medium flex justify-center items-center p-2 rounded-3xl">
                                Courses
                            </div>
                        </div>

                        <div className="w-[2px] flex my-5 bg-[#F7941D]" />

                        <div
                            className="p-2 rounded-2xl cursor-pointer flex flex-col items-center"
                            onClick={() => navigate('/books')}
                        >
                            <div className="h-14 sm:h-32">
                                <img
                                    height={150}
                                    width={150}
                                    objectFit="unset"
                                    layout="intrinsic"
                                    src="/books.png"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="font-medium flex justify-center items-center p-2 rounded-3xl">
                                Books
                            </div>
                        </div>

                        <div className="w-[2px] flex my-5 bg-[#F7941D]" />

                        <div
                            className="p-2 mr-5 rounded-2xl cursor-pointer flex-col items-center"
                            onClick={() => navigate('/testseries')}
                        >
                            <div className="h-14 sm:h-32">
                                <img
                                    height={116}
                                    width={115}
                                    objectFit="unset"
                                    layout="intrinsic"
                                    src="/testseries.png"
                                    alt=""
                                />
                            </div>
                            <div className="font-medium flex justify-center items-center p-2 rounded-3xl">
                                Test Series
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex items-center sm:-mt-48">
                <div border-2iv className="h-[70vh] w-[30%] hidden md:flex flex-col justify-center items-center">
                    <img src="/news.svg" alt="" />
                    <button className="bg-[#F7941D] text-white px-6 p-2 mt-5 text-sm rounded-full">
                        Subscribe
                    </button>
                </div>
                <div className="h-auto mg:h-[70vh] w-[85%] mg:w-[70%]  m-auto shadow-lg flex flex-col rounded-3xl p-10">
                    <div className="text-4xl sm:text-6xl font-semibold text-[#474747] flex justify-end">
                        <Typed
                            strings={['DAILY CURRENT AFFAIRS']}
                            typeSpeed={120}
                            backSpeed={50}
                            loop
                        />
                    </div>

                    <div className="border border-black" />

                    <div className="text-yellow-400 py-6 flex justify-end mr-1 space-x-2">
                        <button className="bg-[#F7941D] text-white px-6 p-2 text-sm rounded-full">
                            {new Date().toString().slice(0, 15)}
                        </button>
                        <button className="bg-[#F7941D] text-white p-1 rounded-full text-2xl ">
                            <BiChevronDown />
                        </button>
                    </div>

                    <div className="mt-4 py-4">
                        <h1 className="text-xl sm:text-2xl font-semibold text-center md:text-right">
                            {currentAffair?.title}
                        </h1>
                        <p className="text-sm mt-3 text-center md:text-right">{currentAffair?.theory}</p>
                    </div>

                    <div className="text-yellow-400 flex justify-end mt-4 sm:mt-auto">
                        <button className="bg-[#F7941D] text-white px-12 p-2 mr-2 text-sm rounded-full">
                            Next
                        </button>
                        <button className="bg-[#F7941D] text-white p-1 rounded-full text-2xl ">
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center pt-12 px-3">
                <div className="min-h-[70vh] w-full lg:w-[70%] m-auto rounded-3xl">
                    <div className="flex sm:ml-10">
                        <div className="flex items-center -mr-10 z-10">
                            <img src="/course.png" width={100} alt="" />
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>

                        <div className="flex items-center -ml-6">
                            <button
                                // onClick={() => router.push("/courses")}
                                className="rounded-full bg-[#F7941D] h-10 w-10  lg:h-16 lg:w-16 md:h-16 md:w-16 sm:h-16 sm:w-16  z-10 text-5xl text-white flex justify-center items-center"
                            >
                                <BiChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="flex sm:ml-10 mt-10">
                        <div className="flex items-center -mr-10 z-10">
                            <img src="/books.png" width={100} alt="" />
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center">
                            <button className="bg-[#F7941D] text-white text-sm w-[80%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>

                        <div className="flex items-center -ml-6">
                            <button
                                // onClick={() => router.push("/books")}
                                className="rounded-full bg-[#F7941D] h-10 w-10  lg:h-16 lg:w-16 md:h-16 md:w-16 sm:h-16 sm:w-16  z-10 text-5xl text-white flex justify-center items-center"
                            >
                                <BiChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="flex sm:ml-10 mt-10">
                        <div className="flex items-center -mr-10 z-10">
                            <img src="/logo6.png" width={100} alt="" />
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[90%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center mr-5">
                            <button className="bg-[#F7941D] text-white text-sm w-[90%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>
                        <div className="h-24 sm:h-36 w-64 sm:w-48 rounded-xl bg-gray-200 relative flex justify-center">
                            <button className="bg-[#F7941D] text-white text-sm w-[90%] sm:w-[60%] absolute -bottom-3 rounded-xl p-1">
                                Explore
                            </button>
                        </div>

                        <div className="flex items-center -ml-6">
                            <button
                                // onClick={() => router.push("/testseries")}
                                className="rounded-full bg-[#F7941D] h-10 w-10  lg:h-16 lg:w-16 md:h-16 md:w-16 sm:h-16 sm:w-16  z-10 text-5xl text-white flex justify-center items-center"
                            >
                                <BiChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-[70vh] w-[30%] hidden lg:flex flex-col justify-center items-center">
                    <img src="/dailyPrep.jpeg" alt="" />
                    <button className="bg-[#F7941D] text-white px-6 p-2 mt-5 text-sm rounded-full">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className=" flex flex-col lg:flex-row items-center">
                <div className="h-[70vh] w-[30%] hidden lg:flex flex-col justify-center items-center">
                    <img src="/topEducators.svg"
                        className="pl-10" alt="" />
                </div>
                <div className=" w-full lg:w-[60%] pt-10 rounded-3xl">
                    <div className="flex  gap-2 lg:gap-0 sm:gap-0 md:gap-0 ml-0 md:ml-0 lg:ml-10 w-full justify-around px-5 lg:px-10 md:px-10 sm:px-10">
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[0]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[0]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[1]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[1]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[2]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[2]?.name}</div>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 lg:gap-0 sm:gap-0 md:gap-0 mt-10 ml-0 md:ml-0 lg:ml-10 w-full justify-around px-5 lg:px-10 md:px-10 sm:px-10">
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[3]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max sm:w-[70%] absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[3]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[4]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[4]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl relative flex justify-center">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${topEducators[5]?.profile_image_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max  absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{topEducators[5]?.name}</div>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="w-[30%] lg:w-[10%] m-auto ">
                    <button className="bg-[#F7941D] text-white flex pl-6 pr-3 p-1 mt-16 ml-2 sm:ml-16 lg:mt-auto lg:ml-0 text-sm lg:text-base w-max items-center rounded-full">
                        See all <BiChevronRight className="ml-1 text-lg" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-[60%] md:w-[100%] m-auto sm:m-5 rounded-3xl pt-20 sm:p-10 ">
                    <div className="flex  md:ml-10 w-full justify-around px-6 lg:px-10 md:px-10 sm:px-10">
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[0]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{publishers[0]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center mr-10 ">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[1]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{publishers[1]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex items-center justify-center">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[2]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{publishers[2]?.name}</div>
                            </button>
                        </div>
                    </div>

                    <div className="flex  mt-10 md:ml-10 w-full justify-around px-4 lg:px-10 md:px-10 sm:px-10">
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[3]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{publishers[3]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl  relative flex justify-center mr-10">
                            <img
                                className="rounded-xl  object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[4]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max  absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2 ">
                                <div className="line-clamp-1">{publishers[4]?.name}</div>
                            </button>
                        </div>
                        <div className="h-25 sm:h-44 w-44 rounded-xl relative flex justify-center">
                            <img
                                className="rounded-xl object-scale-down"
                                src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${publishers[5]?.profile_picture_url}`}
                                alt=""
                            />
                            <button className="bg-[#F7941D] line-clamp-1 text-white text-xs w-max absolute rounded-xl -bottom-6 lg:-bottom-3 md:-bottom-3 sm:-bottom-3 p-1 lg:p-2 md:p-2 sm:p-2">
                                <div className="line-clamp-1">{publishers[5]?.name}</div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] lg:w-[10%] m-auto">
                    <button className="bg-[#F7941D] text-white flex pl-6 pr-3 p-1 m-16 ml-2 sm:ml-16 md:ml-28 lg:mt-auto lg:ml-0 text-sm lg:text-base w-max items-center rounded-full">
                        See all <BiChevronRight className="ml-1 text-lg" />
                    </button>
                </div>

                <div className="h-[70vh] w-[30%] hidden lg:flex flex-col justify-center items-center">
                    <img src="/topPublishers.svg" className="pr-10" alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}
