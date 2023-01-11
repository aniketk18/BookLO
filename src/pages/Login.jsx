import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const handleSubmit = async () => {
    //     if (password.length === 0) {
    //         return toast.error("Please enter a valid password");
    //     }
    //     (async () => {
    //         setLoading(true);
    //         try {
    //             const { data } = await axios.post(
    //                 `${process.env.NEXT_PUBLIC_URL1}/user/login/password/v2`,
    //                 {
    //                     mobile: router.query.phone,
    //                     password,
    //                 }
    //             );

    //             console.log(data);
    //             Cookies.set("token", data.data.token, { path: "" });
    //             //       dispatch(storeUser(data.user));
    //             router.push("/");
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //             setLoading(false);
    //         }
    //     })();
    // };

    return (
        <div className="min-h-screen relative flex flex-col">
            <div className="fixed left-0 top-0 mt-8 ml-8 z-10 font-semibold text-[#F2A84E] text-xl cursor-pointer" onClick={() => navigate('/')}>
                MyBookLo
            </div>

            <div className="relative bg-white md:shadow-lg rounded-2xl h-full w-full md:w-[90%] mx-auto my-auto max-h-screen border-black flex">
                <div className="w-full h-full py-auto flex flex-col justify-center items-center md:w-[50%] py-20">
                    <div className="font-medium text-3xl text-[#F2A84E]">Sign In</div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="h-5 flex-1 w-full text-sm outline-none"
                            placeholder="Mobile Number"
                            type="text"
                            required
                        // value={router.query.phone}
                        // onChange={(e) => setMobile(e.target.value)}
                        />
                        <img src="/user.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="h-5 flex-1 w-full text-sm outline-none"
                            placeholder="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="/lock.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="text-right w-[90%] md:w-[70%] text-sm mt-4 cursor-pointer">
                        Forgot Password
                    </div>

                    <div className="w-[90%] md:w-[70%] mt-14">
                        <button
                            // onClick={() => handleSubmit()}
                            className="w-full bg-[#F2A84E] text-white rounded-3xl py-2"
                        >
                            {loading ? "Signing In..." : "Log In"}
                        </button>
                    </div>

                    <div className="text-center w-full md:w-[70%] text-sm mt-20 flex justify-center cursor-pointer">
                        Don&apos;t have an account yet?
                        <div
                            onClick={() => navigate("/register")}
                            className="text-[#F2A84E] ml-2 cursor-pointer"
                        >
                            SignUp
                        </div>
                    </div>
                </div>

                <div className="w-[50%] hidden bg-gray-300 rounded-r-2xl flex-col justify-center items-center md:flex">
                    <div className="font-bold text-2xl mt-3">Banner</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
