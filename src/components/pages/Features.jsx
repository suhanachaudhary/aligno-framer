
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const features = [
  {
    title: "Real-Time Global Collaboration",
    desc: "Collaborate seamlessly with teams across the globe. Stay connected and work together in real time, no matter where you are.",
    img: "/images/globe11.png",
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
        <div className="absolute top-[240%] right-0 w-[500px] h-[300px] bg-[#0D5EA6] opacity-20 blur-[120px] z-0"></div>
        <h2 className="text-4xl md:text-5xl font-light italic">
          Save <span className="font-semibold not-italic">time</span> and <span className="font-semibold not-italic">get more<br></br> done</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Elevate your productivity. Manage tasks effortlessly by organizing<br></br> and visualizing everything in one central hub.
        </p>
      </div>
      

      <div className="absolute top-[300%] left-0 w-[500px] h-[300px] bg-[#0D5EA6] opacity-20 blur-[120px] z-0"></div>


      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 ml-[22%] w-1/2"
      style={{position:"relative"}}>

      {/* Feature 1 */}
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] h-[300px] col-span-2 p-4 rounded-2xl border border-[#333] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
    >
      <h3 className="text-lg font-semibold mb-2">Real-Time Global Collaboration</h3>
      <p className="text-gray-400 text-sm">
        Collaborate seamlessly with teams across the globe. <br></br>Stay connected and work together in real time, no matter where you are.
      </p>

      <motion.img
        src="/images/globe11.png"
        alt="Real-Time Global Collaboration"
        className="w-full h-66 object-contain rounded-lg"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }} style={{marginTop:"-40px"}}
      />
    </motion.div>

        {/* feature 2nd */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] h-[150px] w-[300px] row-span-1 p-4 rounded-xl border border-[#333] shadow-[0_0_15px_rgba(255,255,255,0.04)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4"
    >
      <img
        src="/images/analytics12.png"
        alt="Advance Analytics"
        className="h-20 w-20 object-contain rounded"
      />

      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold mb-1">Advance Analytics</h3>
        <p className="text-gray-400 text-xs">
          Unlock valuable insights into project performance.
        </p>
      </div>
    </motion.div>
        {/* feature 3rd */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] col-span-2 h-[150px] p-6 rounded-xl border border-[#444] shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] flex items-center gap-6"
      >
        <img
          src="/images/calendar1.png"
          alt="Seamless Integrations"
          className="h-24 w-24 object-contain rounded"
        />

        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-semibold mb-1">Seamless Integrations</h3>
          <p className="text-gray-400 text-xs">
            Connect Corazor with your favorite tools to streamline workflows and boost productivity.
          </p>
        </div>
      </motion.div>
      {/* Feature 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] h-[300px] w-[300px] self-start p-6 rounded-2xl border border-[#333] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        style={{position:"absolute",top:"28%",left:"68%"}}
      >
        <h3 className="text-lg font-semibold mb-2">Sprint Planning Made Simple</h3>
        <p className="text-gray-400 text-sm mb-4">
          Organize and execute your work in short, focused sprints. Track progress, set goals, and deliver.
        </p>
        <img
          src="/images/sprint.png"
          alt="Sprint Planning"
          className="w-full h-36 object-contain rounded"
        />
      </motion.div>

    </div>

      
      <div className="bg-black text-white py-2 px-4 text-center" style={{marginTop:"-30px"}}>

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
