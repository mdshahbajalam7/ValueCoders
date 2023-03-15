import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { ImYoutube2 } from "react-icons/im";
import RatingStar from '../Image/ratingStart.jpg'

function Footer() {
    return (
        <div className='bg-[#2B294D] pb-12'>
            <div className='lg:w-[85%] lg:mx-[auto] '>
                <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1  text-[gray] pt-6'>
                    <div className='w-[140%]'>
                        <h1 className=''>Copyright © 2004 - 2023. All Rights Reserved. ValueCoders.com</h1>
                        <div className='lg:flex justify-between gap-2 text-[gray] text-[14px] mt-5'>
                            <h1><a href="https://www.valuecoders.com/partnership-program">Become a Partner</a></h1> |
                            <h1><a href="https://www.valuecoders.com/privacy-policy">Privacy Policy</a></h1> |
                            <h1><a href="https://www.valuecoders.com/terms-of-service">Terms of Service</a></h1> |
                            <h1><a href="https://www.valuecoders.com/why-india"> Why India? </a></h1> |
                            <h1><a href="https://www.valuecoders.com/faq"> FAQ</a></h1> |
                            <h1><a href="https://www.valuecoders.com/disclaimer"> Disclaimer</a></h1> |
                            <h1><a href="https://www.valuecoders.com/gdpr-compliance"> GDPR</a></h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex gap-4 ml-52 w-[100%] '>
                            <img src={RatingStar} alt="" />
                            <h1 className='mt-3'>4.9 out of 5.0 by</h1>
                        </div>
                        <div className='flex gap-16 ml-60 mt-4 w-[100%]'>
                            <button className='w-[25%] border border-yellow-400 font-semibold text-[18px] text-[yellow] rounded-md hover:border hover:border-green-500 hover:text-[green] h-[30px]'>Rate us</button>
                            <h1 className='ml-[-10%]'>1218 clients on over 10800+ projects</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='ml-[80%]'>  <img className='mt-[-10px]' src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/footer-iso-logo.webp" alt="" /></div>
                        <div className='ml-[50%] flex justify-between w-[30%] mt-8 gap-5 text-[white]'>
                            <a href="https://www.facebook.com/ValueCoders" target='_blank'><AiFillFacebook size={25} /></a>
                            <a href="https://twitter.com/ValueCoders" target='_blank'><AiOutlineTwitter size={25} /></a>
                            <a href="https://www.linkedin.com/company/valuecoders" target='_blank'><AiFillLinkedin size={25} /></a>
                            <a href="https://www.instagram.com/valuecodersofficial_/?igshid=qfk286mq0wee" target='_blank'><AiOutlineInstagram size={25} /></a>
                            <a href="https://www.youtube.com/channel/UCCnijyLczGPUGI8aBkK3pTw" target='_blank'><ImYoutube2 size={25} /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer