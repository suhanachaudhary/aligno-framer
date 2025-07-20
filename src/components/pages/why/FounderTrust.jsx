
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Rocket, Users2, Handshake } from "lucide-react";

const stats = [
    {
        title: "Founder-Led Vision",
        value: "100+",
        description: "Startups We’ve Co-Built",
        icon: Code,
        color: "from-purple-500 to-pink-500",
        details: ["MVP in <30 Days", "Product Strategy", "Agile Prototypes"],
    },
    {
        title: "Scalable Products",
        value: "250+",
        description: "Products Deployed",
        icon: Rocket,
        color: "from-blue-600 to-indigo-600",
        details: ["Cloud-Native", "DevOps Ready", "Performance Tuned"],
    },
    {
        title: "Global Clients",
        value: "50+",
        description: "Countries Served",
        icon: Users2,
        color: "from-cyan-500 to-blue-400",
        details: ["Real-Time Collaboration", "Time Zone Friendly", "End-to-End Delivery"],
    },
    {
        title: "Long-Term Partnerships",
        value: "95%",
        description: "Client Retention Rate",
        icon: Handshake,
        color: "from-emerald-500 to-green-400",
        details: ["Transparent Process", "Regular Syncs", "Feedback Loops"],
    },
];

export default function FounderTrust() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % stats.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const getTransformStyle = (index) => {
        const position = (index - activeIndex + stats.length) % stats.length;
        const adjusted = position <= stats.length / 2 ? position : position - stats.length;
        const rotation = adjusted * 15;
        const translateZ = -Math.abs(adjusted) * 80;
        const translateX = adjusted * 140;
        const scale = index === activeIndex ? 1.2 : 0.88;

        return {
            transform: `rotateY(${rotation}deg) translateZ(${translateZ}px) translateX(${translateX}px) scale(${scale})`,
            zIndex: stats.length - Math.abs(adjusted),
            opacity: index === activeIndex ? 1 : 0.5,
            filter: index === activeIndex ? 'drop-shadow(0 14px 40px rgba(0,255,255,0.3))' : 'grayscale(70%) blur(2px)',
            transition: 'all 0.8s ease-in-out',
        };
    };

    return (
        <section className="relative w-full py-20 bg-black overflow-hidden text-white">
            {/* Grid Overlay + Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(129,140,248,0.06),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />
            </div>

            <div className="relative container mx-auto px-4 max-w-7xl z-10">
                <div className="flex flex-col lg:flex-row items-start lg:gap-16 gap-10">
                    {/* Left Text Section */}
                    <div className="lg:w-5/12 mt-12 ml-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e1e2f] border border-gray-700 mb-6 animate-pulse shadow-sm">
                            <Sparkles className="w-4 h-4 text-cyan-400 animate-bounce" />
                            <span className="text-cyan-400 text-sm font-medium">Why Founders Trust Us</span>
                        </div>
                        <h2 className="text-[2.6rem] md:text-[5xl] font-extrabold leading-tight tracking-tight">
                            More Than Coders — We're Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Technical Co-Founders</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-md text-[1rem] leading-relaxed">
                            Our clients don’t just get code — they gain a product partner obsessed with execution, speed, and startup success.
                        </p>
                    </div>

                    {/* Right 3D Carousel */}
                    <div className="w-full md:w-11/12 lg:w-7/12 h-[500px] perspective-[1300px] relative overflow-x-hidden">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute w-[250px] min-h-[260px] p-1 rounded-[22px] bg-gradient-to-br from-cyan-500 via-blue-400 to-indigo-400 shadow-2xl hover:scale-[1.05]"
                                        style={getTransformStyle(index)}
                                    >
                                        <div className="w-full h-full p-6 rounded-[18px] bg-[#13131b] text-white shadow-inner border border-white/10 backdrop-blur-xl">
                                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-md`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-2xl font-black mb-1">{stat.value}</h4>
                                            <p className="text-sm font-semibold text-cyan-300 mb-0.5 uppercase tracking-wide">{stat.title}</p>
                                            <p className="text-sm text-gray-400 mb-4 leading-snug">{stat.description}</p>
                                            <ul className="space-y-1 text-sm text-gray-200">
                                                {stat.details.map((detail) => (
                                                    <li key={detail} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
