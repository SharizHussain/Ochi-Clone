import React from "react"
import  Landing from "./sub_home/Landing"
import Section2 from "./sub_home/Section2"
import About from "./sub_home/About"
import Eyes1 from "./sub_home/Eyes1"
import Featured_projects from "./sub_home/Featured_projects"

function Home() {
  
  return (
    <div className="bg-zinc-800 w-full overflow-hidden">
        <Landing />
        <Section2/>
        <About/>
        <Eyes1/>
        <Featured_projects/>
    </div>
  )
}

export default Home
