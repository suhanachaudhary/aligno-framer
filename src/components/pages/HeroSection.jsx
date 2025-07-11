
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

const HeroSection = () => {

  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "end start"], // triggers from out of view to full view
  });

  // Map scroll progress to X rotation: 180° → 90°
  const rotateX = useTransform(scrollYProgress, [0, 1], [180, 90]);

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
    }else {
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
        <div className="absolute top-[20px] left-[33%] h-1/4 w-px bg-white/10" style={{marginTop:"10px"}}></div>
        <div className="absolute top-[30px] left-[30%] h-1/4 w-px bg-white/10"></div>
        <div className="absolute top-0 left-[68%] h-1/4 w-px bg-white/10" style={{marginTop:"10px"}}></div>
        <div className="absolute top-0 left-[65%] h-1/4 w-px bg-white/10"></div>

        {/* Horizontal lines */}
        <div className="absolute top-[10%] left-0 w-1/2 h-px bg-white/10" style={{margin:"0 340px"}}></div>
        <div className="absolute top-[12%] left-0 w-1/2 h-px bg-white/10" style={{margin:"0 360px"}}></div>
        <div className="absolute top-[21%] left-0 w-1/2 h-px bg-white/10" style={{margin:"0 340px"}}></div>
      
      </div>

      <div className="absolute top-0 left-0 w-[700px] h-[400px] bg-[#0D5EA6] opacity-20 blur-[150px] z-0"></div>


      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-12 pb-20 mt-6">
        {/* <img src="/images/light-effext.PNG"></img>
        <div className="text-xl text-[#0D5EA6] mb-4">✨ New AI Feature</div>
        <h1 className="text-6xl mb-4 md:text-9xl font-bold tracking-tight text-[#0D5EA6] mb-4">Corazor</h1>
        <p className="text-md mt-2 md:text-lg max-w-xl text-gray-300 mb-8">
          Prioritise What Matters - Streamline Your<br></br> Workflow and Focus on What Drives<br></br> Success!
        </p> */}

        <div className="absolute w-[550px] h-[280px] rotate-15 border-t"
          style={{
          top: '16%',
          left: '50%',
          transform: 'translateX(-50%) rotate(-15deg)',
          background: 'conic-gradient(from 180deg at 80% 0%, rgba(255,255,255,0.2),#0D5EA6)',
          clipPath: 'polygon(30% 0%, 60% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(70px)',
          zIndex: 10,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          opacity: 0.8,
          marginTop:'30px',
        }}
        ></div>

        <div className="relative z-[5]">
          <div className="text-xl text-[#0D5EA6] mb-4 mt-24">✨ New AI Feature</div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-[#0D5EA6] mb-4">
            Corazor
          </h1>
          <p className="text-md mt-2 md:text-lg max-w-xl text-gray-300 mb-8">
            Prioritise What Matters - Streamline Your<br />
            Workflow and Focus on What Drives<br />
            Success!
          </p>
        </div>
        

        <div className="relative group inline-block overflow-hidden rounded-full hover:shadow-[inset_0_0_20px_#0B1D51]" style={{ marginBottom: "-50px" }}>
        <button className="btn relative z-10 border border-white text-white px-6 py-2 rounded-full bg-gradient-to-r from-[#0D5EA6] to-[#093FB4] hover:opacity-50 transition">
          Buy Template
        </button>

      {[...Array(100)].map((_, i) => {
        const size = Math.random() < 0.5 ? 6 : 8;
        const colors = ["#ffffff", "#0D5EA6", "#5AD2F4"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <span
            key={i}
            className="absolute rounded-full animate-buttonBubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              border: "1px solid white",
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}px`,
              opacity: 0.9,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: `0 0 10px ${color}`,
              filter: `blur(0.2px)`,
            }}
          />
        );
      })}

      </div>


{/* 
        <button className="border border-white text-white px-6 py-2 rounded-full bg-gradient-to-r mt-6 from-[#0D5EA6] to-[#093FB4] hover:opacity-90 transition" style={{marginBottom:"-50px"}}>
          Buy Template
        </button> */}
      </div>

    <div className="absolute top-[1%] left-0 w-[300px] h-[300px] bg-[#0D5EA6] opacity-20 blur-[130px] z-0"></div>

    <div className="absolute top-[50%] left-[50%] w-[300px] h-[500px] bg-[#0D5EA6] opacity-20 blur-[130px] z-0"></div>
 
{/* 
      <motion.div
        ref={ref}
        initial={{ rotateX: 180,rotateY:0, rotateZ:360, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6"
        stye={{marginTop:"-80px"}}
      >
        <img
          src="/images/hero13.jpg"
          alt="Aligno Dashboard"
          className="w-full h-[600px] rounded-lg shadow-2xl border border-white/10"
        />
      </motion.div> */}


      <motion.div
        ref={ref1}
        style={{
          rotateX: smoothRotateX,
          perspective: 1000,
        }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <img
          src="/images/hero13.jpg"
          alt="Aligno Dashboard"
          className="w-full h-[600px] rounded-lg shadow-2xl border border-white/10"
          style={{
            transform: "scaleY(-1)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>




    <div className="bg-black text-white py-10 overflow-hidden" style={{margin:"10px 200px"}}>

      <div className="relative flex justify-center items-center">
      
        <div className="absolute top-[20%] left-0 w-[700px] h-[130px] bg-[##0D5EA6] opacity-20 blur-[150px] z-0"></div>

        <p style={{ fontWeight: "700" }} className="text-center text-[#0D5EA6] text-xl mb-4 relative z-10">
          Trusted by 2 million+ teams
        </p>
      </div>

      <Marquee gradient={false} speed={70} pauseOnHover={true}>
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-10 items-center">
          <img src="/images/ipsum1.png" alt="logo1" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition" />
          <img src="/images/ipsum2.png" alt="logo2" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition" />
          <img src="/images/chart.png" alt="logo3" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition" />
          <img src="/images/calendar.jpeg" alt="logo4" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition" />
          <img src="/images/light.png" alt="logo5" className="h-16 w-32 object-contain opacity-50 hover:opacity-100 transition" />
        </div>
      ))}
    </Marquee>

      
      <div className="mt-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="italic text-gray-300">Faster,</span> smarter Project <br /> Management
          </h2>
          <p className="text-gray-400 text-sm">
            Our intuitive platform provides everything you need to efficiently<br></br> manage your projects,
            from real-time collaboration to detailed task <br></br>tracking.
          </p>
        </div>


        <div className="mt-10 md:mt-0 flex flex-col gap-4 w-full md:w-1/3">
          {[20, 5, 15, 7].map((val, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 w-full rounded-full bg-white/5 h-10 overflow-hidden shadow-xl bg-gradient-to-tr from-[#0D5EA6]/50 via-[#1a1a1a] to-black shadow-md-[#633112] shadow-lg cursor-pointer pr-3 transition-colors duration-300"
            >
              <img
                src="/images/image1.jpg"
                alt=""
                className="w-8 h-8 rounded-full border border-white"
              />
              <div className="flex hover:bg-[#0D5EA6] hover:h-2 rounded-xl h-1 bg-[#0D5EA6]" style={{ width: `${val * 3}%` }}></div>
            </div>
          ))}
        </div>

      </div>
    </div>

      
    </div>
  );
};

export default HeroSection;
