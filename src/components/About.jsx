import ServiceCard from "./ui/ServiceCard";
import fe from "../assets/fe.png";
import gcloud from "../assets/gcloud.png";
import backend from "../assets/backend.png";
import figma from "../assets/figma.png";

export default function About() {
  const services = [
    { img: fe, title: "Frontend Developer" },
    { img: gcloud, title: "Cloud Engineer" },
    { img: backend, title: "Junior Backend Developer" },
    { img: figma, title: "UI/UX Designer" },
  ];

  return (
    <>
      <div className="global-container">
        <p
          id="about"
          className="sm:text-lg text-base text-[#9999a1] uppercase tracking-wider font-semibold font-poppins"
        >
          Introduction
        </p>
        <p className="text-[#1f1f1f] font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Overview.
        </p>
        <p className="my-4 lg:mt-4 text-[#9999a1] text-[18px] max-w-3xl leading-[30px]">
          {" "}
          As a sixth-semester student, my passion for front-end development
          focuses on using React and Next.js to build responsive and dynamic
          user interfaces. I'm committed to continuously updating my skills with
          the latest technologies, ensuring that I can create efficient,
          user-friendly web applications. This dedication to learning and
          development allows me to effectively enhance user engagement and
          interaction across digital platforms.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} img={service.img} title={service.title} />
          ))}
        </div>
      </div>
    </>
  );
}
