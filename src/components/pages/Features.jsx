
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeatureSection from "./FeatureSection";

const Features = () => {

  const generateDots = (count) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      // Generate random spherical coordinates
      const phi = Math.random() * Math.PI * 2; // longitude
      const theta = Math.random() * Math.PI; // latitude

      // Convert to cartesian coordinates for positioning
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta);

      // Only show dots on the front hemisphere (z > 0)
      if (z > -0.3) {
        dots.push({
          id: i,
          x: x * 120 + 120, // Scale and center
          y: y * 120 + 120,
          z: z,
          size: Math.random() * 3 + 1,
          opacity: (z + 1) * 0.5, // Fade dots based on depth
          animationDelay: Math.random() * 4
        });
      }
    }
    return dots;
  };

  const dots = generateDots(150);


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const color = useTransform(scrollYProgress, [0, 1], ["#707070", "#ffffff"]);

  const AnimatedText = ({ text }) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        style={{ color, transitionDelay: `${index * 0.10}s` }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section className="bg-black text-white px-4 py-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="absolute top-[240%] right-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>
        <h2 className="text-4xl md:text-5xl font-light italic">
          Save <span className="font-semibold not-italic">time</span> and <span className="font-semibold not-italic">get more<br></br> done</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Elevate your productivity. Manage tasks effortlessly by organizing<br></br> and visualizing everything in one central hub.
        </p>
      </div>


      <div className="absolute top-[300%] left-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>
      <FeatureSection />
      <div className="bg-black text-white py-2 px-4 text-center" style={{ marginTop: "-140px" }}>

        <div ref={ref} className="text-3xl md:text-5xl font-medium leading-snug">
          <div className="flex flex-wrap justify-center items-center">
            {AnimatedText({ text: "Take the first step towards" })}
            <span className="bg-gradient-to-r from-[#0D5EA6] to-[#9a5b47] text-[#f0c3b2] px-4 rounded-full inline-flex items-center gap-2 mx-2">
              😇
            </span>
            <span className="text-[#0D5EA6] font-semibold ml-2">stress-free</span>
          </div>

          <div className="flex flex-wrap justify-center items-center mt-2">
            {AnimatedText({ text: "project management with" })}
            <span className="text-[#0D5EA6] font-semibold ml-2">Corazor</span>
            <span className="bg-gradient-to-r from-[#0D5EA6] to-[#9a5b47] text-[#f0c3b2] px-4 rounded-full inline-flex items-center gap-2 mx-2">
              👋
            </span>
          </div>

          <div className="mt-2">{AnimatedText({ text: "Simplify tasks, boost productivity" })}</div>
        </div>

        {/* <h2 className="text-3xl md:text-5xl font-medium leading-snug">
            Take the first step towards{" "}
            <span className="bg-gradient-to-r from-[#0D5EA6] to-[#9a5b47] text-[#f0c3b2] px-6 rounded-full inline-flex items-center gap-2 mx-1">
              😇
            </span><span className="text-[#0D5EA6]">stress-free</span>
            <br />
            project management with
            <span className="text-[#0D5EA6]"> Corazor</span>
            <span className="bg-gradient-to-r from-[#0D5EA6] to-[#9a5b47] text-[#f0c3b2] px-6 rounded-full inline-flex items-center gap-2 mx-1">
              👋
            </span>
            <br />
            <span className="text-white">Simplify tasks, boost productivity</span>
          </h2> */}

        <button className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-[#0D5EA6] to-[#093FB4] border border-[#d4a78d] text-white font-medium shadow-xl hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>


    </section>
  );
};

export default Features;
