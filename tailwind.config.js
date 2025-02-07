/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #1f1f1f",
        cardLight: "0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec",
      },
      backgroundImage: {
        about:
          "linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)",
        experience:
          "linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%)",
        experienceLight:
          "linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)",
        hero: "linear-gradient(135deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,0.95) 60%)",
        "hero-mobile":
          "linear-gradient(137deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,1) 60%)",
        tech: "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%)",
      },
      fontFamily: {
        arenq: ["Arenq"],
        beckman: ["Beckman"],
        wasabi: ["Staatliches"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
