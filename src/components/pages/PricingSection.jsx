
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  "What is Corazor, and how does it help with project management?",
  "Can Corazor be customized for different teams and projects?",
  "Does Corazor support real-time collaboration across multiple locations?",
  "What features does Corazor offer for managing sprints?",
  "How does Corazor help with tracking project performance?",
];

const PricingSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
  return (
    <>
        <div className=" relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-center">
            Choose the <span className="italic">Right Plan</span> for <br className="md:hidden" /> Your Team
        </h1>
        <p className="text-sm text-gray-400 mb-12 text-center">
            Expand your schema as per your requirements
        </p>

        <div className="flex flex-col md:flex-row gap-6">
            
            <div className="bg-gradient-to-t from-[#093FB4] to-transparent p-[1px] rounded-2xl">
            <div className="bg-gradient-to-tr from-[#093FB4]/50 via-[#1a1a1a] to-black transition-all duration-300 bg-black rounded-2xl p-6 w-[300px] flex flex-col gap-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <div>
                <h2 className="text-lg font-medium">Free Plan</h2>
                <p className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></p>
                <p className="text-sm text-gray-400 mt-1">Perfect for individuals just starting out.</p>
                </div>
                <button className="bg-gradient-to-r from-[#093FB4] to-[#b7754c] text-white py-2 rounded-full font-semibold">
                Get Started
                </button>
                <p className="text-center text-xs text-gray-400">Free forever</p>
                <ul className="text-sm space-y-2">
                <li>• Access to essential project management tools</li>
                <li>• Up to 5 active projects</li>
                <li>• Basic task tracking features</li>
                <li>• Real-time collaboration</li>
                <li>• Community support</li>
                </ul>
            </div>
            </div>

            {/* Pro Plan Card */}
            <div className="bg-gradient-to-t from-[#093FB4] to-transparent p-[1px] rounded-2xl">
            <div className="bg-gradient-to-tl from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] transition-all duration-300 bg-black rounded-2xl p-6 w-[300px] flex flex-col gap-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <div>
                <h2 className="text-lg font-medium">Pro Plan</h2>
                <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold">$12<span className="text-sm font-normal">/month</span></p>
                    <p className="text-xs text-gray-400">Bill yearly</p>
                </div>
                <p className="text-sm text-gray-400 mt-1">Perfect for individuals and small teams.</p>
                </div>
                <button className="bg-gradient-to-r from-[#093FB4] to-[#f29b68] text-white py-2 rounded-full font-semibold">
                Get Started
                </button>
                <p className="text-center text-xs text-gray-400">Free forever</p>
                <ul className="text-sm space-y-2">
                <li>• Everything in the Free Plan, plus:</li>
                <li>• Unlimited projects and tasks</li>
                <li>• Advanced analytics and reporting</li>
                <li>• Sprint management tools</li>
                <li>• Priority customer support</li>
                <li>• Customizable workflows and templates</li>
                </ul>
            </div>
            </div>
        </div>
        </div>


        <div className="bg-black text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
        How <span className="italic text-[#093FB4]">Corazor</span> helps you?
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-xl mb-12">
        Corazor offers ready-made solutions to get you going fast. Easily customize as your team’s needs expand.
      </p>

      <div className="w-full max-w-2xl space-y-4">
        {questions.map((question, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] rounded-xl p-[1px] shadow-lg transition-all duration-300"
          >
            <div
              className="bg-black rounded-xl px-5 py-4 cursor-pointer flex justify-between items-center bg-gradient-to-tl from-[#093FB4]/50 via-[#1a1a1a] to-black shadow-md-[#633112] rounded-xl p-[1px] shadow-lg transition-all duration-300"
              onClick={() => toggleIndex(idx)}
            >
              <span className="text-white text-sm md:text-base">{question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#093FB4] transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === idx && (
              <div className="bg-black rounded-b-xl px-5 py-4 text-sm text-gray-300">
                This is a sample answer. You can customize this section with real content later.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


    <div className="bg-black text-white py-2 px-4 flex flex-col items-center" style={{paddingBottom:"60px"}}>
    
      <p className="text-sm text-gray-400 text-center max-w-xl mb-6">
        Corazor provides pre-configured options for quick start-ups. As your team grows, adaptation becomes effortless.
      </p>

      {/* Glow Box */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-[#1c1c1c] overflow-hidden px-6 py-12">
        {/* Glow behind */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[30%] h-[700%] bg-[#093FB4] opacity-20 blur-3xl rounded-full"></div>
        </div>

      
        <div className="relative z-10 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to manage your <br></br> <br className="md:hidden" /> team like a pro?
          </h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Corazor offers ready-made solutions to get you going fast. Easily customize as your team’s needs expand.
          </p>
          <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-[#b7754c] transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-[50%] w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#093FB4] opacity-20 blur-[120px] z-0"></div>
    </>    
  );
};

export default PricingSection;
