import React from "react";
import SkillsBall from "./ui/SkillsBall";
import css from "../assets/skills/css3.png";
import figma from "../assets/skills/figma.png";
import git from "../assets/skills/git.png";
import gcloud from "../assets/skills/gcloud.png";
import reactjs from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import next from "../assets/skills/next.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import typescript from "../assets/skills/typescript.png";
import node from "../assets/skills/node.png";
import rquery from "../assets/skills/react-query.png";
import btrap from "../assets/skills/bootstrap.png";
import python from "../assets/skills/python.png";

export default function Skills() {
  const techStacks = [
    { img: html, title: "HTML5" },
    { img: css, title: "CSS3" },
    { img: javascript, title: "Javascript" },
    { img: typescript, title: "Typescript" },
    { img: btrap, title: "Bootstrap" },
    { img: figma, title: "figma" },
    { img: git, title: "git" },
    { img: gcloud, title: "Cloud" },
    { img: reactjs, title: "React" },
    { img: tailwind, title: "Tailwind CSS" },
    { img: rquery, title: "React Query" },
    { img: node, title: "Node" },
    { img: python, title: "Python" },
    { img: next, title: "Next JS" },
  ];
  return (
    <div className="global-container">
      <p className="sm:text-[18px] text-[16px] text-[#9999a1] uppercase tracking-wider font-semibold font-poppins">
        Technologies
      </p>
      <p className="text-[#d4d4d8] font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
        My Skills.
      </p>
      <div className="flex flex-wrap justify-center gap-x-10 mt-14 gap-y-16">
        {techStacks.map((techStack, index) => (
          <div className="flex justify-center">
            <SkillsBall
              key={index}
              img={techStack.img}
              title={techStack.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
