import React, { useState } from 'react'
import {FaMinus,FaPlus } from "react-icons/fa";
function Consulting() {
    const [plus, setplus] = useState(false)
    const [plus1, setplus1] = useState(false)
    const [plus2, setplus2] = useState(false)
    const [plus3, setplus3] = useState(false)
    const [plus4, setplus4] = useState(false)
    const Open = () => {
        setplus(!plus)
    }
    const close = () => {
        setplus(false)
    }
    const Open1 = () => {
        setplus1(!plus1)
    }
    const close1 = () => {
        setplus1(false)

    }
    const Open2 = () => {
        setplus2(!plus2)
    }
    const close2 = () => {
        setplus2(false)

    }
    const Open3 = () => {
        setplus3(!plus3)
    }
    const close3 = () => {
        setplus3(false)

    }
    const Open4 = () => {
        setplus4(!plus4)
    }
    const close4 = () => {
        setplus4(false)

    }
    return (
        <div className='mt-20'>
            <div className='w-[85%] mx-[auto]'>
                <h1 className='text-center font-semibold text-[30px]'>FAQs Related To IT Strategy & Consulting</h1>
                <p className='text-center font-semibold text-[18px] w-[80%] mt-6 mx-[auto] text-[gray]'>Here are answers to some questions related to IT strategy consulting which our clients frequently have in their minds related to top technology consulting firms</p>
                <div className='flex gap-4 mt-10'>
                    {plus ? (
                        <FaMinus size={30} onClick={close} className='text-[#fcaf20] cursor-pointer mt-2  font-semibold' />
                    ) : (
                        <FaPlus size={30} onClick={Open} className='text-[#fcaf20] cursor-pointer mt-2  font-semibold' />

                    )}
                    <h1 className='font-semibold mt-1 text-[25px]'>Why should I choose ValueCoders as my IT consulting partner?</h1>

                </div>
                {plus && (
                    <div className='text-[gray] ml-[70px] text-[18px] w-[80%] mx-[auto] font-semibold'>
                        <p>ValueCoders makes the perfect choice for your IT consulting partner for multiple reasons, as mentioned below:</p>
                        <ul className='list-disc ml-6'>
                            <li>ValueCoders have a good understanding of different businesses and their specific needs.</li>
                            <li>We provide customized solutions tailored to your business. We have a strong track record of delivering successful projects.</li>
                            <li>We have over a decade of experience in the IT consulting industry and have helped hundreds of businesses with our custom solutions.</li>
                            <li>We have a pool of 650+ pre-vetted engineers. You can handpick a team of developers from our vast talent pool according to your project requirements.</li>
                            <li>We have no hidden cost elements and we follow a simple pricing model.</li>
                            <li>Our IT consultant can handle any type of project, no matter how complex. We have a team of experts that can handle any type of project you throw at them.</li>
                            <li>We are responsive and attentive to our clients’ needs. We will always be there to answer your questions and address any concerns.</li>
                        </ul>
                        <p>If you are looking for an IT consulting partner, ValueCoders is definitely worth considering.</p>
                    </div>
                )}
                <div className='flex gap-4 mt-6'>
                    {plus1 ? (
                        <FaMinus size={30} onClick={close1} className='text-[#fcaf20] cursor-pointer  font-semibold mt-2' />
                    ) : (
                        <FaPlus size={30} onClick={Open1} className='text-[#fcaf20] cursor-pointer mt-2  font-semibold' />

                    )}
                    <h1 className='font-semibold mt-1 text-[25px]'>How can I request a free trial for ValueCoders’ IT consulting services?</h1>

                </div>
                {plus1 && (
                    <div className='text-[gray] ml-[70px] text-[18px] w-[80%] mx-[auto] font-semibold'>
                        <p className='mt-1'>Our company offers a 2-week free trial to all clients, and it’s super easy to ask for a 2 weeks free trial for IT consulting services from ValueCoders.
                            All you need to do is sign up for an account via form fill. This will connect you with our software consultants immediately. You can share your requirements with them, and they will assign the necessary resources to start the free trial.</p>
                        <p className='mt-4'>There are several reasons why it’s beneficial to ask for a free IT consulting services trial from ValueCoders.
                            One reason is that doing so can help you get a sense of our company and whether we would be a good fit for your needs. Additionally, it allows you to test our services and see if we meet your expectations.</p>
                        <p className='mt-4'>Taking advantage of a free trial can also help you save money in the long run, as you can ensure that you are happy with the service before committing to paying for it. Ultimately, asking for a free trial is a great way to learn more about ValueCoders and their services – so it’s definitely worth it.</p>
                        <p className='mt-4'>The best part is there’s no obligation to continue working together. We want to let you see the results and decide if we’re the right fit.</p>
                    </div>
                )}
                <div className='flex gap-4 mt-6'>
                    {plus2 ? (
                        <FaMinus size={30} onClick={close2} className='text-[#fcaf20] cursor-pointer mt-2' />
                    ) : (
                        <FaPlus size={30} onClick={Open2} className='text-[#fcaf20] cursor-pointer mt-2' />

                    )}
                    <h1 className='font-semibold mt-1 text-[25px]'>I have a startup. How can your technology consultants help me?</h1>

                </div>
                {plus2 && (
                    <div className='text-[gray]  ml-[70px] text-[18px] w-[80%] mx-[auto] font-semibold'>
                        <p>ValueCoders knows and understands your startup’s technology needs. With the IT landscape swiftly and continually transforming, your organization must execute the leading technology today and tomorrow.</p>
                        <ul className='list-disc ml-6'>
                            <li>ValueCoders is one of the best technology consulting companies and researches the best technology and brings you the right IT solutions at the right time and right value..</li>
                            <li>As one of the best software development consulting firms we help you plan, purchase, install and maintain your company’s information systems.</li>
                            <li>Besides, ValueCoders, the top technology company in India, provides software development consulting services and other requirements on your network, from end-user devices to connections to the internet and everything in between.</li>
                        </ul>
                    </div>
                )}
                <div className='flex gap-4 mt-6'>
                    {plus3 ? (
                        <FaMinus size={30} onClick={close3} className='text-[#fcaf20] cursor-pointer mt-2' />
                    ) : (
                        <FaPlus size={30} onClick={Open3} className='text-[#fcaf20] cursor-pointer mt-2' />

                    )}
                    <h1 className='font-semibold mt-1 text-[25px]'>Why should I outsource IT consulting services to ValueCoders in India?</h1>
                </div>
                {plus3 && (
                    <div className='text-[gray] ml-[70px] text-[18px] w-[80%] mx-[auto] font-semibold'>
                        <p>There are many benefits to outsourcing IT consulting services to India. Some of the key benefits include:</p>
                        <ul className='list-disc ml-6'>
                            <li>Cost savings: By outsourcing IT consulting to an Indian company, you can save up to 60% on costs.</li>
                            <li>Quality of work: The quality of work by Indian consultants is high and comparable to that in developed countries.</li>
                            <li>Wide range of skills and expertise: Indian consultants from ValueCoders have a wide range of skills and expertise and can provide high-quality services across a range of industries.</li>
                            <li>Time zone advantages: Indian consultants are available during times that are convenient for clients in North America and Europe.</li>
                            <li>Language advantages: Many Indian consultants are fluent in English, making communication easy and seamless.</li>
                            <li>Scalability – Indian firms can quickly scale up or down their resources as needed, allowing them to respond rapidly to changes in business needs.</li>
                            <li>Localization – Indian firms provide tailored services specifically for the local market, which can be important for companies looking to do business in India.</li>
                        </ul>
                        <p className='mt-5'>Along with all these benefits, ValueCoders has a reputation for providing high-quality work with</p>
                        <ul className='list-disc ml-6'>
                            <li>18+ years of experience and knowledge</li>
                            <li>24/7 support and quick turnaround times</li>
                            <li>Overall project management</li>
                            <li>Cultural and time-zone compatibility</li>
                            <li>Quality assurance and timely delivery</li>
                            <li>Competitive rates</li>
                        </ul>
                    </div>

                )}
                <div className='flex gap-4 mt-6'>
                    {plus4 ? (
                        <FaMinus size={30} onClick={close4} className='text-[#fcaf20] cursor-pointer mt-2 font-semibold' />
                    ) : (
                        <FaPlus size={30} onClick={Open4} className=' font-semibold text-[#fcaf20] cursor-pointer mt-2' />

                    )}
                    <h1 className='font-semibold mt-1 text-[25px]'>Why do I need software consulting services?</h1>
                </div>
                {plus4 && (
                    <div className='text-[gray]  ml-[70px] text-[18px] w-[80%] mx-[auto] font-semibold'>
                        <p>Here are some of the advantages of a software consulting company:</p>
                        <ul className='list-disc ml-6'>
                            <li>Get the best return on software technology investment through the IT consultancies in India</li>
                            <li>Improve productivity and efficiency by investing in the right technology through a software development consulting company.</li>
                            <li>Focus on what you need and align technology & operational objectives</li>
                            <li>When your project is in the right hands, you will have complete peace of mind</li>
                        </ul>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Consulting