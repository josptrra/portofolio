import React from "react";

export default function SkillsBall({ img, title }) {
  return (
    <div className="text-center w-[90px] h-[90px] text- ">
      <div className="w-full h-full rounded-full bg-[#9999a1] flex items-center justify-center">
        <div className="">
          <img src={img} alt={title} className="w-[45px] h-[45px]" />
        </div>
      </div>
      <p className="pt-2 text-[10px] md:text-[14px] text-[#9999a1] uppercase font-bold font-poppins">
        {title}
      </p>
    </div>
  );
}
