import React, { useState } from 'react'
// import {
//     Box,
//     Flex,
//     Button,
//     Stack,
//     Image,
//     Text,
// } from '@chakra-ui/react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, } from "react-icons/ai";
function Navbar() {
    const [nav, setNav] = useState(false);
    const dropDown = () => {
        setNav(!nav);
    };

    const dropDownClose = () => {
        setNav(false);
    };
    return (

        <>
            <div className='bg-[#1d1c39] h-[100px] px-8 pt-12 w-100% top-0 sticky pb-2 scroll drop-shadow-sm z-50'>
                <div className='h-[16px] items-center justify-between flex'>
                    <div className='flex items-center w-[22%] justify-between'>
                        <img className='w-[220px] h-[220px]' src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/logo-v2.svg" alt="" />
                        <h1 className='text-[20px] text-white font-semibold'>Services</h1>
                    </div>
                    <div className='flex w-[60%] items-center justify-between font-semibold'>
                        <div className='flex justify-between w-[90%] mt-2 font-semibold  ml-16 text-[20px] text-[white]'>
                            <h1>For Enterprises</h1>
                            <h1>Solutions</h1>
                            <h1>Case Studies</h1>
                            <h1>Company</h1>
                            <button className='w-[25%] rounded-md text-[black] mt-[-1.5%] hover:bg-[white] h-[50px]  bg-[#60B741] '>Contact Us {">"}</button>
                        </div>
                        {nav ? (
                            <AiOutlineClose style={{ marginLeft: "10px", color: "white" }} className='hidden' size={25} onClick={dropDownClose} />
                        ) : (
                            <FaBars style={{ marginLeft: "10px", color: "white" }} size={25} className='hidden' onClick={dropDown} />
                        )}
                    </div>
                </div>

                {nav && (
                    <div className='flex w-[60%] items-center justify-between font-semibold mt-6'>
                        <div className=' mt-4 justify-between w-[90%]  font-semibold  ml-16 text-[20px] text-[white]'>
                            <h1 className='mt-3'>For Enterprises</h1>
                            <h1 className='mt-3'>Solutions</h1>
                            <h1 className='mt-3'>Case Studies</h1>
                            <h1 className='mt-3'>Company</h1>
                            <button className='w-[25%] rounded-md text-[black] mt-2 hover:bg-[white] h-[50px]  bg-[#60B741] '>Contact Us {">"}</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar