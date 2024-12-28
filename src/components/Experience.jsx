import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { SectionWrapper } from "../hoc";
import ExperienceCard from "./ui/ExperienceCard";
import bem from "../assets/experience/bem.png";
import kominfo from "../assets/experience/kominfo.png";
import digistar from "../assets/experience/digistar.png";
import bangkit from "../assets/experience/bangkit.png";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const experiences = [
    {
      title: "Staff of Relation Department",
      company_name: "BEM KM FASILKOM USNRI",
      icon: bem,
      iconBg: "#ffffff",
      date: "Jan 2024",
    },
    {
      title: "FrontEnd, Internship",
      company_name: "DISKOMINFO Palembang",
      icon: kominfo,
      iconBg: "#ffffff",
      date: "Jun 2024 - Aug 2024",
    },
    {
      title: "HACKER: Front End",
      company_name: "Digistar Club By Telkom Indonesia",
      icon: digistar,
      iconBg: "#ffffff",
      date: "Aug 2024 - Oct 2024",
    },
    {
      title: "Cloud Computing Cohort",
      company_name:
        "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
      icon: bangkit,
      iconBg: "#ffffff",
      date: "Sep 2024 - Present",
    },
  ];
  return (
    <>
      <p className="experience-subtext">What I've done so far</p>
      <h2 className="experience-headtext">Experience.</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "experience");
