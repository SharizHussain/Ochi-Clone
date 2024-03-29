import React,{useEffect} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import img from '../../assets/images/content-image01.jpg'
import { useAnimate, motion } from 'framer-motion';

export default function Landing() {

  const [scope, animate] = useAnimate()

  useEffect(() => {
    let x = window.innerWidth
    if(x<430){
      animate(scope.current, {marginLeft: "25vw"}, {duration:"1.2", ease:"easeIn"})
    }
    else{
      animate(scope.current, {marginLeft:"22vw"}, {duration:"1.2", ease:"easeIn"})
    }
  }, [])
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='landing mb-[5vw] -z-[10]'>
        <div className='mt-[6.5vw] relative font-["founders-grotesk"] tracking-widest -ml-[5vw]'>
          <div className='landing_text text-[10vw] font-thin leading-[7.5vw] flex items-center uppercase text-slate-100 ml-[10vw]'>we create</div>
          <img src={img} className='landing_img -z-10 absolute mt-[1.3vw] rounded-lg ml-[10vw] w-[10vw] h-[6vw]'/>
          <motion.div ref={scope} initial={{marginLeft:"5vw"}} className='landing_text z-10  bg-[#27272A] text-[10vw] font-thin leading-[7.5vw] flex items-center uppercase text-slate-100 ml-[22vw]'> eye-opening</motion.div>
          <div className='landing_text text-[10vw] font-thin leading-[7.5vw] flex items-center uppercase text-slate-100 ml-[10vw]'>presentations</div>
        </div>
        <hr className='mt-[6vw]'/>
        <div className='hero_section2 text-center flex justify-between items-center p-[2vw] text-slate-100 font-["neue-montreal"] text-[1.3vw]'>
          <span className='landingQ1'>For public and private companies</span>
          <span className='landingQ2'>From the first pitch to IPO</span>
          <span> <span className='cta border rounded-2xl px-[1vw] py-[0.5vw]'>START THE PROJECT</span> <span className='cta_arrow border-slate-100 border rounded-full p-[.8vh]'> <FaArrowRight className='inline -mt-[.5vw] text-[1.5vw]'/> </span> </span>
        </div>
    </div>
  )
}
