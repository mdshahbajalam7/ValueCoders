import React, { useState } from 'react'
import { BsArrowRightCircleFill, BsFillArrowLeftCircleFill, IconName } from "react-icons/bs";
import {RxDotFilled } from "react-icons/rx";
function Curousel() {
    const slider = [
        {
            url: "https://images.unsplash.com/photo-1678729982804-0bcb5000c589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1678811116814-26372fcfef1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1678735953346-fef224d2a15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1678735953346-fef224d2a15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1678733231878-aabd84b58a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }
    ]

    const [currentindex, setcurrentindex] = useState(0)

    const prvslide = () => {
        const isFirstSlide = currentindex === 0
        const newIndex = isFirstSlide ? slider.length - 1 : currentindex - 1
        setcurrentindex(newIndex)
    }

    const nextslide = () => {
        const isLastSlide = currentindex === slider.length - 1
        const newIndex = isLastSlide ? 0 : currentindex + 1
        setcurrentindex(newIndex)
    }

    const GoToSlide = (index)=>{
        console.log(index);
        setcurrentindex(index)

    }
    return (
        <>
            <div className='max-w-[100%] h-[450px] w-full m-auto relative group'>
                <div style={{ backgroundImage: `url(${slider[currentindex].url})` }} className='w-full h-full rounder-2xl bg-center bg-cover duration-500'> </div>
                {/* left arrow  */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsFillArrowLeftCircleFill onClick={prvslide} size={30} />
                </div>

                {/* right arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsArrowRightCircleFill onClick={nextslide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slider.map((elem,index)=>(
                        <div className='text-2xl cursor-pointer'><RxDotFilled onClick={()=>GoToSlide(index)}/></div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Curousel