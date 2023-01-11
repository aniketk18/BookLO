import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Register = () => {
    //   const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [allowed, setAllowed] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!allowed) {
            return toast.error("Please accept our terms to continue");
        } else if (password.length === 0) {
            return toast.error("Please enter a valid password");
        } else if (name.length === 0) {
            return toast.error("Please enter a valid name");
        }

        // (async () => {
        //     setLoading(true);
        //     try {
        //         const { data } = await axios.post(
        //             `${process.env.NEXT_PUBLIC_URL1}/user/login/password/v2`,
        //             {
        //                 login_history_id: router.query.id,
        //                 name,
        //                 email,
        //                 password,
        //                 city,
        //                 state,
        //             }
        //         );

        //         console.log(data);
        //         Cookies.set("token", data.data.token, { path: "" });
        //         // dispatch(storeUser(data.user));
        //         router.push("/");
        //         setLoading(false);
        //     } catch (error) {
        //         console.log(error);
        //         setLoading(false);
        //     }
        // })();
    };
    const navigate = useNavigate()
    return (
        <div className="min-h-screen relative flex flex-col">
            <div className="fixed left-0 top-0 mt-8 ml-8 font-semibold text-[#F2A84E] text-xl cursor-pointer" onClick={() => navigate("/")} >
                MyBookLo
            </div >

            <div className="relative bg-white md:shadow-lg rounded-2xl h-full w-full md:w-[85%] mx-auto my-auto max-h-screen border-black flex">
                <div className="w-full h-full py-auto flex flex-col justify-center items-center md:w-[50%] py-10">
                    <div className="font-medium w-full text-center text-3xl text-[#F2A84E]">
                        Sign Up
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="outline-none h-5 flex-1 w-full text-sm"
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
                            className="outline-none h-5 flex-1 w-full text-sm"
                            placeholder="Name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <img src="/user.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="outline-none h-5 flex-1 w-full text-sm"
                            placeholder="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="/lock.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="outline-none h-5 flex-1 w-full text-sm"
                            placeholder="Email"
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <img src="/user.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="outline-none h-5 flex-1 w-full text-sm"
                            placeholder="City"
                            type="text"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <img src="/user.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[70%] border-b-2 border-[#F2A84E] h-7 mt-7 flex items-center px-2">
                        <input
                            className="outline-none h-5 flex-1 w-full text-sm"
                            placeholder="State"
                            type="text"
                            value={state}
                            required
                            onChange={(e) => setState(e.target.value)}
                        />
                        <img src="/user.svg" height={20} width={20} alt="" />
                    </div>

                    <div className="text-left flex items-center w-[90%] md:w-[70%] text-sm mt-4 cursor-pointer">
                        <input
                            id="allowed"
                            type="checkbox"
                            checked={allowed}
                            onChange={() => setAllowed(!allowed)}
                            className="text-xl outline-none"
                        />
                        <div className="ml-2" htmlFor="allowed">
                            By continuing, I accept terms of Services.
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[70%] mt-6">
                        <button
                            onClick={() => handleSubmit()}
                            className="w-full bg-[#F2A84E] text-white rounded-3xl py-2"
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </div>
                    <div className="text-center w-full md:w-[70%] text-sm mt-8 flex justify-center cursor-pointer">
                        Don&apos;t have an account yet?
                        <div
                            onClick={() => navigate("/login")}
                            className="text-[#F2A84E] ml-2 cursor-pointer"
                        >
                            LogIn
                        </div>
                    </div>
                </div>

                <div className="w-[50%] hidden bg-gray-300 rounded-r-2xl flex-col justify-center items-center md:flex">
                    <div className="font-bold text-2xl mt-3">Banner</div>
                </div>
            </div>
        </div >
    );
};

export default Register;
