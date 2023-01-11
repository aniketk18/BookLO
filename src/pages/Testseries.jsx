import axios from "axios";
import { useEffect, useState } from "react";
import {
    BiChevronUp,
    BiChevronRight,
    BiChevronDown,
    BiChevronLeft,
    BiSearch,
} from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Testseries = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get(`https://mybooklo.com/user-service/api/test/series/get/courselist/v2`)
                    .then((res) => res.data)
                    .then((data) => {
                        setCategories(data.data.test_course_list);
                    });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    console.log(courses)

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get(`https://mybooklo.com/user-service/api/display/all/test?page=${page}`)
                    .then((res) => res.data)
                    .then((data) => setCourses(data.data.test_list));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);
    return (
        <div className="min-h-screen relative">
            <div className="mt-10">
                <Navbar />
            </div>

            <main className="flex flex-col pt-14 items-center h-[calc(100vh-3.5rem)]">
                <div>
                    <img src="/testseries.png" className="h-[5rem]" alt="" />
                </div>

                <div className="mt-3 w-[90%] lg:w-[60%] justify-center flex relative">
                    {showFilter ? (
                        <div className="bg-[#ffffff] shadow-xl z-30 w-full h-[30rem] top-10 absolute flex flex-col items-center lg:p-6 rounded-3xl">
                            <div className="w-full flex justify-between"></div>
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
                                            onClick={() => navigate(`/details/${ele.id}`)}

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
                        className="flex bg-[#F2A84E] items-center text-white text-xs px-4 p-2 rounded-full"
                    >
                        <text>Select</text>
                        <BiChevronDown className="text-lg ml-1" />
                    </button>
                </div>

                <div className="w-full flex items-center mt-7">
                    <div className="w-[10%] hidden md:flex justify-center items-center">
                        <button
                            onClick={() => {
                                if (page > 1) {
                                    setPage((prev) => prev - 1);
                                }
                            }}
                            className="bg-[#F7941D] text-white flex p-2 items-center rounded-full"
                        >
                            <BiChevronLeft className="text-4xl" />
                        </button>
                    </div>

                    <div className="flex flex-col w-[90%] md:w-[80%] m-auto items-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                            {courses?.data?.map((e, i) => (
                                <div key={i} className="rounded-xl shadow-lg  m-3"
                                    onClick={() => navigate(`/details/${e.id}`)}
                                >
                                    <div className="h-32 w-full rounded-xl relative flex justify-center m-auto">
                                        <img
                                            className="rounded-xl w-40 sm:w-56"
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.thumbnail_url}`}
                                            alt=""
                                        />
                                        <button className="bg-[#F7941D] text-white text-sm w-auto absolute -bottom-4 rounded-xl px-2">
                                            Rs. {e.price}
                                        </button>
                                    </div>

                                    <div className="mt-8 flex m-auto">
                                        <img
                                            className="rounded-full w-8 h-8 object-cover"
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.educator_profile_image}`}
                                            alt=""
                                        />
                                        <div className="w-full rounded-full ml-2">
                                            <div className="text-sm line-clamp-1">{e.title.substring(0, 20)}</div>
                                            <div className="text-xs line-clamp-1">
                                                {e?.educator_name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-6 mt-9 flex">
                            <ReactPaginate
                                className="flex items-center"
                                breakLabel="..."
                                nextLabel=">"
                                activeClassName="bg-[#F2A951]"
                                pageClassName="mx-1 text-xs h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                breakClassName="mx-1 text-xs h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                onPageChange={(e) => setPage(e.selected + 1)}
                                pageRangeDisplayed={3}
                                pageCount={courses?.last_page}
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                                previousClassName="mx-1 bg-[#F2A951] text-white text-lg h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                nextClassName="mx-1 bg-[#F2A951] text-white text-lg h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="w-[10%] hidden md:flex justify-center items-center">
                        <button
                            onClick={() => {
                                if (page < courses?.last_page) {
                                    setPage((prev) => prev + 1);
                                }
                            }}
                            className="bg-[#F7941D] text-white flex p-2 items-center rounded-full"
                        >
                            <BiChevronRight className="text-4xl" />
                        </button>
                    </div>
                </div>
            </main>
        </div>)
}
