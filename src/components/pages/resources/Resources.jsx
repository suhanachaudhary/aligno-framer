
import React from "react";
import { FaTools, FaBlog, FaCalendarAlt, FaRobot, FaFileAlt, FaComments } from "react-icons/fa";

const blogs = [
    {
        title: "How AI is Reshaping Startups",
        description: "Explore the impact of artificial intelligence on modern startup ecosystems.",
        date: "July 12, 2025",
        link: "#",
    },
    {
        title: "Top 5 UI/UX Trends for 2025",
        description: "Design trends that are revolutionizing product experience this year.",
        date: "July 5, 2025",
        link: "#",
    },
    {
        title: "Startup Pitching Secrets",
        description: "Craft winning pitch decks that get investor attention.",
        date: "June 28, 2025",
        link: "#",
    },
];

const tools = [
    {
        icon: <FaRobot className="text-white text-2xl" />,
        title: "AI Resume Grader",
        description: "Get instant feedback on your resume with AI-powered analysis.",
        link: "#",
    },
    {
        icon: <FaComments className="text-white text-2xl" />,
        title: "Chatbot Generator",
        description: "Create simple chatbots for your site in minutes.",
        link: "#",
    },
    {
        icon: <FaFileAlt className="text-white text-2xl" />,
        title: "Pitch Deck Template",
        description: "Download our proven pitch deck template used by top startups.",
        link: "#",
    },
];

const events = [
    {
        title: "Community AMA with YC Founders",
        date: "Aug 3, 2025",
        type: "AMA",
        link: "#",
    },
    {
        title: "Webinar: Scaling with Microservices",
        date: "Aug 15, 2025",
        type: "Webinar",
        link: "#",
    },
    {
        title: "Guest Talk: Growth Hacking in 2025",
        date: "Sep 1, 2025",
        type: "Guest Talk",
        link: "#",
    },
];

const Resources = () => {
    return (
        <div className="relative px-6 md:px-20 py-16 bg-black text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#093FB4] opacity-20 blur-[150px] z-1"></div>
            <div className="text-center mb-12">
                <h1 className="md:text-5xl text-4xl font-bold mb-4 mt-20">Resources</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Stay ahead with our blogs, tools, and events crafted to empower startups and builders.
                </p>
            </div>


            <div className="absolute top-[40%] right-[50%] w-[400px] h-[300px] bg-[#093FB4] opacity-20 blur-[150px] z-1"></div>
            {/* Blog Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                    <FaBlog className="text-blue-400" /> Latest Blog Posts
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white text-gray-800 rounded-xl p-6 hover:shadow-xl transition">
                            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
                            <p className="mb-4">{blog.description}</p>
                            <a href={blog.link} className="text-blue-600 font-semibold hover:underline">
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Free Tools */}
            <section className="mb-20">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                    <FaTools className="text-green-400" /> Free Tools
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-white text-gray-800 rounded-xl p-6 hover:shadow-xl transition">
                            <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                            <p className="mb-4">{tool.description}</p>
                            <a href={tool.link} className="text-blue-600 font-semibold hover:underline">
                                Try it →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events */}
            <section>
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                    <FaCalendarAlt className="text-yellow-400" /> Upcoming Events
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white text-gray-800 rounded-xl p-6 hover:shadow-xl transition">
                            <p className="text-sm text-blue-600 font-semibold mb-1">{event.type}</p>
                            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.date}</p>
                            <a href={event.link} className="text-blue-600 font-semibold hover:underline">
                                Register →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resources;
