
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaCube } from "react-icons/fa";
import CardSwap, { Card } from './CardSwap'
import TechStack from "./TechStack";
const solutions = [
    { title: "Web Development", icon: <FaLaptopCode className="text-5xl text-blue-400" /> },
    { title: "App Development", icon: <FaMobileAlt className="text-5xl text-green-400" /> },
    { title: "AI Solutions", icon: <FaBrain className="text-5xl text-purple-400" /> },
    { title: "Blockchain", icon: <FaCube className="text-5xl text-yellow-400" /> },
];


export default function Solution() {
    return (
        <div className="bg-black pt-25 text-white min-h-screen">

            {/* Hero Section */}
            <section className="relative text-center px-6 py-20">
                <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="md:text-5xl text-4xl font-bold mb-6"
                >
                    Building the Future: One Solution at a <br></br>Time
                </motion.h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-400">
                    From Web to Blockchain — we transform ideas into powerful digital experiences.
                </p>

                <div className="mt-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center gap-4">
                                {item.icon}
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Problem Section */}
            <section className="bg-black text-gray-300 md:px-20 px-6">
                <h2 className="md:text-4xl text-3xl font-bold mb-8 text-white">Problems We Solve</h2>

                <ul className="space-y-4 max-w-3xl text-xl leading-relaxed">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-2xl text-center">•</span>
                        Slow and outdated web platforms
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-2xl">•</span>
                        Poor mobile experience and scalability
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-2xl">•</span>
                        Lack of AI integration for automation
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-2xl">•</span>
                        Unsecure blockchain implementations
                    </li>
                </ul>
            </section>



            <section className="relative bg-black text-white py-2 px-6 md:px-20">
                <div className="absolute top-[20%] right-0 w-[700px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>

                <div className="flex flex-col md:flex-row gap-10 items-center">

                    {/* LEFT - Text Description */}
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Our Approach
                        </h2>
                        <ul className="space-y-6 text-lg text-gray-300">
                            <li className="flex gap-4 items-start">
                                <span className="text-blue-400 text-2xl">🧠</span>
                                <span>
                                    <strong className="text-white text-xl">Strategy First:</strong> We start with understanding your business goals and user needs.
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-blue-400 text-2xl">⚙️</span>
                                <span>
                                    <strong className="text-white text-xl">Collaborative Design:</strong> Rapid prototyping with live feedback loops.
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-blue-400 text-2xl">💻</span>
                                <span>
                                    <strong className="text-white text-xl">Code & Iterate:</strong> Scalable architecture, agile sprints, test-driven dev.
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-blue-400 text-2xl">🚀</span>
                                <span>
                                    <strong className="text-white text-xl">Launch + Support:</strong> We deploy, monitor, and support post-launch like a true partner.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT - Animated Cards */}
                    <div className="md:w-1/2 w-full swap" style={{ height: '600px', position: 'relative' }}>
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={true}
                        >
                            <Card className="bg-[#0E2A47] rounded-xl shadow-2xl text-white p-8 flex flex-col justify-center items-center text-center">
                                <h3 className="text-3xl font-semibold mb-2">Discovery</h3>
                                <p className="text-xl text-gray-300">We dive into your business model, customers, and objectives.</p>
                            </Card>
                            <Card className="bg-[#123456] rounded-xl shadow-2xl text-white p-8 flex flex-col justify-center items-center text-center">
                                <h3 className="text-3xl font-semibold mb-2">Design</h3>
                                <p className="text-xl text-gray-300">Wireframes to high-fidelity UI aligned with user behavior.</p>
                            </Card>
                            <Card className="bg-[#1A3D5D] rounded-xl shadow-2xl text-white p-8 flex flex-col justify-center items-center text-center">
                                <h3 className="text-3xl font-semibold mb-2">Build</h3>
                                <p className="text-xl text-gray-300">Robust front-end & backend built with latest tech stack.</p>
                            </Card>
                            <Card className="bg-[#204A6B] rounded-xl shadow-2xl text-white p-8 flex flex-col justify-center items-center text-center">
                                <h3 className="text-3xl font-semibold mb-2">Launch & Support</h3>
                                <p className="text-xl text-gray-300">Go live, scale up, and get ongoing monitoring + optimization.</p>
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </section>


            {/* Tech Stack Carousel */}
            <TechStack />

            {/* Deliverables Snapshot */}
            <section className="relative md:px-30 px-6 pb-12 bg-black">
                <div className="absolute top-0 left-0 w-[700px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>

                <h2 className="md:text-5xl text-4xl font-bold text-center mb-12">Deliverables Snapshot</h2>
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold mb-3 text-white">✔️ UI/UX Design</h3>
                        <p>Beautiful, user-centric designs aligned with your brand.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold mb-3 text-white">✔️ Frontend & Backend</h3>
                        <p>Robust architecture, REST/GraphQL APIs, scalable components.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold mb-3 text-white">✔️ Deployment</h3>
                        <p>CI/CD enabled and deployed to scalable cloud environments.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-semibold mb-3 text-white">✔️ Testing & QA</h3>
                        <p>Manual + Automated testing with regular review cycles.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20 text-center bg-black">
                <motion.h2
                    className="md:text-5xl text-4xl font-bold mb-6"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to Build with Us?
                </motion.h2>
                <p className="text-gray-400 mb-8 text-xl">Book a free call or browse our case studies to see our impact.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#" className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition">📞 Book a Strategy Call</a>
                    <a href="#" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">📂 View Case Study</a>
                </div>
            </section>
        </div>
    );
}
