import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#eaeaec",
        color: "#292929",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      date={
        <div>
          <h3 className="text-[#232631] lg:text-white tracking-wide text-[18px] font-bold font-beckman">
            {experience.date}
          </h3>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#333333] text-[24px] font-bold font-beckman tracking-[2px]">
          {experience.title}
        </h3>
        <p
          className="text-[#9999a1] text-[22px] font-semibold font-wasabi tracking-[2px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
}
