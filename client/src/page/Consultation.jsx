import React from 'react'
import { IoIosSync } from "react-icons/io";
import { FaEquals, IconName } from "react-icons/fa";
function Consultation() {
    return (
        <div className='mt-96 bg-[#373660] p-6'>
            <div className='lg:w-[85%]  mx-[auto]'>
                <div className='grid grid-cols-2'>
                    <div className='w-[130%]  p-10  bg-[#17152f] h-[750px] mt-[-45%]'>
                        <h1 className='text-[white] font-semibold text-[25px]'>Book Free Consultation</h1>
                        <p className='text-[gray] font-semibold text-[18px]'>Our consultants will respond back within 8 business hours or less.</p>
                        <div className='mt-20 flex gap-5'>
                            <input className='w-[50%] h-[60px] border border-gray-300 bg-inherit font-semibold p-5  outline-0 text-[20px] text-[white]' placeholder='Full Name' type="text" name="" id="" />
                            <input className='w-[50%] h-[60px] border border-gray-300 bg-inherit font-semibold p-5 text-[20px] outline-0 text-[white]' placeholder='Email Address' type="text" name="" id="" />

                        </div>
                        <div className='mt-8 flex gap-5'>
                            <input className='w-[50%] h-[60px] border border-gray-300 bg-inherit font-semibold p-5  outline-0 text-[20px] text-[white]' placeholder='Phone Number' type="text" name="" id="" />
                            <input className='w-[50%] h-[60px] border border-gray-300 bg-inherit font-semibold p-5 text-[20px] outline-0 text-[white]' placeholder='Country' type="text" name="" id="" />

                        </div>
                        <div className='mt-8'>
                            <input className='w-[100%] h-[150px] border border-gray-300 bg-inherit font-semibold p-5 outline-0 text-[20px] text-[white]' placeholder='Project Brief' type="text" name="" id="" />
                        </div>
                        <div className='w-[60%] mt-16 flex gap-4'>
                            <div className='flex  gap-4 w-[40%] h-[70px] border border-gray-300 bg-inherit font-semibold p-5  outline-0 text-[20px] text-[white]' >
                                <h1>6</h1>
                                {"+"}
                                <h1>8</h1>
                                <IoIosSync size={30} className='ml-5' />
                            </div>
                            <div className='mt-6 ml-3'>
                                <FaEquals  size={30} className='text-[white]'/>
                            </div>
                            <div className='' >
                              <input className='w-[50%] h-[70px] border border-gray-300 bg-inherit font-semibold  text-[20px] outline-0 text-[white] p-6' type="text" name="" id="" placeholder='? ?' />
                            </div>
                        </div>
                        <div className='flex mt-3 justify-end'>
                            <button className='w-[25%] font-semibold text-[25px] rounded-md hover:bg-[white] bg-[#60B741] h-[50px]'>Enquire Now</button>
                        </div>
                    </div>
                    <div className='w-[70%] ml-[30%] p-16 pt-44 bg-[#2B294D] h-[750px] mt-[-45%]'>fdsgsdfg</div>
                </div>
                <div className='mt-[8%]'>
                    <h1 className='text-[white] font-semibold text-[20px]'>RELATED SERVICES :</h1>
                    <div className='flex gap-5 mt'>
                        <button className='w-[20%] rounded-xl text-[gray] border border-gray-300 mt-5 hover:bg-[#34335E] h-[50px] font-semibold'>Software Consulting Services</button>
                        <button className='w-[15%] rounded-xl text-[gray] border border-gray-300 mt-5 hover:bg-[#34335E] h-[50px] font-semibold'>Agile Consulting</button>
                        <button className='w-[15%] rounded-xl text-[gray] border border-gray-300 mt-5 hover:bg-[#34335E] h-[50px] font-semibold'>CRM Consulting</button>
                        <button className='w-[20%] rounded-xl text-[gray] border border-gray-300 mt-5 hover:bg-[#34335E] h-[50px] font-semibold'>Data Analytics Consulting</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation