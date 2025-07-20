
import { useState } from "react";
import { motion } from "framer-motion";
import studies from "./studies";
import CaseStudyModal from "./CaseStudyModal";

import Slider from "react-slick";
import { FaSmile, FaSchool, FaBookOpen, FaRocket, FaCommentDots } from "react-icons/fa";

const successStories = [
    {
        title: "Empowering Rural Schools",
        description:
            "Our platform helped provide essential learning materials to 500+ rural schools, enhancing student engagement and performance.",
        icon: <FaSchool className="text-white text-xl" />,
    },
    {
        title: "AI-Powered Need Identification",
        description:
            "Using AI, we identified underprivileged schools in remote regions and ensured accurate distribution of resources.",
        icon: <FaRocket className="text-white text-xl" />,
    },
    {
        title: "Real-Time Feedback Transformation",
        description:
            "Collected actionable feedback from over 200 schools, helping us fine-tune future donation efforts with precision.",
        icon: <FaCommentDots className="text-white text-xl" />,
    },
    {
        title: "Volunteer-Driven Change",
        description:
            "With a network of 1000+ volunteers, we ensured seamless delivery and follow-up at each stage of the initiative.",
        icon: <FaSmile className="text-white text-xl" />,
    },
    {
        title: "Boosting Literacy in Remote Areas",
        description:
            "Delivered over 10,000 books to tribal and mountainous areas, directly impacting early literacy levels.",
        icon: <FaBookOpen className="text-white text-xl" />,
    },
];


const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
        },
    ],
};

const CaseStudies = () => {
    const [activeStudy, setActiveStudy] = useState(null);

    return (
        <section className="w-full py-20 px-6 bg-[#0f0f0f] text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl mt-10 font-bold mb-12 text-center">
                    Proof, not promises.
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {studies.map((study, index) => {
                        const Logo = study.logo;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] shadow-xl rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
                                onClick={() => setActiveStudy(study)}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <Logo className="text-4xl text-blue-400" />
                                    <h2 className="text-2xl font-semibold">{study.client}</h2>
                                </div>

                                <p className="text-green-400 text-xl font-medium mb-2">{study.resultSnippet}</p>

                                <div className="text-sm text-gray-300 text-[16px] space-y-2 mt-2">
                                    <p><span className="font-bold text-white">Challenge:</span> {study.challenge}</p>
                                    <p><span className="font-bold text-white">Strategy:</span> {study.strategy}</p>
                                    <p><span className="font-bold text-white">Outcome:</span> {study.outcome}</p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-xl font-semibold text-white mb-1">Tech Used:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tech.map((t, idx) => (
                                            <span key={idx} className="bg-blue-900 text-blue-300 text-[16px] px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {activeStudy && (
                    <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
                )}
            </div>

            <div className="text-center md:px-20 px-6 mt-30 mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-10 text-white">Our Success Stories</h2>
                <div className="max-w-8xl mx-auto">
                    <Slider {...sliderSettings}>
                        {successStories.map((story, index) => (
                            <div key={index} className="px-4 w-full box-border h-[300px]">
                                <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform h-full flex flex-col">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 mb-4 bg-gray-100 rounded-full flex items-center justify-center mx-auto transition">
                                        <div className="bg-blue-600 p-3 rounded-full shadow group-hover:scale-110 transition-transform">
                                            {story.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-[#2D3748] text-center mb-2 transition">
                                        {story.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[16px] text-gray-600 text-center group-hover:text-gray-700 transition flex-grow">
                                        {story.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold text-gray-400 mb-4">
                    Want to build something impactful?
                </h3>
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                    Let’s Talk
                </a>
            </div>

        </section>
    );
};

export default CaseStudies;
