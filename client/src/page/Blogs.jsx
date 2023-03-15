import React from 'react'

function Blogs() {
    return (
        <div className='bg-[#80808015]'>
            <div className='lg:w-[80%] mx-[auto] p-10'>
                <h1 className='text-center text-[35px] font-semibold'>Our Latest Blogs</h1>
                <p className='text-[gray] mt-3 text-center lg:text-[17px] lg:w-[100%] lg:mx-[auto] md:w-[95%] md:mx-[auto] md:text-[17px]'>We at ValueCoders come up with write-ups that enhance your knowledge and keep you updated about the latest happenings in the IT industry. Our experts constantly research new IT tools and make write-ups for our valuable customers.</p>
                <div className='mt-16 lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 gap-10'>
                    <div className='border border-gray-300 p-8  hover:hover:bg-[#96939312] lg:w-[100%] md:w-[90%] sm:w-[90%] mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/blog-icon-light1.webp" alt="Book" />
                        <h1 className='font-semibold lg:text-[23px] md:text-[23px] sm:text-[18px]'>Tips To Pick The Right Software Development Methodology For Your Enterprise</h1>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>Choosing the right software development methodology is crucial for the success of any enterprise software project. With several options to…</p>
                    </div>
                    <div className='border border-gray-300 p-8  hover:hover:bg-[#96939312] lg:w-[100%] md:w-[90%] sm:w-[90%] mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/blog-icon-light1.webp" alt="Book" />
                        <h1 className='font-semibold text-[23px] sm:text-[18px]'>Java Developer: The Unsung Hero of Enterprise-Level Software Development</h1>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>Enterprise-level software development is a complex process that requires the skills of many different professionals. However, one role that often…</p>
                    </div>
                    <div className='border border-gray-300 p-8 hover:hover:bg-[#96939312] lg:w-[100%] md:w-[90%] sm:w-[90%] mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/blog-icon-light1.webp" alt="Book" />
                        <h1 className='font-semibold text-[23px] sm:text-[18px]'>A Guide to Security in Software Development – White Paper</h1>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>Matching the changing pace of technologies and prospering the growth is the new face of business survival. Every passing day…</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs