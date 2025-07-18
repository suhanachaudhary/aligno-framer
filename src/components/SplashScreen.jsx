
import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
            {/* Background shadow effects */}
            <div className="absolute top-[30%] left-0 w-[700px] h-[130px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>
            <div className="absolute top-10% left-0 w-[700px] h-[600px] bg-[#093FB4] opacity-20 blur-[60px] z-0"></div>
            <div className="absolute top-10% right-0 w-[600px] h-[600px] bg-[#093FB4] opacity-20 blur-[50px] z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/20"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl"></div>
            <div className="absolute top-[40%] right-0 w-[700px] h-[130px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gray-700/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-gray-800/20 to-transparent rounded-full blur-2xl"></div>
            <div className="text-center">
                <h1 className={`text-white text-6xl font-light mb-6 transition-all duration-2000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    Ready to <span className="italic font-light font-bold">Corazor</span>
                </h1>

                {/* Elegant underline */}
                <div className={`mx-auto bg-white transition-all duration-4000 delay-500 ${isVisible ? 'w-62 h-px opacity-100' : 'w-0 h-px opacity-0'
                    }`}></div>
            </div>
        </div>
    );
};

export default SplashScreen;