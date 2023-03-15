import React from 'react'
import Rightlogo from '../Image/RightLogo.jpg'
function Technology() {
    return (
        <div className='lg:mt-32 md:mt-10 sm:mt-10'>
            <div className='lg:w-[85%] lg:mx-[auto] font-semibold'>
                <h1 className=' font-semibold text-center lg:text-[35px]  md:text-[22px] sm:text-[22px] '>Our Software / Technology Consulting Services</h1>
                <p className='font-semibold text-[19px] mt-4 text-center md:text-[16px] sm:text-[16px] text-[gray] lg:w-[85%] md:w-[100%] sm:w-[90%] lg:mx-[auto] md:mx-[auto] sm:mx-[auto]'>Our IT consulting services company designs your IT strategy and provides software consulting services as a reliable software consulting firm in a manner that keeps you relieved of the simple-to-complex technical challenges in your daily workflows. Being one of the top consulting firms in India, we are dedicated to transforming your business with innovation by applying the latest technologies to resolve your IT concerns.</p>
                <div className='mt-10 lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 gap-5'>
                    <div className='font-semibold border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]' >
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] md:text-[18px] sm:text-[18px] lg:w-[100%] mt-5'>Software Product Engineering</h1>
                        <p className='mt-3 lg:text-[18px] md:text-[14px] sm:text-[14px] text-[gray]'>
                            Our IT consulting and services team stays tuned throughout the product development cycle and helps shape your application better..
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Seamless system integration with robust security</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Project scope detailing & TCO optimization</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Performance engineering & scalability benchmarking</h1>
                            </div>
                        </div>

                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] md:text-[18px] sm:text-[18px] lg:w-[100%] mt-5 font-semibold'>Business Process Consulting</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[14px]'>
                            Under our business consulting services, we review your business IT strategy, existing resources, technologies, and other key aspects for IT transformation:
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Assess current business process</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Assign maturity ratings of apps</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Generate process analysis reports</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] md:text-[18px] sm:text-[18px] lg:w-[100%] mt-5'>Security Consulting</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            Our proficient IT consultants and strategists perform a variety of tested techniques for identifying potential security threat areas and recommend effective remedial measures accordingly.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Wireless network analysis & assessment</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Upgrade existing security application</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Project security analysis and consulting</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[20px] lg:w-[100%] mt-5 md:text-[18px] sm:text-[18px]'>Application Development Consulting</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            We provide SMEs, startups, agencies, and enterprises with tailored applications that are flexible and scalable for their unique needs.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Automate and facilitate daily business workflows</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Improve employees’ productivity,</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Increase customers’ loyalty.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] lg:mx-[auto] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] lg:w-[110%] mt-5 md:text-[18px] sm:text-[18px]'>Audits & Assessments</h1>
                        <p className='mt-5 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            Among the top IT consulting agency, our audit and assessment align regulatory compliance to reduce the add-ons that can easily drive up the development costs.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Pre-support audits and assessment</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Infrastructure audits and assessment</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Current system audits and assessment</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] lg:w-[100%] md:text-[18px] sm:text-[18px] mt-5'>Mobile Enablement</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            We assist companies in adopting mobile technologies. For example, we can help them to understand which apps are best for their business and recommend solutions that fit their needs.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Design mobile adoption strategies </h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Implement mobile solutions for businesses to make their operations</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Services and products available for mobile users globally</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] lg:w-[100%] md:text-[18px] sm:text-[18px] mt-5'>Security Consulting</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            We assist businesses throughout the Cybercrime management lifecycle and support the establishment of effective evidence gathering and interpretation mechanisms.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Investigation of digital frauds and cyber crimes </h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>'Incident' identification and response</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Log analysis and interpretation</h1>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-8 hover:bg-[#96939312] lg:w-[100%] md:w-[95%] md:mx-[auto] sm:w-[95%] sm:mx-[auto]'>
                        <div style={{ width: "25px", height: "25px", borderRadius: "50%", border: '1px solid orange' }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "orange", margin: 'auto', marginTop: "6px" }}></div>
                        </div>
                        <h1 className='lg:text-[25px] lg:w-[100%] md:text-[18px] sm:text-[18px] mt-5'>Risk Management</h1>
                        <p className='mt-3 lg:text-[19px] text-[gray] md:text-[14px] sm:text-[15px]'>
                            Our risk management process has been drawn on a rich blend of monitoring process knowledge that could translate our assurance service reports into 'business' language.
                        </p>
                        <div className='lg:grid lg:grid-cols-1 gap-1 mt-9'>
                            <div className='flex gap-3'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>IT risks – assessment, management & controls. </h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Information security risk management.</h1>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img className='w-[25px] h-[25px]' src={Rightlogo} alt="" />
                                <h1 className='text-[17px] text-[gray]  font-semibold'>Data loss prevention & security awareness.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology