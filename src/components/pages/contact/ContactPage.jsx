

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How quickly will I get a response?",
        answer: "We usually respond within 24 hours on business days.",
    },
    {
        question: "Can I directly book a strategy call?",
        answer: "Yes! Use our Calendly link to pick a time that works for you.",
    },
    {
        question: "Do you offer free consultations?",
        answer: "Absolutely. We offer a free discovery call and tech audit.",
    },
];

const ContactPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-20 lg:px-32 min-h-screen">

            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="md:text-5xl text-4xl font-extrabold mb-4 mt-20">We’re All Ears.</h1>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                    Whether you’re ready to collaborate or just have a few questions, we’d love to hear from you.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 mb-20">

                <motion.div
                    className="bg-white text-black p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 p-3 rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 p-3 rounded-lg"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full border border-gray-300 p-3 rounded-lg"
                            rows="4"
                            required
                        ></textarea>
                        <select className="w-full border border-gray-300 p-3 rounded-lg">
                            <option>Budget Range</option>
                            <option>Below $1000</option>
                            <option>$1000 - $5000</option>
                            <option>Above $5000</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#222] transition">
                        <FaWhatsapp className="text-green-500 text-2xl" />
                        <div>
                            <p className="font-medium">WhatsApp Us</p>
                            <a href="https://wa.me/919999999999" className="text-blue-400 text-sm">+91 99999 99999</a>
                        </div>
                    </div>
                    <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#222] transition">
                        <FaEnvelope className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="font-medium">Send an Email</p>
                            <a href="mailto:team@corazor.com" className="text-blue-400 text-sm">team@corazor.com</a>
                        </div>
                    </div>
                    <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#222] transition">
                        <FaCalendarAlt className="text-purple-500 text-2xl" />
                        <div>
                            <p className="font-medium">Book a Call</p>
                            <a href="https://calendly.com/yourname" className="text-blue-400 text-sm">Schedule on Calendly</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-semibold mb-6 text-center">FAQs</h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#111] border border-gray-800 rounded-xl">
                            <button
                                className="w-full text-left p-4 text-lg font-medium flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4 text-gray-400">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
