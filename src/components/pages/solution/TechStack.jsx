
import TechIcon from "./TechIcon";
import { iconList } from './iconList';

const TechStack = () => {
    return (
        <div className="w-full h-full">

            <div className="relative w-full md:my-20 my-20">
                <div className="absolute top-0 left-[10%] w-[400px] h-[100px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>
                <div className="absolute top-0 right-0 w-[300px] h-[100px] bg-[#093FB4] opacity-20 blur-[150px] z-0"></div>


                <h1 className="md:text-5xl text-4xl font-bold text-center">Tech Stack</h1>
                <div className="relative">
                    <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
                    <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
                    <div className="marquee h-62">
                        <div className="marquee-box h-[100px] w-[100px] md:gap-12 gap-5">
                            {iconList.map((icon, index) => (
                                <TechIcon key={index} icon={icon} />
                            ))}
                            {iconList.map((icon, index) => (
                                <TechIcon key={index} icon={icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;