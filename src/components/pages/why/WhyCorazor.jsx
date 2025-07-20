
import { Link } from "react-router-dom"
import FounderTrust from "./FounderTrust"
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
    {
        quote:
            "Corazor didn't just build my app—they acted like a true tech co-founder. Speed, clarity, and strategy, all in one.",
        name: "Arjun Mehta",
        role: "SaaS Founder",
    },
    {
        quote:
            "The team helped us launch our MVP in under 30 days. Their product insights were as valuable as their code.",
        name: "Niharika Singh",
        role: "HealthTech Founder",
    },
    {
        quote:
            "Real-time communication, no fluff. They delivered what three previous vendors couldn't.",
        name: "Jay Patel",
        role: "Fintech CEO",
    },
    {
        quote:
            "We went from Figma to production in weeks. Corazor is a game changer for non-technical founders.",
        name: "Sophia D'Souza",
        role: "EdTech Entrepreneur",
    },
    {
        quote:
            "What impressed me most was their founder mindset. They think like stakeholders, not service providers.",
        name: "Varun Chopra",
        role: "Logistics Startup Founder",
    },
];

const repeatedData = [...reviews, ...reviews];

function WhyCorazor() {

    return (
        <div className="min-h-screen">
            <section className="relative pt-50 pb-16 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-1"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#093FB4] opacity-20 blur-[150px] z-1"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    We Speak <span className="text-blue-500">Code</span>. But Think Like <span className="text-pink-400">Founders</span>.
                </h1>
                <p className="text-lg max-w-2xl mt-4 text-gray-300">Corazor is built for creators, disruptors, and doers. We don't just build apps — we build your competitive edge.</p>

                {/* Floating particles */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 animate-pulse">
                    {/* Add floating particles using canvas or particle.js */}
                </div>
            </section>

            <section className="py-10 bg-black text-white px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    What Sets Us Apart
                </h2>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-10">
                    {[
                        {
                            title: "Strategy Before Syntax",
                            description:
                                "We begin with your vision, prioritize clarity over code, and validate direction before writing a single line.",
                        },
                        {
                            title: "Transparent Deliverables",
                            description:
                                "Every sprint includes demoable progress, shared roadmaps, and real-time collaboration. No guesswork, just results.",
                        },
                        {
                            title: "MVP to IPO Readiness",
                            description:
                                "We scale with your startup — from first prototype to investment-ready infrastructure and polished UX.",
                        },
                        {
                            title: "Real-Time Collaboration",
                            description:
                                "Talk to builders, not intermediaries. Our team works live with you in Slack, Notion, and code.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="group perspective">
                            <div className="card-inner w-full h-40">
                                {/* Front Side */}
                                <div className="card-front shadow-lg text-white text-2xl font-semibold text-center">
                                    {item.title}
                                </div>

                                {/* Back Side */}
                                <div className="card-back shadow-inner text-white text-[16px] text-center">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-black text-white pt-20 px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Founders Trust Corazor</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-2">🚀 Metrics</h3>
                        <p className="text-[16px] text-gray-300">95% of our MVPs get customer validation within 30 days.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-2">🎙️ Founder Interviews</h3>
                        <p className="text-[16px] text-gray-300">Listen to how founders like you scaled with Corazor.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-2">🌟 Testimonials</h3>
                        <p className="text-[16px] text-gray-300">“Corazor feels more like a co-founder than a vendor.”</p>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-20 px-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
                    {[
                        { label: "MVPs Launched", value: "120+" },
                        { label: "Avg Delivery Time", value: "21 Days" },
                        { label: "Retention Rate", value: "98%" },
                        { label: "Repeat Clients", value: "87%" },
                    ].map((item, index) => (
                        <div key={index} className="hover:scale-105 transition duration-300">
                            <h3 className="text-5xl font-bold text-blue-500">{item.value}</h3>
                            <p className="text-gray-400 text-xl">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
            <FounderTrust />

            <section id="who" className="bg-black pb-20 pt-6+ md:px-6">
                <h2 id="who" className="text-4xl md:text-5xl font-bold text-center text-[#fff] mb-12">
                    What Founders Say
                </h2>

                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex animate-scroll-left gap-8 w-[200%]"
                        style={{
                            animation: "scroll-left 15s linear infinite",
                        }}
                    >
                        {repeatedData.map((review, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-72 bg-gray-300 rounded-2xl p-6 shadow-md transform transition-all duration-500 "
                            >
                                <div className="">
                                    “{review.quote}”
                                </div>
                                <h3 className="text-xl font-semibold text-center text-[#WCAGAA] mb-2 hover:text-gray-600 transition">
                                    – {review.name}, {review.role}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
export default WhyCorazor