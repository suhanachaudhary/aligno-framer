
function Collaborate() {
    return (
        <div className="bg-[#0f172a] text-white px-6 md:px-20 py-20 space-y-24">

            <section className="max-w-5xl mx-auto text-center">
                <h2 className="md:text-5xl text-4xl font-bold mb-6 mt-20">Why Work with Corazor?</h2>
                <p className="text-xl text-gray-300">
                    At Corazor, we blend innovation with execution. Whether you're a startup or enterprise, our expert team helps you scale smarter with tech-backed strategies, tailored solutions, and hands-on collaboration.
                </p>
            </section>

            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">

                    <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg h-full">
                        <h3 className="text-2xl font-semibold mb-2">1. Discovery Call</h3>
                        <p className="text-gray-600">
                            A 30-minute session to understand your needs, challenges, and goals.
                        </p>
                    </div>


                    <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg h-full">
                        <h3 className="text-2xl font-semibold mb-2">2. Free Tech Audit</h3>
                        <p className="text-gray-600">
                            We evaluate your existing tech stack and identify opportunities for improvement.
                        </p>
                    </div>

                    <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg h-full">
                        <h3 className="text-2xl font-semibold mb-2">3. Proposal Sprint</h3>
                        <p className="text-gray-600">
                            A detailed plan including roadmap, deliverables, and timelines for your project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-center space-y-6">
                <h3 className="text-3xl font-bold">Ready to Transform Your Vision?</h3>
                <p className="text-lg text-gray-300">Let’s craft something amazing together.</p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="#strategy-call"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                    >
                        Book a Free Strategy Call
                    </a>
                    <a
                        href="https://wa.me/91xxxxxxxxxx"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp Us
                    </a>
                    <a
                        href="mailto:team@corazor.in"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </div>

    )
}
export default Collaborate