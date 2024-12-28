import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export default function ProjectsCard({ id, name, image, demo, index }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="project-card-container"
      onClick={() => window.open(demo, "_blank")}
    >
      <div className="absolute top-0 left-0 z-10 bg-[#333333] hover:bg-[#6d6d74] transisi h-full w-full opacity-[0.5] rounded-[24px]"></div>
      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <div className="flex items-center justify-start pr-[4.5rem]">
        <h3 className="project-card-titles">{name}</h3>
      </div>
    </motion.div>
  );
}
