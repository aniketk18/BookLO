import axios from "axios";
import { useEffect, useState } from "react";
import { BiChevronUp, BiChevronRight } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Page = () => {
    const { id } = useParams()
    const [test, setTest] = useState();
    console.log(id)
    useEffect(() => {
        (async () => {
            await axios
                .post(`https://mybooklo.com/user-service/api/display/test/details`, {
                    test_id: id,
                    // user_id: +router.query.id,
                })
                .then((res) => res.data)
                .then((data) => setTest(data.data.test_details));
        })();
    }, []);

    console.log(test);
    return (
        <div className="min-h-screen relative w-screen">
            <div className="mt-10">
                <Navbar />
            </div>

            <main className="flex flex-col pt-14 max-w-[80%] mx-auto items-center min-h-[calc(100vh-3.5rem)]">
                <div className="flex flex-col mt-5 w-full">
                    <div className="flex">
                        <div className="mr-10">
                            <div className="bg-gray-400 h-44 rounded-2xl w-36">
                                <img
                                    className=" h-44 rounded-2xl w-36"
                                    src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${test?.thumbnail_url}`}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="my-auto w-full ">
                            <div className="text-xl">{test?.title}</div>
                            <div className="text-xs mt-2">Duration: {test?.duration}</div>
                            <div className="flex mt-7 w-full items-center">
                                <div className="rounded-full h-8 w-8 border">
                                    <img
                                        className="rounded-full w-8 h-8 object-cover"
                                        src={`https://prod-mybooklo.s3.ap-south-1.amazonaws.com/${test?.educator_profile?.profile_image_url}`}
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">{test?.educator_profile.name}</div>
                                <div className="ml-auto">₹ {test?.price}/-</div>
                            </div>
                            <div className="mt-5 flex">
                                <button className="bg-[#F2A84E] p-2 text-white text-sm w-full rounded-full">
                                    Buy
                                </button>
                                <button className="bg-[#F2A84E] text-white w-11 h-10 ml-5 text-xl rounded-full">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <div>Description</div>
                        <div className="mt-3 shadow-lg w-full min-h-[10rem] rounded-2xl p-4 text-xs">
                            {test?.description}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
