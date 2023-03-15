import React from 'react'
import logo from '../../Image/logo image.jpg'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import Curousel from '../../page/Curousel'
// or
// import CCarousel from '@coreui/react/src/components/carousel/CCarousel'
function Home() {
    return (
        <div className=' bg-[#1d1c39] pt-20 w-[100%]  mx-[auto] lg:h-[750px] md:h-[800px] p-5 text-xl text-[white]'>
            <div className='lg:w-[85%]  md:w-[90%] sm:w-[90%] lg:mx-[auto] font-sens lg:text-[18px]  lg:grid lg:grid-cols-2 '>
                <div className='lg:w-[100%] md:w-[110%] sm:w-[110%]'>
                    <div className='flex lg:w-[40%] md:w-[65%] sm:w-[95%] md:text-[16px] sm:text-[13px] justify-between'>
                        <h1 className='text-[gray]'>Home</h1>
                        <h1 className='text-[gray]'>{">"}</h1>
                        <h1 className='text-[gray]'>Services</h1>
                        <h1 className='text-[gray]'>{">"}</h1>
                        <h1>IT Consulting</h1>
                    </div>
                    <div className='mt-8 flex gap-4'>
                        <h1 className='font-semibold lg:w-[90%] lg:leading-none lg:text-[45px] text-[#FFB81D] md:text-[28px] sm:text-[20px]'>Information Technology Consulting <span className='lg:text-[45px] md:text-[28px] sm:text-[20px] text-[white]'>Services</span></h1>
                        {/* <h1 className=''></h1> */}
                    </div>
                    <div className='md: mt-8 text-[#BDB7B7] lg:w-[95%] md:w-[100%] sm:w-[90%] text-[15px] font-bold'>
                        <p>Are you trying to keep pace with rapid innovations in the IT industry?</p>
                        <p className='mt-7'>Our team of industry-leading business strategist consultants is here for you to deliver robust and safe solutions for employees and clients.</p>
                        <p className='mt-7'>We facilitate building IT strategies in organizations. These include analyzing needs and developing plans for where the company wants to go and how they want to integrate with technology. We cover several activities, including the IT strategy roadmap, IT alignment, and current state analysis.</p>
                        <p className='mt-7'>Are you looking for technical advice for your digital transformation journey? Look none other than ValueCoders!</p>
                    </div>

                    <div className='mt-11 md:mx-[auto] '>
                        <button className='lg:w-[50%] md:w-[60%] sm:w-[100%] md:mx-[auto] h-[60px]  text-[black] bg-[#60B741] rounded-md font-bold hover:bg-[#FFB81D]'>Book A Free Consultatoin {">"}</button>
                    </div>
                </div>
                <div className=' mt-14 sm:w-[100%] md:w-[100%] lg:w-[100%] '>
                    <img src={logo} alt="logo" />
                    <div className='border border-red-500 lg:auto '>
                        {/* <div><AdaptiveHeight/></div> */}
                        <Curousel/>
                          

                        {/* <div></div> */}
                        {/* <AdaptiveHeight/> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home