import React from 'react'

export default function Section2() {

  // window.addEventListener("scroll",()=>{
  //   let screenY = window.screenY; 
  //   console.log(screenY)
  //   if(screenY>100){
  //     document.querySelector(".section2").style.zIndex = "8"
  //   }
  //   else{
  //     document.querySelector(".section2").style.zIndex = "11"
  //   }
  // })

  return (
    <div className=''>
        <div className='section2 mt-[2vw] font-["founders-grotesk"] absolute z-10 overflow-hidden rounded-t-3xl flex flex-col justify-center h-[32.5vw] w-full bg-[#004D43]'>
            <hr className=''/>
            <div className='animate-marquee text-[25vw] overflow-hidden text-slate-100 flex justify-evenly -mt-[2.5vw] items-center w-max h-[22.5vw] uppercase'>
                <div className='mr-[12.5vw]'> we are ochi </div>
                <div className=''> we are ochi </div>
            </div>
            <hr />
        </div>
    </div>
  )
}
