import axios from "axios";
import { useEffect, useState } from "react";
import {
    BiChevronUp,
    BiChevronRight,
    BiChevronDown,
    BiChevronLeft,
} from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export const Cources = () => {

    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                axios
                    .get(
                        `https://mybooklo.com/course/api/display/all/playlist?page=${page}`
                    )
                    .then((res) => res.data)
                    .then((data) => {
                        setCourses(data.data.playlist_list);
                    });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);

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
    return (
        <div className="min-h-screen">

            <div className="mt-10">
                <Navbar />
            </div>


            <main className="flex flex-col pt-14 items-center h-[calc(100vh-3.5rem)]">
                <div>
                    <img src="/courses.svg" className="h-[5rem]" />
                </div>

                <div className="mt-3 flex">
                    <button className="flex bg-[#F2A84E] items-center text-white text-xs px-4 p-2 rounded-full">
                        <text>Select Course</text>
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
                            className="bg-[#F7941D] text-white flex p-2 items-center rounded-full">
                            <BiChevronLeft className="text-4xl" />
                        </button>
                    </div>

                    <div className="flex flex-col w-[90%] md:w-[80%] m-auto items-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                            {courses?.data?.map((e, i) => (
                                <div key={i} className="rounded-xl shadow-lg m-3"
                                    onClick={() => navigate(`/details/${e.id}`)}
                                >
                                    <div className="h-32 w-full rounded-xl relative flex justify-center m-auto">
                                        <img
                                            className="rounded-xl w-40 sm:w-56"
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.thumbnail}`}
                                            alt=""
                                        />
                                        <button className="bg-[#F7941D] text-white text-sm w-auto absolute -bottom-4 rounded-xl px-2">
                                            Rs. {e.price}
                                        </button>
                                    </div>


                                    <div className="mt-8 flex m-auto">
                                        <img
                                            className="rounded-full w-8 h-8 object-cover"
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.educator_profile?.profile_image_url}`}
                                        />
                                        <div className="w-full rounded-full ml-2">
                                            <div className="text-sm line-clamp-1">{e.title.substring(0, 20)}</div>
                                            <div className="text-xs line-clamp-1">
                                                {e?.educator_profile?.name}
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
                            className="bg-[#F7941D] text-white flex p-2 items-center rounded-full">
                            <BiChevronRight className="text-4xl" />
                        </button>
                    </div>
                </div>
            </main>
        </div>)
}
