import React, { useEffect, useState } from "react";
// import LoginNumberCheckModal from "../Modal/loginNumberCheck";
// import Cookies from "js-cookie";
import axios from "axios";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch();
    // const [showMobileCheckModal, setShowMobileCheckModal] = useState(false);
    // const { user } = useSelector((state) => state.user);

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    // useEffect(() => {
    //     (async () => {
    //         if (Cookies.get("token")) {
    //             try {
    //                 const { data } = await axios.get(
    //                     `${process.env.NEXT_PUBLIC_URL2}/user/profile/display`,
    //                     {
    //                         headers: { token: Cookies.get("token") },
    //                     }
    //                 );
    //                 dispatch(storeUser(data.data.user_profile));
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     })();
    // }, []);

    return (
        <>
            <div className="bg-[#ffffff70]  rounded-full flex h-16 justify-between items-center w-[90%] mx-auto p-4">
                {/* {showMobileCheckModal && (
                <LoginNumberCheckModal setShowModal={setShowMobileCheckModal} />
            )} */}
                {/* <LoginNumberCheckModal setShowModal={setShowMobileCheckModal} /> */}

                <div className="text-yellow-400 text-xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold ml-2 cursor-pointer"
                    onClick={() => navigate('/')}

                >
                    MyBookLo
                </div>

                <div className="hidden md:flex space-x-8 cursor-pointer">
                    <div
                        onClick={() => navigate('/')}
                        className={`mx-2 font-medium cursor-pointer`}
                    >
                        Home
                    </div>
                    <div
                        onClick={() => navigate('/books')}                    // className={`mx-2 font-medium cursor-pointer ${router.pathname.startsWith("/books") && "text-orange-400"
                        //     }`}
                        className="mx-2 font-medium cursor-pointer"

                    >
                        Books
                    </div>
                    <div
                        onClick={() => navigate('/testseries')}
                        // className={`mx-2 font-medium cursor-pointer ${router.pathname.startsWith("/testseries") && "text-orange-400"
                        //     }`}
                        className="mx-2 font-medium cursor-pointer"

                    >
                        Courses
                    </div>
                    <div
                        onClick={() => navigate('/cources')}
                        // className={`mx-2 font-medium cursor-pointer ${router.pathname.startsWith("/testseries") && "text-orange-400"
                        //     }`}
                        className="mx-2 font-medium cursor-pointer"

                    >
                        Test Series
                    </div>
                </div>

                <div className="hidden md:flex text-yellow-400">
                    {/* {user.name ? (
                    <div className="flex text-sm px-6 cursor-pointer items-center text-black">
                        {user?.name}
                    </div>
                ) : ( */}
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-[#F7941D] text-white px-6 p-2 text-sm rounded-full cursor-pointer"
                    >
                        Login/Signup
                    </button>
                    {/* )} */}

                </div>

                <div onClick={handleNav} className='flex md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>
            {/* <div className={nav ? 'relative w-[50%] md:w-[40%] bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-yellow-400 text-2xl font-semibold m-4'> MyBookLo</h1>
                <h3 className='p-4 my-4 cursor-pointer' onClick={() => navigate('/')}>Home</h3>
                <h3 className='p-4 my-4 cursor-pointer' onClick={() => navigate('/books')}
                >Books</h3>
                <h3 className='p-4 my-4 cursor-pointer' onClick={() => navigate('/cources')}
                >Courses</h3>
                <h3 className='p-4 my-4 cursor-pointer' onClick={() => navigate('/testseries')}
                >Test Series</h3>
                <h3 className='p-4 my-4 cursor-pointer bg-[#F7941D] text-white text-sm text-center rounded-full' onClick={() => navigate('/login')}>Login/Signup</h3>
            </div> */}
            {nav && (<div className="border rounded-3xl flex flex-col items-center bg-white">
                <h3 className='py-5 text-sm cursor-pointer' onClick={() => navigate('/')}>Home</h3>
                <h3 className='py-5 text-sm cursor-pointer' onClick={() => navigate('/books')}
                >Books</h3>
                <h3 className='py-5 text-sm cursor-pointer' onClick={() => navigate('/cources')}
                >Courses</h3>
                <h3 className='py-5 text-sm cursor-pointer' onClick={() => navigate('/testseries')}
                >Test Series</h3>
                <h3 className='py-1 px-12 mb-4 text-sm mt-5 font-semibold cursor-pointer bg-[#F7941D] text-white text-center rounded-full' onClick={() => navigate('/login')}>Login/Signup</h3>
            </div>)}
        </>

    );
};

export default Navbar;
