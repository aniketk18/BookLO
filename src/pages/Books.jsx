import axios from "axios";
import { useEffect, useState } from "react";
import { BiChevronUp, BiChevronRight } from "react-icons/bi";
import Navbar from "../components/Navbar";
export const Books = () => {

    const [freeBooks, setFreeBooks] = useState([]);
    const [publishersBook, setPublishersBook] = useState([]);

    useEffect(() => {
        (async () => {
            await Promise.all([
                axios
                    .get(`https://mybooklo.com/profile/api/fetch/top/priority/books`)
                    .then((res) => res.data)
                    .then((data) => setFreeBooks(data.data.books)),
                axios
                    .get(
                        `https://mybooklo.com/publisher-service/api/fetch/top/priority/publisher/books`
                    )
                    .then((res) => res.data)
                    .then((data) => setPublishersBook(data.data.publisher_books)),
            ]);
        })();
    }, []);
    return (
        <>
            <div className="pt-10 pb-20">
                <Navbar />
            </div>
            <div className="">
                <div className="flex flex-col md:flex-row justify-center items-center mb-9 md:mb-14 space-x-2">
                    <div className="w-[35%] sm:w-[30%] md:w-[20%] flex flex-col justify-center items-center  mb-7 md:mb-0 ">
                        <img src="/freeBooks.svg" className="" />
                    </div>
                    <div className="w-full md:w-[70%] grid grid-cols-3 ">
                        {freeBooks.slice(0, 3).map((e, i) => (
                            <div
                                key={i}
                                // onClick={() => router.push(`/books/${e.id}`)}
                                className="cursor-pointer "
                            >
                                <div className="flex justify-center items-center">
                                    <div className="w-36 rounded-xl flex-col ">
                                        <img
                                            className="rounded-xl w-24 h-28 lg:w-36 lg:h-40 sm:w-36 sm:h-40 md:w-36 md:h-40  object-cover "
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.thumbnail}`}
                                        />
                                        <button className="bg-[#F7941D] text-white text-xs w-[80%] relative bottom-4 rounded-xl p-2 block m-auto">
                                            Free
                                        </button>
                                    </div>
                                </div>

                                <div className="flex ">
                                    <div className="flex flex-row m-auto">
                                        <div className="h-4 w-6 lg:h-8 lg:w-10 md:h-8 md:w-10 sm:h-8 sm:w-10 bg-gray-300 rounded-full" />
                                        <div className="w-full rounded-full ml-2">
                                            <div className="text-sm line-clamp-1">
                                                {String(e.title).split("-")[0]}
                                            </div>
                                            <div className="text-xs line-clamp-1">
                                                {String(e.title).split("-")[1]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" py-4 mt-5 md:mt-0">
                        <button
                            // onClick={() => router.push("/books/free-books")}
                            className="bg-[#F7941D] text-white flex py-2 px-4 items-center rounded-full m-auto"
                        >
                            See all <BiChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center space-x-2">
                    <div className="w-[35%] sm:w-[30%] md:w-[20%] flex flex-col justify-center items-center mb-7 md:mb-0">
                        <img src="/publishersBook.svg" className="" />
                    </div>
                    <div className="w-full md:w-[70%] grid grid-cols-3 ">
                        {publishersBook.slice(0, 3).map((e, i) => (
                            <div
                                key={i}
                                // onClick={() => router.push(`/books/${e.id}`)}
                                className="cursor-pointer "
                            >
                                <div className="flex justify-center items-center">
                                    <div className="w-36 rounded-xl flex-col ">
                                        <img
                                            className="rounded-xl w-24 h-28 lg:w-36 lg:h-40 sm:w-36 sm:h-40 md:w-36 md:h-40  object-cover "
                                            src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${e?.thumbnail}`}
                                        />
                                        <button className="bg-[#F7941D] text-white text-xs w-[80%] relative bottom-4 rounded-xl p-2 block m-auto">
                                            Free
                                        </button>
                                    </div>
                                </div>

                                <div className="flex ">
                                    <div className="flex flex-row m-auto">
                                        <div className="h-4 w-6 lg:h-8 lg:w-10 md:h-8 md:w-10 sm:h-8 sm:w-10  bg-gray-300 rounded-full" />
                                        <div className="w-full rounded-full ml-2">
                                            <div className="text-sm line-clamp-1">
                                                {String(e.title).split("-")[0]}
                                            </div>
                                            <div className="text-xs line-clamp-1">
                                                {String(e.title).split("-")[1]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" py-4 mt-5 md:mt-0">
                        <button
                            // onClick={() => router.push("/books/free-books")}
                            className="bg-[#F7941D] text-white flex py-2 px-4 items-center rounded-full m-auto"
                        >
                            See all <BiChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
