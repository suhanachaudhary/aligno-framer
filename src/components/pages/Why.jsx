

import { FaCheck, FaTimes } from "react-icons/fa";
import { FaTasks, FaUsers, FaChartBar, FaRegClock } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TestimonialSection from "./TestimonialSection";

const alignoFeatures = [
  "Real-time global collaboration",
  "Fully customizable & scalable",
  "Advanced sprint management",
  "Built-in advanced analytics",
  "Built-in advanced analytics",
];

const otherToolDrawbacks = [
  "Delayed syncing or integrations",
  "Limited customization",
  "Lacks dedicated sprint tools",
  "Requires external add-ons",
  "Complicated onboarding",
];

export default function Why() {

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    controls.start({ y: [50, 0], opacity: [0, 1] });
  }, [controls]);

  return (
    <>
      <section className="py-16 px-4 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose <span className="italic text-white/80">Corazor?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          An immediate contrast of Corazor’s functionalities against other project
          coordination utilities. Discover why we excel.
        </p>

        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-1 bg-[#1c1c1c] rounded-xl shadow-md-[#633112]" style={{ boxShadow: "0 4px 6px -1px #093FB4, 0 2px 4px -2px #093FB4" }}>
            <div className="bg-white text-black p-1 rounded-md text-sm font-bold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
            </div>
            <span className="text-blue-400 font-medium text-xl">Corazor</span>
          </div>
          <span className="text-white font-semibold text-xl text-center ml-[25%]">Other tools</span>
        </div>

        <div className="grid md:grid-cols-2 max-w-5xl mx-auto bg-[#1a1a1a] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_0_40px_rgba(255,115,0,0.1)]" >

          <div className="rounded-xl p-6 bg-gradient-to-tr from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg border border-[#2b2b2b] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            {alignoFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 py-3 border-b border-neutral-700">
                <FaCheck className="text-white-400" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-6 bg-gradient-to-tl from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg border border-[#2b2b2b] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            {otherToolDrawbacks.map((drawback, idx) => (
              <div key={idx} className="flex items-center gap-3 py-3 border-b border-neutral-700">
                <FaTimes className="text-white-400" />
                <span className="text-sm">{drawback}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-10 bg-black text-white text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            How <i className="font-serif">Corazor</i> <span className="font-extrabold">helps you</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-xl mx-auto">
            Corazor offers ready-made solutions to get you going fast. Easily customize as your team’s needs expand.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">

          {/* Feature 1 */}
          <div className="rounded-xl p-6 bg-gradient-to-tr from-[#093FB4]/40 to-black border border-[#2b2b2b] shadow-[ -6px_-6px_20px_rgba(255,255,255,0.1) ] hover:shadow-[ -10px_-10px_25px_rgba(255,255,255,0.2) ] transition-all">
            <div className="flex justify-center items-center mb-4 text-[#0D5EA6]">
              {/* <FaTasks size={32} /> */}
              <motion.div
                animate={{
                  x: [0, 5, 0], // horizontal tick
                  rotate: [0, 0, 10],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                <FaTasks size={32} />
              </motion.div>
            </div>
            <h3 className="text-xl mb-2 text-white">
              <i>Effortless</i> <strong>Task Management</strong>
            </h3>
            <p className="text-sm text-gray-400">
              Keep all your tasks organized and visible in one place. Corazor helps you assign, track, and prioritize tasks easily, ensuring nothing falls through the cracks.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-xl p-6 bg-gradient-to-tr to-black border border-[#2b2b2b] shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center items-center mb-4 text-[#A45EE5]">
              {/* <FaUsers size={32} /> */}
              <motion.div
                animate={{
                  y: [0, 5, 0], // horizontal tick
                  rotate: [0, 0, 15],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                <FaUsers size={32} />
              </motion.div>
            </div>
            <h3 className="text-xl mb-2 text-white">
              <i>Seamless</i> <strong>Team Collaboration</strong>
            </h3>
            <p className="text-sm text-gray-400">
              Work together with your team in real time, no matter where they are. Corazor’s collaborative tools make it easy to communicate, share files, and keep everyone in sync.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-xl p-6 bg-gradient-to-tl from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg border border-[#2b2b2b] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <div className="flex justify-center items-center mb-4 text-[#4AD991]">
              {/* <FaChartBar size={32} /> */}
              <div className="flex items-end gap-1 h-10">
                {[60, 40, 80, 50].map((height, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: `${height}%` }}
                    animate={{ height: [`${height}%`, `${height + 20}%`, `${height}%`] }}
                    transition={{
                      duration: 1.8,
                      delay: idx * 0.4,   // stagger animation
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2 bg-[#fff] rounded"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl mb-2 text-white">
              <i>Comprehensive</i> <strong>Project Insights</strong>
            </h3>
            <p className="text-sm text-gray-400">
              Stay on top of your projects with advanced analytics and reporting. Corazor gives you the insights you need to make data-driven decisions and improve overall efficiency.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-xl p-6 bg-gradient-to-tr from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg border border-[#2b2b2b] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <div className="relative flex justify-center items-center mb-4 text-[#0D5EA6]">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                  ease: "linear"
                }}
              >
                <FaRegClock size={56} className="text-white" />
              </motion.div>
            </div>
            <h3 className="text-xl mb-2 text-white">
              Smart <i>Deadline</i> <strong>Tracking</strong>
            </h3>
            <p className="text-sm text-gray-400">
              Never miss a deadline again! Corazor automatically tracks due dates, sends timely reminders, and keeps your team on schedule with seamless progress updates.
            </p>
          </div>

        </div>
      </section>


      <div className="absolute top-[440%] right-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>

      <div className="absolute top-[640%] right-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>


      <div className="absolute top-[840%] left-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>

      <TestimonialSection />

    </>
  );
}
