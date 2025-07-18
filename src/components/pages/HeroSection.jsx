
import { useEffect, useRef, useState } from "react";
import { useAnimation, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dashboard1 from "./Dashboard1";

const HeroSection = () => {

  const logos = [
    {
      id: 1,
      name: "Logoipsum",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
          </div>
          <span className="text-gray-400 text-xl font-bold">Logoipsum</span>
        </div>
      )
    },
    {
      id: 2,
      name: "IPSUM",
      logo: (
        <div className="text-gray-400 text-2xl font-bold tracking-wide">
          IPSUM
        </div>
      )
    },
    {
      id: 3,
      name: "LOGO",
      logo: (
        <div className="text-gray-400 text-2xl font-bold">
          LOGO
        </div>
      )
    },
    {
      id: 4,
      name: "LUJU",
      logo: (
        <div className="text-gray-400 text-2xl font-bold italic">
          LUJU
        </div>
      )
    },
    {
      id: 5,
      name: "Company",
      logo: (
        <div className="flex items-center">
          <div className="text-gray-400 text-2xl font-bold">∞</div>
        </div>
      )
    },
    {
      id: 6,
      name: "TechCorp",
      logo: (
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 bg-gray-400 rounded"></div>
          <div className="w-6 h-6 bg-gray-500 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
      )
    },
    {
      id: 7,
      name: "StartupCo",
      logo: (
        <div className="flex items-center">
          <div className="text-gray-400 text-3xl">✱</div>
        </div>
      )
    },
    {
      id: 8,
      name: "BizLogo",
      logo: (
        <div className="text-gray-400 text-2xl font-bold">
          BIZ
        </div>
      )
    },
    {
      id: 9,
      name: "Innovation",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-lg font-semibold">INNOV</span>
        </div>
      )
    },
    {
      id: 10,
      name: "Digital",
      logo: (
        <div className="text-gray-400 text-xl font-bold">
          DIGITAL
        </div>
      )
    }
  ];

  const infiniteLogos = [...logos, ...logos, ...logos];


  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "end start"], // triggers from out of view to full view
  });

  // Map scroll progress to X rotation: 180° → 90°
  const rotateX = useTransform(scrollYProgress, [0, 1], [90, 180]);

  // Optional: make rotation smoother
  const smoothRotateX = useSpring(rotateX, {
    stiffness: 80,
    damping: 20,
  });


  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    } else {
      controls.set({
        rotateX: 20,
        rotateY: 180,
        rotateZ: 360,
        scale: 0.8,
      });
    }
  }, [inView, controls]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(130)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white opacity-10 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>


      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-2">
        {/* Vertical lines */}
        <div className="absolute top-[20px] left-[33%] h-1/4 w-px bg-white/10" style={{ marginTop: "10px" }}></div>
        <div className="absolute top-[30px] left-[30%] h-1/4 w-px bg-white/10"></div>
        <div className="absolute top-0 left-[68%] h-1/4 w-px bg-white/10" style={{ marginTop: "10px" }}></div>
        <div className="absolute top-0 left-[65%] h-1/4 w-px bg-white/10"></div>

        {/* Horizontal lines */}
        <div className="absolute top-[10%] left-0 w-1/2 h-px bg-white/10" style={{ margin: "0 340px" }}></div>
        <div className="absolute top-[12%] left-0 w-1/2 h-px bg-white/10" style={{ margin: "0 360px" }}></div>
        <div className="absolute top-[21%] left-0 w-1/2 h-px bg-white/10" style={{ margin: "0 340px" }}></div>

      </div>

      <div className="absolute top-0 left-0 w-[700px] h-[400px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>


      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-12 pb-0 mt-8">

        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px opacity-60"
          style={{
            height: '60vh',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 168, 168, 0.6) 20%, rgba(255, 224, 102, 0.4) 40%, rgba(255, 159, 67, 0.3) 60%, transparent 100%)',
            filter: 'blur(1px)',
            animation: 'lightBeamPulse 3s ease-in-out infinite'
          }}
        />

        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-30"
          style={{
            width: '2px',
            height: '60vh',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 168, 168, 0.4) 20%, rgba(255, 224, 102, 0.2) 40%, rgba(255, 159, 67, 0.1) 60%, transparent 100%)',
            filter: 'blur(2px)',
            animation: 'lightBeamPulse 3s ease-in-out infinite 0.5s'
          }}
        />

        <div
          className="absolute top-0 left-[98%] transform -translate-x-1/2 opacity-15"
          style={{
            width: '1300px',
            height: '80vh',
            background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.2) 0%, rgba(79, 195, 247, 0.1) 30%, transparent 60%)',
            clipPath: 'polygon(42% 0%, 58% 0%, 75% 100%, 25% 100%)', // wider torch shape
            filter: 'blur(6px)', // stronger blur for softness
            animation: 'lightBeamPulse 5s ease-in-out infinite 1.5s',
          }}
        />
        <div className="relative z-10 text-center">
          <div className="relative">

            <div className="relative z-[5]">
              <div className="text-xl text-[#0D5EA6] mb-4 mt-11">✨ New AI Feature</div>

              <h1
                className="text-4xl md:text-8xl font-bold relative z-10"
                style={{
                  background: 'linear-gradient(45deg, #00d4ff, #4fc3f7, #b3e5fc, #4fc3f7, #00d4ff)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradientShift 3s ease-in-out infinite',
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                }}
              >
                Corazor
              </h1>

              <p className="mt-6 text-xl text-center text-gray-300 mb-4">
                Prioritise What Matters - Streamline Your<br />
                Workflow and Focus on What Drives<br />
                Success!
              </p>
              {/* Buy Template Button */}
              <button className="relative bg-blue-900 hover:bg-gray-900 border-2 border-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-blue-400 overflow-hidden group">
                <span className="relative z-10">Buy Template</span>

                {/* Bubble animations */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(500)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-blue-400 to-blue-300"
                      style={{
                        width: `${4 + Math.random() * 8}px`,
                        height: `${4 + Math.random() * 8}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `bubble-float-${i % 3} ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </button>

              <div className="mt-[-40px]">
                <Dashboard1 />
              </div>

            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes sparkleAnimation {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.1;
          }
        }
        
        @keyframes lightBeamPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scaleY(1.05);
          }
        }
        
        @keyframes lightSourcePulse {
          0%, 100% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.2);
          }
        }
      `}</style>

      </div>

      {/* <div className="absolute top-[1%] left-0 w-[300px] h-[300px] bg-[#093FB4] opacity-20 blur-[130px] z-0"></div> */}

      {/* <div className="absolute top-[50%] left-[50%] w-[300px] h-[500px] bg-[#093FB4] opacity-20 blur-[130px] z-0"></div>
      <div className="absolute top-[80%] right-0 w-[300px] h-[300px] bg-[#093FB4] opacity-20 blur-[130px] z-0"></div> */}


      <div className="bg-black text-white py-10 overflow-hidden" style={{ marginTop: "-200px" }}>
        <div className="relative flex justify-center">
          {/* <div className="absolute top-[20%] left-0 w-[700px] h-[130px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div> */}
          <p style={{ fontWeight: "700" }} className="text-center text-[#093FB4] text-xl mb-4 relative z-10">
            Trusted by 2 million+ teams
          </p>
        </div>


        {/* Logo Marquee Container */}
        <div className="relative px-30">
          {/* Scrolling Logos */}
          <div
            className="flex items-center space-x-6"
            style={{
              animation: 'marqueeRightToLeft 40s linear infinite',
              width: 'fit-content'
            }}
          >
            {infiniteLogos.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {company.logo}
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 w-22 h-full bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-22 h-full bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* CSS Animation */}
        <style jsx>{`
        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        /* Pause animation on hover */
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>

        <div className="position-relative mt-20 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-10% right-0 w-[500px] h-[200px] bg-[#093FB4] opacity-20 blur-[130px] z-0"></div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="italic text-gray-300">Faster,</span> smarter Project <br /> Management
            </h2>
            <p className="text-gray-400 text-[16px]">
              Our intuitive platform provides everything you need to efficiently<br></br> manage your projects,
              from real-time collaboration to detailed task <br></br>tracking.
            </p>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col gap-4 w-full md:w-1/3">
            {[30].map((val, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 w-full rounded-full bg-white/5 h-10 overflow-hidden shadow-xl bg-gradient-to-tr from-[#0D5EA6]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg cursor-pointer pr-3 transition-colors duration-300"
              >
                <img
                  src="/images/image1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border border-white"
                />
                <div className="w-full">
                  <div className="w-full h-1.5 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 bg-[#0D5EA6] rounded-full transition-all duration-500"
                      style={{ width: `${val * 3}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            {[10].map((val, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-full bg-white/5 h-10 overflow-hidden shadow-xl bg-gradient-to-tr from-[#0D5EA6]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg cursor-pointer pr-3 ml-20 transition-colors duration-300"
              >
                <img
                  src="/images/image1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border border-white"
                />
                <div className="w-full">
                  <div className="w-full h-1.5 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 bg-gray-600 rounded-full transition-all duration-500"
                      style={{ width: `${val * 3}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            {[20].map((val, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-full bg-white/5 h-10 overflow-hidden shadow-xl bg-gradient-to-tr from-[#0D5EA6]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg cursor-pointer ml-10 pr-3 transition-colors duration-300"
              >
                <img
                  src="/images/image1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border border-white"
                />
                <div className="w-full">
                  <div className="w-full h-1.5 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 bg-[#0D5EA6] rounded-full transition-all duration-500"
                      style={{ width: `${val * 3}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            {[20].map((val, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 w-full rounded-full bg-white/5 h-10 overflow-hidden shadow-xl bg-gradient-to-tr from-[#0D5EA6]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg cursor-pointer pr-3 transition-colors duration-300"
              >
                <img
                  src="/images/image1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full border border-white"
                />
                <div className="w-full">
                  <div className="w-full h-1.5 rounded-full bg-gray-700">
                    <div
                      className="h-1.5 bg-gray-600 rounded-full transition-all duration-500"
                      style={{ width: `${val * 3}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div >
      </div>
    </div>
  );
};

export default HeroSection;
