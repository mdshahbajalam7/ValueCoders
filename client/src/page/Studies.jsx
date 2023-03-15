import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Studies() {
    return (
        <div className='mt-20 bg-[#181732]'>
            <div className=''>
                <div className='lg:w-[85%] mx-[auto] pt-24'>
                    <h1 className='text-center text-[white] text-[25px] font-semibold'>Case Studies</h1>
                    <p className='text-center lg:w-[100%] md:w-[90%] mx-[auto] sm:w-[90%] text-[gray] text-[18px] mt-8 font-semibold'>Like other tech consulting companies all our custom projects are covered under the Non-Disclosure Agreement. However, being a top tech consulting firm, we have taken permission from some of our clients to showcase their projects so that you can get a better understanding of our work.</p>
                </div>
                <div className=' lg:w-[100%] lg:grid lg:grid-cols-2 md:w-[90%] mx-[auto] md:mt-10 sm:mt-10 md:grid md:grid-cols-1 sm:w-[90%]  sm:grid sm:grid-cols-1'>
                    <div className='flex bg-[#262551]'>
                        <div className=' w-[50%] hover:w-[51%] hover:cursor-pointer hover:scale-110'>
                            <img src="https://www.valuecoders.com/wp-content/uploads/2022/04/CRM-Tool-Application-480_463.webp" alt="" />
                        </div>
                        <div className=' w-[50%] p-6'>
                            <h1 className='text-[white] font-semibold text-[20px]'>CRM Tool Application</h1>
                            <p className='text-[gray] font-semibold text-[14px] mt-4'>External clients can login into the external IDB portal and submit service requests for Alight Professional Services.</p>
                            <div className='flex justify-between mt-3'>
                                <h1 className='text-[white] font-semibold text-[20px] w-[40%]'>Core tech</h1>
                                <p className='text-[gray] font-semibold text-[14px]  w-[40%] '>AJAX, Core PHP, Javascript, MySQL</p>
                            </div>
                            <div className='mt-3 flex gap-5 text-[gray]  hover:text-[green]'>
                                <h1 className='text-[20px]'>Learn More</h1>
                                <BsFillArrowRightCircleFill size={25} className='mt-1' />

                            </div>
                        </div>
                    </div>
                    <div className='p-6'>
                        <h1 className='text-[white] font-semibold text-[20px]'>Online Home-Cooked Food Hub</h1>
                        <p className='text-[gray] font-semibold text-[17px] w-[100%] mt-4'>It is a digital platform, marketplace, and hub for curated home-cooked food experience.</p>
                        <div className='flex  w-[60%] mt-8'>
                            <h1 className='text-[white] font-semibold text-[20px] w-[40%]'>Core tech</h1>
                            <p className='text-[white] font-semibold text-[17px]  w-[40%] '>AWS, MySQL, Python, React JS</p>
                        </div>
                        <div className='mt-8 flex gap-5 text-[gray]  hover:text-[green]'>
                            <h1 className='text-[20px]'>Learn More</h1>
                            <BsFillArrowRightCircleFill size={25} className='mt-1' />

                        </div>
                    </div>
                    <div className=' p-6 pb-9'>
                        <h1 className='text-[white] font-semibold text-[20px]'>Covid Test Collection Site</h1>
                        <p className='text-[gray] font-semibold text-[19px] w-[100%] mt-4'>This is a safe and professional COVID-19 test collection site dedicated exclusively to COVID-19 testing.</p>
                        <div className='flex  w-[60%] mt-8'>
                            <h1 className='text-[gray] font-semibold text-[20px] w-[40%]'>Core tech</h1>
                            <p className='text-[gray] font-semibold text-[17px]  w-[40%] '>Reactjs, RoR</p>
                        </div>
                        <div className='mt-8 flex gap-5 text-[gray]  hover:text-[green]'>
                            <h1 className='text-[20px]'>Learn More</h1>
                            <BsFillArrowRightCircleFill size={25} className='mt-1' />

                        </div>
                    </div>
                    <div className=''>
                        <div className='flex bg-[#262551]'>
                            <div className='w-[50%] hover:cursor-pointer hover:scale-110'>
                                <img src="https://www.valuecoders.com/wp-content/uploads/2022/04/Animal-Husbandry-Portal-480_463.webp" alt="" />
                            </div>
                            <div className='w-[50%] p-6'>
                                <h1 className='text-[white] font-semibold text-[23px]'>Animal Husbandry Portal</h1>
                                <p className='text-[gray] font-semibold text-[20px] mt-4'>This project aims to reduce costs by deactivating Brokers and all kinds of intermediaries.</p>
                                <div className='flex justify-between mt-6'>
                                    <h1 className='text-[white] font-semibold text-[23px] w-[40%]'>Core tech</h1>
                                    <p className='text-[gray] font-semibold text-[20px]  w-[40%] '>Angular, JAVA, MONGODB</p>
                                </div>
                                <div className='mt-8 flex gap-5 text-[gray]  hover:text-[green]'>
                                    <h1 className='text-[20px]'>Learn More</h1>
                                    <BsFillArrowRightCircleFill size={25} className='mt-1' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studies