import { useState } from "react";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo-black.png";
import React from "react";
import NavSide from "./ui/NavSide";

export default function Navbar() {
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
            />
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-[#b5b5ba]" : "text-[#1f1f1f]"
                } hover:text-[#9999a1] text-[21px] font-medium font-wasabi uppercase tracking-[3px] cursor-pointer nav-links`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
            {toggle ? (
              <NavSide
                toggle={toggle}
                setToggle={setToggle}
                navLinks={navLinks}
                active={active}
                setActive={setActive}
              />
            ) : (
              <MdMenu
                className="text-4xl text-black"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
