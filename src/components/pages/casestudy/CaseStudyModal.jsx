
import { motion } from "framer-motion";

const CaseStudyModal = ({ study, onClose }) => {
    if (!study) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
            <motion.div
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                className="bg-white max-w-3xl w-full rounded-xl p-6 relative overflow-y-auto max-h-[90vh]"
            >
                <button
                    className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-black text-center">{study.client} Case Study</h2>

                <div className="space-y-4 text-gray-700">
                    <p><strong>🚧 Challenge:</strong> {study.challenge}</p>
                    <p><strong>🧠 Our Strategy:</strong> {study.strategy}</p>
                    <p><strong>🛠️ Tech We Used:</strong> {study.tech.join(", ")}</p>
                    <p><strong>📈 Outcome:</strong> {study.outcome}</p>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-2">📸 Screenshots:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.screenshots.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Screenshot ${idx + 1}`}
                            className="rounded-md shadow-md w-full object-cover"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default CaseStudyModal;
