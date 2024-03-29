import React from 'react'
import img1 from '/src/assets/images/Fyde_Illustration_Crypto_2-663x551.png'
import img2 from '/src/assets/images/Vise_front2-663x551.jpg'
import img3 from '/src/assets/images/Frame-3875-663x551.jpg'
import img4 from '/src/assets/images/PB-Front-4-663x551.png'

export default function Featured_projects() {
  return (
    <>
        <div className='featured bg-[#F1F1F1] absolute pb-4 font-["neue-montreal"]'>
            <h1 className='text-[4vw] font-["neue-montreal"] ml-[4vw] text-slate-900 pt-[5vw]'>Featured projects</h1> 
            <hr className='mt-[2vw] w-full h-0.5 bg-slate-400'/>
            <div id='flex' className='flex flex-wrap justify-around items-center p-[2vw] text-[1.1vw] tracking-wide'>
                <div className='w-[45vw] -mr-[3vw]'>
                    <div className='flex -mb-[1vw] items-center'>
                        <div className='text-[7vw] -mt-[4.6vw]'>.</div>
                        <div className=''>FYDE</div>
                    </div>
                    <img src={img1} alt="" className='rounded-lg'/>
                    <div className='featured_btns flex gap-[1vw]'>
                        <div>AUDIT</div>
                        <div>COPYWRITING</div>
                        <div>SALED DECK</div>
                        <div>SLIDES DESIGN</div>
                    </div>
                </div>

                <div className='w-[45vw]'>
                    <div className='flex -mb-[1vw] items-center'>
                        <div className='text-[7vw] -mt-[4.6vw]'>.</div>
                        <div className=''>VISE</div>
                    </div>
                    <img src={img2} alt="" className='rounded-lg'/>
                    <div className='featured_btns flex gap-[1vw]'>
                        <div>AGENCY</div>
                        <div>COMPANY PRESENTATION</div>
                    </div>
                </div>

                <div className='w-[45vw] -mr-[3vw]'>
                    <div className='flex -mb-[1vw] items-center'>
                        <div className='text-[7vw] -mt-[4.6vw]'>.</div>
                        <div className=''>TRAWA</div>
                    </div>
                    <img src={img3} alt="" className='rounded-lg'/>
                    <div className='featured_btns flex gap-[1vw]'>
                        <div>BRAND IDENTITY</div>
                        <div>DESIGN RESEARCH</div>
                        <div>INVESTOR DECK</div>
                    </div>
                </div>

                <div className='w-[45vw]'>
                    <div className='flex -mb-[1vw] items-center'>
                        <div className='text-[7vw] -mt-[4.6vw]'>.</div>
                        <div className=''>PREMIUM BLEND</div>
                    </div>
                    <img src={img4} alt="" className='rounded-lg'/>
                    <div className='featured_btns flex gap-[1vw]'>
                        <div>BRANDED TEMPLATE</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
