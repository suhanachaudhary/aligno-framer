

import { FaCheck, FaTimes } from "react-icons/fa";
import { FaTasks, FaUsers, FaChartBar, FaRegClock } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


const testimonials = [
  {
    name: "David Foster",
    company: "NextGen Solutions",
    feedback:
      "The advanced analytics have given us better insight into project performance than ever",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Samantha Lee",
    company: "BrightStart Studios",
    feedback:
      "Aligno's customizable features made it the perfect fit for our growing business.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Olivia Turner",
    company: "DesignHub",
    feedback:
      "Aligno's user-friendly interface helped our team get started quickly, no learning curve!",
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Jonathan Reed",
    company: "TechWorks",
    feedback:
      "Aligno has simplified project management for us—everything we need in one place!",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Michael Davis",
    company: "CreativeCrew",
    feedback:
      "The real-time collaboration feature has transformed the way we work globally.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Liam Cooper",
    company: "InnovateX",
    feedback:
      "Aligno's sprint management tools made tracking our progress effortless!",
    avatar: "https://i.pravatar.cc/150?img=29",
  },
  {
    name: "Emma James",
    company: "GrowthX",
    feedback:
      "Our productivity has skyrocketed since switching to Aligno!",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    name: "Rachel Kim",
    company: "WorkflowPro",
    feedback:
      "We love how easy it is to customize Aligno for our specific needs.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "David Foster",
    company: "NextGen Solutions",
    feedback:
      "The advanced analytics have given us better insight into project performance than ever",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Samantha Lee",
    company: "BrightStart Studios",
    feedback:
      "Aligno's customizable features made it the perfect fit for our growing business.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Olivia Turner",
    company: "DesignHub",
    feedback:
      "Aligno's user-friendly interface helped our team get started quickly, no learning curve!",
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Jonathan Reed",
    company: "TechWorks",
    feedback:
      "Aligno has simplified project management for us—everything we need in one place!",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

const features = [
  {
    icon: <FaTasks size={32} />,
    title: (
      <>
        <i>Effortless</i> <strong>Task Management</strong>
      </>
    ),
    desc:
      "Keep all your tasks organized and visible in one place. Aligno helps you assign, track, and prioritize tasks easily, ensuring nothing falls through the cracks.",
  },
  {
    icon: <FaUsers size={32} />,
    title: (
      <>
        <i>Seamless</i> <strong>Team Collaboration</strong>
      </>
    ),
    desc:
      "Work together with your team in real time, no matter where they are. Aligno’s collaborative tools make it easy to communicate, share files, and keep everyone in sync.",
  },
  {
    icon: <FaChartBar size={32} />,
    title: (
      <>
        <i>Comprehensive</i> <strong>Project Insights</strong>
      </>
    ),
    desc:
      "Stay on top of your projects with advanced analytics and reporting. Aligno gives you the insights you need to make data-driven decisions and improve overall efficiency.",
  },
  {
    icon: <FaRegClock size={32} />,
    title: (
      <>
        Smart <i>Deadline</i> <strong>Tracking</strong>
      </>
    ),
    desc:
      "Never miss a deadline again! Aligno automatically tracks due dates, sends timely reminders, and keeps your team on schedule with seamless progress updates.",
  },
];

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
        
            <div className="bg-gradient-to-t from-[#093FB4] via-black to-transparent p-6">
            {alignoFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 py-3 border-b border-neutral-700">
                <FaCheck className="text-white-400" />
                <span className="text-sm">{feature}</span>
                </div>
            ))}
            </div>

            <div className="bg-gradient-to-t from-[#1a1a1a] via-black to-[#093FB4] p-6 border-l border-neutral-800">
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
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="rounded-xl p-6 bg-gradient-to-tr from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg border border-[#2b2b2b] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                    <div className="flex justify-center items-center mb-4 text-white">{feature.icon}</div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
                ))}
            </div>
        </section>


        <div className="absolute top-[440%] right-0 w-[500px] h-[300px] bg-[#b7754c] opacity-20 blur-[120px] z-0"></div>

        <div className="absolute top-[640%] right-0 w-[500px] h-[300px] bg-[#b7754c] opacity-20 blur-[120px] z-0"></div>


        <div className="absolute top-[840%] left-0 w-[500px] h-[300px] bg-[#b7754c] opacity-20 blur-[120px] z-0"></div>

        <section className="py-10 bg-black text-white relative overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold">
                People Can't Stop <em className="italic text-white">Talking</em>
                </h2>
                <h3 className="text-3xl font-semibold">About Us</h3>
            </div>

            <div className="relative h-[500px] overflow-hidden">
            <div className="animate-scroll-up space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 max-w-5xl mx-auto">
                {testimonials.map((t, idx) => (
                <motion.div
                    key={idx}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 relative shadow-[0_0_40px_#093FB4]"
                >
                    <p className="mb-4 text-gray-300">{t.feedback}</p>
                    <div className="flex items-center gap-3">
                    <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full border border-gray-600"
                    />
                    <div>
                        <p className="font-bold text-white leading-none">{t.name}</p>
                        <p className="text-xs text-gray-400 leading-none">
                        {t.company}
                        </p>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none z-10" />
        </section>

    </>    
  );
}
