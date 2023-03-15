import React from 'react'
import Company from '../Image/companylogo.jpg'
function Companylogo() {
    return (
        <div className='bg-[#f6f6f6] py-4'>
            {/* md:hidden sm:hidden lg:none */}
            <div className='lg:w-[85%] lg:mx-[auto] '>
               <img src={Company} alt="Company" />

            </div>
        </div>
    )
}

export default Companylogo