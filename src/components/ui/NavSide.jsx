import React from "react";
import { MdClose } from "react-icons/md";

export default function NavSide({
  toggle,
  setToggle,
  navLinks,
  active,
  setActive,
}) {
  return (
    <>
      <div
        className={`p-6 bg-[#f4f4f6] opacity-[0.98] absolute 
      top-0 right-0 w-8/12 h-[100vh] z-10 menu ${
        toggle ? "menu-open" : "menu-close"
      }`}
      >
        <div className="flex justify-end">
          <MdClose
            className="text-4xl text-black"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <ul className="list-none flex flex-col gap-[1rem] items-start justify-end mt-[2rem] ">
          {navLinks.map((nav) => (
            <li
              id={nav.id}
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#b5b5ba]" : "text-[#1f1f1f]"
              } text-[36px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
