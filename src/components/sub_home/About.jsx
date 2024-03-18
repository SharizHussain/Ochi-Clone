import React from 'react'

export default function About() {
  return (
    <div className=''>
        <div className='font-["neue-montreal"] h-max w-full bg-[#CDEA68] rounded-t-3xl flex flex-wrap'>
            <div className='font-["neue-montreal"] text-[#212121] text-[4vw] leading-[4.5vw] px-[4vw] py-[6vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people. </div>
            <div className='w-full h-[1px] bg-zinc-800 -mt-[5vw]'> </div>
            <div className='w-full h-[1px] bg-zinc-800 mt-40'> </div>
            <div className='flex justify-between w-full p-5 pb-10 px-10'>
                  <h1 className='text-[4vw] text-[#212121] relative'>Our approach:</h1>
                  <div className='absolute mt-[8vw] rounded-3xl w-[12vw] h-[4vw] text-[1.4vw] text-white flex items-center justify-center p-2 bg-[#212121]'>Read More <span className='h-[0.8vw] w-[0.8vw] rounded-full ml-[1.3vw] bg-slate-100'></span></div>
                  <img className='img1 h-[32vw] w-[48vw] rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img1" />
            </div>
        </div>
    </div>
  )
}
