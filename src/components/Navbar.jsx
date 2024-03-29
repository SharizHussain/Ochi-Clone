import React from 'react'
import img from '/src/assets/images/menu.png'

export default function Navbar() {

  let show = true
  function show_fun(){
    if (show==true) {
      document.querySelector(".navbar").classList.add("navbar2")
      document.querySelector(".navbar").classList.remove("navbar")
      document.querySelector(".three_line").classList.add("three_line2")
      document.querySelector(".navs").style.flexDirection = "column"
      document.querySelector(".navs").style.gap = "3"
      document.querySelector("#contact").style.marginLeft = "0"
      document.querySelector(".navs").style.marginTop = "10vh"
      show = false;
    }
    else{
      document.querySelector(".navbar2").classList.add("navbar")
      document.querySelector(".navbar2").classList.remove("navbar2")
      document.querySelector(".three_line").classList.remove("three_line2")
      document.querySelector(".navs").style.flexDirection = "row"
      document.querySelector("#contact").style.marginLeft = "15vw"
      document.querySelector(".navs").style.marginTop = "0"
      show = true
    }
  }
  return (
    <>
        <div className="navbar w-full flex font-['neue-montreal'] justify-between items-center bg-zinc-800 px-12 py-4">
            <h1 className='logo text-slate-100 text-4xl'> ochi </h1>
            <div className='navs flex gap-5 text-slate-100'> {["Services","Our work","About us","Insights","Contact us"].map((item,index)=>{
              return <nav key={index}> {index === 4 ? <nav id='contact' className='ml-[15vw]'> {item} </nav> : <nav> {item} </nav> } </nav>
            })} </div>
        </div>
            <img src={img} alt="" className='three_line hidden absolute w-[55px] right-0 mr-[8vw] mt-[7vw]' onClick={show_fun}/>
    </>
  )
}
