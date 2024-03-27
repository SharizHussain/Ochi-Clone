import React from "react"
import Router from "./components/Router"
import LocomotiveScroll from "locomotive-scroll"

function App() {
  const locomotivescroll = new LocomotiveScroll();
  return (
    <Router/>
  )
}

export default App
