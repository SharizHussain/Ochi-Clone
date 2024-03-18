import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Landing() {
  return (
    <div className='mb-[5vw]'>
        <div className='mt-[6.5vw] font-["founders-grotesk"] tracking-widest -ml-[5vw]'>
            {["we create","eye-opening","presentations"].map((item,index)=>{
               return <div key={index} className='text-[10vw] font-thin leading-[7.5vw] flex items-center uppercase text-slate-100 ml-[10vw]'> {index===1 && <div className='bg-green-500 mt-3 rounded-lg mr-5 w-[10vw] h-[6vw]'></div>} {item} </div>
            })}
        </div>
        <hr className='mt-[6vw]'/>
        <div className='hero_section2 text-center flex justify-between items-center p-[2vw] text-slate-100 font-["neue-montreal"] text-[1.3vw]'>
          <span className=''>For public and private companies</span>
          <span>From the first pitch to IPO</span>
          <span> <span className='cta border rounded-2xl px-[1vw] py-[0.5vw]'>START THE PROJECT</span> <span className='cta_arrow border-slate-100 border rounded-full px-[.5vw] py-[.5vw]'> <FaArrowRight className='inline -mt-[.5vw] text-[1.5vw]'/> </span> </span>
        </div>
    </div>
  )
}
