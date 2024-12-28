import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import diskominfo from "../assets/projects/diskominfo.png";
import kasirkilat from "../assets/projects/kasirkilat.png";
import simak from "../assets/projects/simak.png";
import { fadeIn, staggerContainer } from "../utils/motion";
import ProjectsCard from "./ui/ProjectsCard";

function Projects() {
  const [active, setActive] = useState("project-2");

  const projects = [
    {
      name: "Diskominfo",
      image: diskominfo,
      demo: "https://diskominfo.palembang.go.id/",
    },
    {
      name: "KasirKilat",
      image: kasirkilat,
      demo: "https://fe-kasirkilat.vercel.app/",
    },
    {
      name: "SIMAK",
      image: simak,
      demo: "https://simakunsri.manggalateam.com",
    },
  ];

  return (
    <div className="global-container">
      <p className="sm:text-[18px] text-[16px] text-[#9999a1] uppercase tracking-wider font-semibold font-poppins">
        Case Studies
      </p>
      <h2 className="text-[#d4d4d8] font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
        Projects.
      </h2>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#9999a1] text-[18px] max-w-3xl leading-[30px]"
        >
          The projects displayed below represent a selection of my work that is
          currently hosted and deployed. As I continue to learn and develop my
          skills, the list of projects will expand, showcasing an evolving
          portfolio of my technical capabilities.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`lg:w-[80%] w-[100%] mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row lg:justify-center flex-col min-h-[50vh] gap-12 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectsCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Projects, "projects");
