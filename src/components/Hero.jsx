import React from "react";
import mockingjay from "../assets/ciamik.jpg";

export default function Hero() {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full overflow-hidden">
        <img
          src={mockingjay}
          alt="mockingjay"
          className="w-full h-full sm:block block object-cover"
        />
      </div>
      <section className="hero-layout">
        <div className="hero-container">
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 sm:hidden" />
          </div>
          <div>
            <h1 className="font-black text-[#1f1f1f] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2 uppercase">
              Hi, I'm{" "}
              <span className="sm:text-#858585 sm:text-[90px] text-[#1f1f1f] text-[50px] font-extrabold uppercase font-wasabi tracking-widest">
                <br />
                Julio SP.
              </span>
            </h1>
            <p className="text-[#1f1f1f] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              Front End Developer. <br className="sm:block hidden" />
              <span className="text-nowrap">
                Informatics-Engineering, Sriwijaya University
              </span>
            </p>
          </div>
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem]"></div>
        </div>
      </section>
    </>
  );
}
