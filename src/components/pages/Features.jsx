
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Global Collaboration",
    desc: "Collaborate seamlessly with teams across the globe. Stay connected and work together in real time, no matter where you are.",
    img: "/images/globe.webp",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    title: "Advance Analytics",
    desc: "Unlock valuable insights into project performance, helping you make data-driven decisions with ease.",
    img: "/images/chart.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Seamless Integrations with Your Favorite Tools",
    desc: "Connect Corazor with your favorite tools to streamline workflows and boost productivity.",
    img: "/images/calendar.jpeg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Sprint Planning Made Simple",
    desc: "Organize and execute your work in short, focused sprints. Track progress, set goals, and deliver.",
    img: "/images/light.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
];

const Features = () => {
  return (
    <section className="bg-black text-white px-4 py-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="absolute top-[240%] right-0 w-[500px] h-[300px] bg-[#0D5EA6] opacity-20 blur-[120px] z-0"></div>
        <h2 className="text-4xl md:text-5xl font-light italic">
          Save <span className="font-semibold not-italic">time</span> and <span className="font-semibold not-italic">get more<br></br> done</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Elevate your productivity. Manage tasks effortlessly by organizing<br></br> and visualizing everything in one central hub.
        </p>
      </div>
      

      <div className="absolute top-[300%] left-0 w-[500px] h-[300px] bg-[#0D5EA6] opacity-20 blur-[120px] z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 ml-[26%] w-1/2">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`bg-[#1a1a1a] border border-[#333] p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 ${feature.colSpan || ""} ${feature.rowSpan || ""}`}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{feature.desc}</p>
              <img
                src={feature.img}
                alt={feature.title}
                className={`w-full object-contain rounded-lg ${
                  idx === 0 ? "h-36 animate-pulse" : "h-32"
                }`}
              />
            </motion.div>
          ))}
        </div>
        <div className="bg-black text-white py-2 px-4 text-center" style={{marginTop:"40px"}}>
          <h2 className="text-3xl md:text-5xl font-medium leading-snug">
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
          </h2>

          <button className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-[#0D5EA6] to-[#093FB4] border border-[#d4a78d] text-white font-medium shadow-xl hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>


    </section>
  );
};

export default Features;
