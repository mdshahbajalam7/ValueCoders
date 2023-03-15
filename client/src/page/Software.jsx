import React from 'react'
import Rightlogo from '../Image/RightLogo.jpg'
function Software() {
    return (
        <div className='mt-10'>
            <div className='lg:w-[85%] lg:mx-[auto] lg:grid lg:grid-cols-2 gap-5 py-10'>
                <div className='font-semibold'>
                    <h1 className='lg:text-[40px]'>Software Legacy Upgradation For Enterprises</h1>
                    <p className='text-[gray] mt-4 lg:text-[17px]'>You have been embracing the technology to manage your business processes better, but now find that your legacy is being outdated, you can trust our software development team who has expertise on new age as well as older technologies and can easily help you with your software upgradation, scaling, enhancements & maintenance:</p>
                    <div className='lg:grid lg:grid-cols-2 gap-5 mt-5'>
                        <div >
                            <div className='flex gap-2'>
                                <img src={Rightlogo} alt="Rightlogo" />
                                <h1 className='mt-1 text-[20px]'>Application Modernization</h1>
                            </div>
                            <p className='pl-8 text-[gray]'>Modernise your legacy software by adding newer features for today’s compatibility with business needs.</p>
                        </div>
                        <div >
                            <div className='flex gap-2'>
                                <img src={Rightlogo} alt="Rightlogo" />
                                <h1 className='mt-1 text-[20px]'>Application Migration</h1>
                            </div>
                            <p className='pl-8 text-[gray]'>Migrate and shift your software to newer technologies for coping up with the advancements.</p>

                        </div>
                        <div >
                            <div className='flex gap-2'>
                                <img src={Rightlogo} alt="Rightlogo" />
                                <h1 className='mt-1 text-[20px]'>Maintenance & Support</h1>
                            </div>
                            <p className='pl-8 text-[gray]'>Let our team of experts maintain your enterprise software, on-demand or as per SLAs.</p>
                        </div>
                        <div >
                            <div className='flex gap-2'>
                                <img src={Rightlogo} alt="Rightlogo" />
                                <h1 className='mt-1 text-[20px]'>IT Strategy Cosulting</h1>
                            </div>
                            <p className='pl-8 text-[gray]'>Consult with highly experienced IT team to create a roadmap of upgradation & modernisation ensuring minimal down-time.</p>
                        </div>
                    </div>
                </div>

                <div className='mt-7'>
                    <img src="https://www.valuecoders.com/wp-content/uploads/2022/04/three-people-discussion-img.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Software