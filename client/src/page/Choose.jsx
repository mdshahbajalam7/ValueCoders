import React from 'react'
import Rightlogo from '../Image/RightLogo.jpg'
function Choose() {
    return (
        <div className='mt-20'>
            <div className='lg:w-[80%] mx-[auto]'>
                <h1 className='text-center text-[35px] font-semibold'>Choose From Our Hiring Models</h1>
                <p className='text-[gray] mt-3 text-center text-[18px]'>With us, you can choose from multiple hiring models that best suit your needs</p>
                <div className='mt-16 lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-1 md:gap-10 sm:grid sm:grid-cols-1 sm:gap-10 '>
                    <div className='border border-gray-300 p-8 lg:w-[100%] md:w-[90%] md:mx-[auto] sm:w-[90%] sm:mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/tech/light-dot-net-modal-icon-1.webp" alt="admin" />
                        <h1 className='font-semibold text-[30px]'>Dedicated Team</h1>
                        <p className='text-[17px] font-thin'>(also known as product engineering teams)</p>
                        <div className='border border-gray-300 mt-16'></div>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>It is an expert autonomous team comprising of different roles (e.g. project manager, software engineers, QA engineers, and other roles) capable of delivering technology solutions rapidly and efficiently. The roles are defined for each specific project and management is conducted jointly by a Scrum Master and the client's product owner.</p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Agile processes</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Transparent pricing</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Monthly billing</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Maximum flexibility</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Suitable for startups, MVPs and software/product companies</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 lg:w-[100%] md:w-[90%] md:mx-[auto] sm:w-[90%] sm:mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/tech/light-dot-net-modal-icon-2.webp" alt="Doctor" />
                        <h1 className='font-semibold text-[30px]'>Team Augmentation</h1>
                        <p className='text-[17px] font-thin'>(also known as team extension or staff augmentation)</p>
                        <div className='border border-gray-300 mt-10'></div>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>Suitable for every scale of business and project, team augmentation helps add required talent to you team to fill the talent gap. The augmented team members work as part of your local or distributed team, attending your regular daily meetings and reporting directly to your managers. This helps businesses scale immediately and on-demand.</p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Scale on-demand</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Quick & cost-effective</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Monthly billing</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Avoid hiring hassles</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Transparent pricing</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8  md:pb-5 lg:w-[100%] md:w-[90%] md:mx-[auto] sm:w-[90%] sm:mx-[auto]'>
                        <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/tech/light-dot-net-modal-icon-3.webp" alt="setting" />
                        <h1 className='font-semibold text-[30px]'>Project Based</h1>
                        <p className='text-[17px] font-thin'>(best suited for small-mid scale projects)</p>
                        <div className='border border-gray-300 mt-16'></div>
                        <h1 className='mt-4 font-semibold'>Fixed Price Model:</h1>
                        <p className='text-[gray] font-semibold text-[16px] mt-3'>When project specifications, scope, deliverables and acceptance criteria are clearly defined, we can evaluate and offer a fixed quote for the project. This is mostly suitable for small-mid scale projects with well documented specifications.</p>
                        <h1 className='mt-6 font-semibold'>Time & Material Model:</h1>
                        <p className='text-[gray] font-semibold text-[16px] mt-6'>Suitable for projects that have undefined or dynamic scope requirements or complicated business requirements due to which the cost estimation is not possible. Therefore, developers can be hired per their time.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose