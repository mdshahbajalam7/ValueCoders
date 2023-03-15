import React from 'react'
import Rightlogo from '../Image/RightLogo.jpg'
function Amazing() {
    return (
        <div className='mt-44'>
            <div className='lg:w-[85%] lg:mx-[auto]'>
                <div className='lg:grid lg:grid-cols-2 gap-16 mt-16'>
                    <div className='lg:w-[100%] lg:h-[100%] md:w-[80%] md:mx-[auto] sm:w-[80%] sm:mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/uploads/2022/03/our-clients-for-lighter.webp" alt="universe" />
                    </div>
                    <div className='mt-20'>
                        <h1 className=' lg:text-[35px] font-semibold lg:w-[100%] md:w-[95%] md:mx-[auto] md:text-[20px] sm:w-[95%] sm:mx-[auto] sm:text-[20px]'>We Have Worked With Some Amazing Companies Globally.</h1>
                        <p className='text-[gray] mt-6 text-[18px] font-semibold lg:w-[100%] md:w-[95%] md:mx-[auto] md:text-[16px] sm:w-[95%] sm:mx-[auto] sm:text-[20px]'>As a top IT consulting company in India, we have the privilege of working with some amazing companies from all over the globe and becoming a part of the best tech consulting firms.</p>
                        <div className='lg:grid lg:grid-cols-1 gap-4 mt-9 lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                            <div className='flex gap-5'>
                                <img className='' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray] mt-1 font-semibold md:text-[14px] sm:text-[14px]'>4200+ Projects Successful</h1>
                            </div>
                            <div className='flex gap-5'>
                                <img src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray] mt-1 font-semibold md:text-[14px] sm:text-[14px]'>97%+ Customer Satisfaction Rate</h1>
                            </div>
                            <div className='flex gap-5'>
                                <img src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray] mt-1 font-semibold md:text-[14px] sn:text-[14px]'>2500+ Global Clients</h1>
                            </div>
                            <div className='flex gap-5'>
                                <img src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray] mt-1 font-semibold md:text-[14px] sm:text-[14px]'>38+ Countries</h1>
                            </div>
                            <div className='flex gap-5'>
                                <img src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray] mt-1 font-semibold md:text-[14px] sm:text-[14px]'>650+ Full-Time Software Developers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amazing