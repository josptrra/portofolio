import React from "react";
import logo from "../assets/logo-white.png";
import { BsEnvelopePaper } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

export default function Footer() {
  return (
    <footer
      className="w-full text-white text-[13px] leading-5 pt-[100px] pb-[30px] bottom-0"
      id="contact"
    >
      <div className="w-[85%] flex flex-wrap flex-col md:flex-row items-start justify-between mx-auto">
        <div className="basis-1/5 p-[10px]">
          <img src={logo} alt="logo" className="w-20" />
          <p className="pt-4">
            This portfolio is a dynamic work in progress. As we continue to
            develop and refine the content, we welcome your feedback and
            appreciate your patience during this creative phase.
          </p>
        </div>
        <div className="basis-1/5 p-[10px]">
          <h3 className="w-fit mb-6 relative font-bold text-lg">
            Locations & Contact
          </h3>
          <p>Indonesia, Sumatera Selatan</p>
          <p>Palembang</p>
          <p className="w-fit border-b-[1px] border-white mt-4 mb-1">
            juliosp2107@gmail.com
          </p>
          <p>+62 82184196510</p>
        </div>
        <div className="basis-1/5 p-[10px]">
          <h3 className="w-fit mb-6 relative font-bold text-lg">Links</h3>
          <ul className="list-none mb-3">
            <li className="mb-3">
              <a href="#about">About</a>
            </li>
            <li className="mb-3">
              <a href="#projects">Project</a>
            </li>
            <li className="mb-3">
              <a href="#experience">Experience</a>
            </li>
            <li className="mb-3">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5 p-[10px]">
          <h3 className="w-fit mb-6 relative font-bold text-lg">Socials</h3>
          <ul className="list-none mb-3">
            <li className="mb-3">
              <a href="">Instagram</a>
            </li>
            <li className="mb-3">
              <a href="">LinkedIn</a>
            </li>
            <li className="mb-3">
              <a href="">Github</a>
            </li>
            <li className="mb-3">
              <a href="">WhatsApp</a>
            </li>
            <li className="mb-3">
              <a href="">Line</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5 p-[10px]">
          <h3 className="w-fit mb-6 relative font-bold text-lg">
            Reach me Through E-Mail!
          </h3>
          <form className="w-fit">
            <div className="p-2 border-b-[1px] border-white font-bold flex items-center gap-4">
              <BsEnvelopePaper />
              <input
                type="Email"
                placeholder="Enter your Email."
                className="focus:outline-none"
              />
            </div>
            <div className="p-2 border-b-[1px] border-white font-bold flex items-center gap-4">
              <TiMessages />
              <input
                type="text"
                placeholder="Enter your Messages."
                className="focus:outline-none"
              />
            </div>
            <button className="w-full mt-4 border-white border-[1px] p-2 hover:text-black hover:bg-white transisi text-base font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="w-11/12 border-white my-4 mx-auto" />
      <p className="text-center text-lg">
        Julio Syah Putra ©️ 2024 - All Rights Reserved
      </p>
    </footer>
  );
}
