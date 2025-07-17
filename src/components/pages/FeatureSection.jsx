
const FeatureSection = () => {
    // Generate globe dots
    // const generateGlobeDots = (count) => {
    //     const dots = [];
    //     for (let i = 0; i < count; i++) {
    //         const phi = Math.random() * Math.PI * 2;
    //         const theta = Math.random() * Math.PI;
    //         const x = Math.sin(theta) * Math.cos(phi);
    //         const y = Math.sin(theta) * Math.sin(phi);
    //         const z = Math.cos(theta);

    //         if (z > -0.4) {
    //             dots.push({
    //                 id: i,
    //                 x: x * 60 + 60,
    //                 y: y * 60 + 60,
    //                 z: z * 60 + 60,
    //                 size: Math.random() * 2 + 1,
    //                 opacity: (z + 1) * 0.4,
    //                 delay: Math.random() * 3
    //             });
    //         }
    //     }
    //     return dots;
    // };


    const generateGlobeDots = (count) => {
        const dots = [];
        for (let i = 0; i < count; i++) {
            const phi = Math.random() * Math.PI * 2;
            const theta = Math.random() * Math.PI;
            const x = Math.sin(theta) * Math.cos(phi);
            const y = Math.sin(theta) * Math.sin(phi);
            const z = Math.cos(theta);

            dots.push({
                id: i,
                x: x * 60 + 60,
                y: y * 60 + 60,
                z: z * 60 + 60,
                size: Math.random() * 2 + 1,
                opacity: (z + 1) * 0.4,
                delay: Math.random() * 3
            });
        }
        return dots;
    };


    const globeDots = generateGlobeDots(200);

    return (
        <div className="min-h-screen p-8" style={{ padding: "0 300px 20px 250px", marginBottom: "50px" }}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">

                    <div className="md:col-span-2 md:row-span-2 h-[300px] bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 relative overflow-hidden">

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Real-Time Global Collaboration
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Collaborate seamlessly with teams across the globe. Stay connected and work together
                                in real time, no matter where you are, ensuring everyone is always on the same page.
                            </p>
                        </div>

                        <div className="relative w-68 h-68 mx-auto mt-4">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `radial-gradient(circle at 30% 30%, 
                    rgba(60, 60, 60, 0.8) 0%, 
                    rgba(30, 30, 30, 0.9) 40%, 
                    rgba(15, 15, 15, 1) 100%)`,
                                    boxShadow: `
                    inset -15px -15px 30px rgba(17, 16, 18, 0.8),
                    inset 15px 15px 30px rgba(255, 255, 255, 0.02),
                    0 0 30px rgba(100, 200, 255, 0.1)
                  `,
                                    animation: 'globeRotate 55s linear infinite'
                                }}
                            />

                            <div
                                className="absolute inset-0 rounded-full overflow-hidden"
                                style={{ animation: 'globeRotate 25s linear infinite' }}
                            >
                                <div className="globe-wrapper" style={{ perspective: "800px" }}>
                                    <div
                                        className="globe-inner"
                                        style={{
                                            width: "300px",
                                            height: "300px",
                                            position: "relative",
                                            margin: "0 auto",
                                            transformStyle: "preserve-3d",
                                            animation: "globeRotate 45s linear infinite",
                                        }}
                                    >
                                        {/* {globeDots.map((dot) => (
                                            <div
                                                key={dot.id}
                                                className="absolute rounded-full bg-blue-400"
                                                style={{
                                                    left: `${dot.x}px`,
                                                    top: `${dot.y}px`,
                                                    width: `${dot.size}px`,
                                                    height: `${dot.size}px`,
                                                    opacity: dot.opacity,
                                                    boxShadow: '0 0 8px rgba(96, 165, 250, 0.6)'
                                                }}
                                            />
                                        ))} */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 h-[180px] w-[290px] bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 relative overflow-hidden">
                        <div className="h-full flex justify-between">
                            <div className="flex justify-center mt-4">
                                <div
                                    className="relative w-12 h-30 rounded-full overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(180deg, #ff6b6b 0%, #ff8e53 50%, #ff6b6b 100%)',
                                        marginRight: "20px",
                                        boxShadow: `
                      inset -4px 0 8px rgba(0, 0, 0, 0.3),
                      inset 4px 0 8px rgba(255, 255, 255, 0.1),
                      0 0 20px rgba(255, 107, 107, 0.3)
                    `,
                                        animation: 'pillGlow 3s ease-in-out infinite'
                                    }}
                                >

                                    <div
                                        className="absolute bottom-0 left-0 right-0 rounded-full"
                                        style={{
                                            background: 'linear-gradient(180deg, #ff4757 0%, #ff3838 100%)',
                                            animation: 'fillUp 4s ease-in-out infinite'
                                        }}
                                    />

                                    <div
                                        className="absolute top-2 left-2 w-2 h-12 rounded-full opacity-40"
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)'
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Advance Analytics
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Unlock valuable insights into project performance, helping you
                                    make data-driven decisions with ease.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="md:col-span-1 md:row-span-2 w-[290px] mt-[-105px] h-[280px] bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 relative overflow-hidden">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Sprint Planning Made Simple
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                    Organize and structure your work in short, focused
                                    sprints. Track progress, hit goals, and deliver.
                                </p>

                                <div className="flex space-x-2 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-gray-600" />
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 border-2 border-gray-600" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative">
                                    <div
                                        className="w-16 h-20"
                                        style={{
                                            marginTop: "-60px",
                                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 50%, #ffa726 100%)',
                                            clipPath: 'polygon(20% 0%, 80% 0%, 60% 40%, 100% 40%, 40% 100%, 0% 60%, 40% 60%)',
                                            boxShadow: `
                        0 0 20px rgba(255, 107, 107, 0.4),
                        inset -4px -4px 8px rgba(0, 0, 0, 0.3),
                        inset 4px 4px 8px rgba(255, 255, 255, 0.1)
                      `,
                                            animation: 'lightningPulse 2s ease-in-out infinite'
                                        }}
                                    />


                                    <div
                                        className="absolute inset-0 w-16 h-20"
                                        style={{
                                            marginTop: "-50px",
                                            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.6) 0%, rgba(255, 142, 83, 0.4) 100%)',
                                            clipPath: 'polygon(20% 0%, 80% 0%, 60% 40%, 100% 40%, 40% 100%, 0% 60%, 40% 60%)',
                                            filter: 'blur(4px)',
                                            animation: 'lightningGlow 2s ease-in-out infinite'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="md:col-span-2 mt-[-280px] h-[150px] md:row-span-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 relative overflow-hidden">
                        <div className="h-full flex items-center justify-between">
                            <div className="flex items-center space-x-6 flex-1">

                                <div className="relative">
                                    <div
                                        className="w-16 h-16 rounded-xl relative"
                                        style={{
                                            background: 'linear-gradient(145deg, #4a5568 0%, #2d3748 100%)',
                                            boxShadow: `
                        -6px -6px 12px rgba(255, 255, 255, 0.05),
                        6px 6px 12px rgba(0, 0, 0, 0.3),
                        inset -2px -2px 4px rgba(0, 0, 0, 0.2),
                        inset 2px 2px 4px rgba(255, 255, 255, 0.05)
                      `,
                                            animation: 'calendarFloat 3s ease-in-out infinite'
                                        }}
                                    >
                                        <div
                                            className="absolute top-1 left-1 right-1 h-2 rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(90deg, #ff6b6b 0%, #ff8e53 100%)'
                                            }}
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white text-lg font-bold mt-1">31</span>
                                        </div>


                                        <div className="absolute -top-1 left-2 w-1 h-3 bg-gray-600 rounded-full" />
                                        <div className="absolute -top-1 right-2 w-1 h-3 bg-gray-600 rounded-full" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Seamless Integrations with Your Favorite Tools
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Connect Aligno with your favorite tools to streamline
                                        workflows and boost productivity.
                                    </p>
                                </div>
                            </div>


                            <div className="relative ml-4">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                                        style={{
                                            top: `${Math.sin(i * Math.PI / 3) * 20 + 20}px`,
                                            left: `${Math.cos(i * Math.PI / 3) * 20 + 20}px`,
                                            boxShadow: '0 0 8px rgba(96, 165, 250, 0.6)',
                                            animation: `connectionDot 3s ease-in-out infinite ${i * 0.5}s`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
    
        @keyframes globeRotate {
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(360deg);
            }
        }
        @keyframes fillUp {
          0% { height: 30%; }
          50% { height: 80%; }
          100% { height: 30%; }
        }

        @keyframes lightningPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 
              0 0 20px rgba(255, 107, 107, 0.4),
              inset -4px -4px 8px rgba(0, 0, 0, 0.3),
              inset 4px 4px 8px rgba(255, 255, 255, 0.1);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 
              0 0 30px rgba(255, 107, 107, 0.6),
              inset -4px -4px 8px rgba(0, 0, 0, 0.3),
              inset 4px 4px 8px rgba(255, 255, 255, 0.1);
          }
        }

        @keyframes lightningGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        @keyframes calendarFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-8px) rotateX(5deg); }
        }

        @keyframes connectionDot {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
          }
        }
      `}</style>
        </div>
    );
};

export default FeatureSection;