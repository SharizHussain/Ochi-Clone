import React, { useEffect } from 'react'
import { useState } from 'react'
import img1 from '../../assets/images/Top-Viewbbcbv-1-1440x921.jpg'

export default function Eyes1() {

  function fun(){
    <video src=""></video>
  }
  
  const [rotate, setRotate] = useState(0)

  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
  
        let deltaX = mouseX - (window.innerWidth/2);
        let deltaY =  mouseY - (window.innerHeight/2);
  
        let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
  
        setRotate(angle-180)
      })
  })

  return (
    <>
        <div className='eyes w-full bg-[#f4f4f4] relative flex justify-center items-center'>
            <img src={img1} alt="img1" />
            <div className='rounded-full absolute w-[15vw] h-[15vw] bg-slate-100 -ml-[17vw]'></div>
            <div className='rounded-full absolute w-[15vw] h-[15vw] bg-slate-100 ml-[17vw]'></div>
                <div className='rounded-full absolute w-[10vw] h-[10vw] bg-slate-800 -ml-[17vw]'></div>
                <div className='rounded-full absolute w-[10vw] h-[10vw] bg-slate-800 ml-[17vw]'></div>
                    <div className='font-["neue-montreal"] absolute text-slate-100 ml-[17vw] text-[1.3vw]'>PLAY</div>
                    <div className='font-["neue-montreal"] absolute text-slate-100 -ml-[17vw] text-[1.3vw]'>PLAY</div>
                        <div className='rounded-full absolute w-[9.8vw] h-[1.3vw] bg-transparent ml-[17vw] flex justify-start' style={{ transform: `rotate(${rotate}deg)` }}>
                            <div className='rounded-full absolute w-[1.3vw] h-[1.3vw] bg-slate-100'></div>      
                        </div>
                        <div className='rounded-full absolute w-[9.8vw] h-[1.3vw] bg-transparent -ml-[17vw] flex justify-start' style={{ transform: `rotate(${rotate}deg)` }}>
                            <div className='rounded-full absolute w-[1.3vw] h-[1.3vw] bg-slate-100'></div>
                        </div>
        </div>
    </>
  )
}
