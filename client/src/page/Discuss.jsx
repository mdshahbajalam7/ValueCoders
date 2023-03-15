import React from 'react'

function Discuss() {
    return (
        <div className='mt-20 bg-[#1d1c39] text-[white]'>
            <div className='lg:w-[85%] md:w-[100%] lg:mx-[auto] md:mx-[auto] p-20 font-semibold text-center'>
                <h1 className='text-center lg:text-[40px]  md:text-[22px] sm:text-[22px] '>Let's Discuss Your Project</h1>
                <p className='lg:text-center text-[gray] lg:text-[20px] md:text-[16px] lg:w-[100%] md:w-[110%] mt-4'>Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
                <button className='lg:w-[30%] lg:mt-16 md:mt-14 text-[black] lg:text-[20px] md:w-[60%] sm:w-[110%] sm:mt-6 md:mx-[auto] h-[60px] bg-[#60B741] rounded-md font-bold hover:bg-[#FFB81D]'>Book A Free Consultatoin {">"}</button>
            </div>
        </div>
    )
}

export default Discuss