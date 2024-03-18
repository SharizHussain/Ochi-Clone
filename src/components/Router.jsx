import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"

function App() {
  
  return (
    <BrowserRouter>
            <Navbar/>
        <Routes>
                    <Route path="/" index element={<Home/>}/>
        </Routes>
            <Footer/>
    </BrowserRouter>
  )
}

export default App
