import React from "react";

export default function ServiceCard({ img, title, index }) {
  return (
    <div className="w-full lg:w-1/4 bg-[#333333] flex flex-col gap-8 items-center justify-center text-white my-0 lg:my-12 rounded-2xl py-8 shadow-2xl transisi hover:-translate-y-4">
      <img src={img} className="w-72 h-40 object-contain" alt={title} />
      <p className="text-[#9999a1] text-[18px] font-bold text-center">
        {title}
      </p>
    </div>
  );
}
