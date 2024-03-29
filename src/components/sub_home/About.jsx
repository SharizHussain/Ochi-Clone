import React from "react";

export default function About() {
  return (
    <div className="">
      <div
        data-scroll
        data-scroll-speed="1.3"
        id="about"
        className='font-["neue-montreal"] z-[20] absolute h-max w-full bg-[#CDEA68] rounded-t-3xl flex flex-wrap'
      >
        <div className='font-["neue-montreal"] text-[#212121] text-[4vw] leading-[4.5vw] px-[4vw] py-[6vw]'>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.{" "}
        </div>
        <div className="w-full h-[1px] bg-zinc-800 -mt-[5vw]"> </div>
        <div id="about_section2" className="flex w-[100vw]">
          <div className="w-[50%] pl-[5vw]">What you can expect:</div>
          <div className="w-[50%] flex justify-evenly items-center text-[1.3vw]">
            <div className="w-[50%]">
              <span className="inline-block mb-[3vw]">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.{" "}
              </span>
              <span>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </span>
            </div>
            <div className="w-[17%] text-center mt-[7vw]">Instagram Behance Facebook Linkedin</div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-800 mt-20"> </div>
        <div className="flex justify-between w-full p-5 pb-10 px-10">
          <h1 className="text-[4vw] text-[#212121] relative">Our approach:</h1>
          <div className="readMore absolute mt-[8vw] rounded-3xl w-[12vw] h-[4vw] text-[1.4vw] text-white flex text-center leading-tight items-center justify-center p-2 bg-[#212121] hover:bg-white hover:text-black">
            Read More{" "}
            <span className="read_More h-[0.8vw] w-[0.8vw] rounded-full ml-[1.3vw] bg-slate-100"></span>
          </div>
          <img
            className="img1 h-[32vw] w-[48vw] rounded-lg"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img1"
          />
        </div>
      </div>
    </div>
  );
}
