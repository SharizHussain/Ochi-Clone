import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="navbar w-full flex font-['neue-montreal'] justify-between items-center bg-zinc-800 px-12 py-4">
            <h1 className='logo text-slate-100 text-4xl'> ochi </h1>
            <div className='navs flex gap-5 text-slate-100'> {["Services","Our work","About us","Insights","Contact us"].map((item,index)=>{
              return <nav key={index}> {index === 4 ? <nav className='ml-[15vw]'> {item} </nav> : <nav> {item} </nav> } </nav>
            })} </div>
        </div>
    </>
  )
}
