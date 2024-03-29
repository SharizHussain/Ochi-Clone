import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // useEffect(() => {

  //   let screenX = window.screenX
  //   if (screenX<440) {
  //     document.querySelector(".navbar").classList.add("navbar2")
  //     document.querySelector(".navbar2").classList.remove("navbar")
  //   }

  // }, [])
  

  return (
    <footer className="footer bg-gray-800 mt-[115vw] text-white py-[4vw] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
            <Link to={"/"} onClick={scrollToTop} className="logo ml-[1.5vw] cursor-pointer font-['neue-montreal'] text-slate-100 text-4xl bg-[#121212] w-[8vw] h-[3vw] rounded text-center"> ochi </Link>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400 transition duration-300"
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-64 border border-gray-600 rounded-l focus:outline-none focus:ring focus:border-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-400"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>

            <div className="navbar flex font-['neue-montreal'] justify-between items-center ml-[11vw] px-12 py-4">
              <div className="navs flex gap-[3vw] text-center text-slate-100">
                <div>Services</div>
                <div>Our work</div>
                <div>About us</div>
                <div>Insights</div>
                <div>Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
