
import Lottie from "lottie-react";
import { useEffect, useState } from 'react';

const timeline = [
    { year: '2021', event: 'Founded with a mission to simplify tech for businesses' },
    { year: '2022', event: 'Launched our first SaaS solution' },
    { year: '2023', event: 'Reached 1M+ users globally' },
    { year: '2024', event: 'Expanded to 3 countries' },
];

const team = [
    { name: 'Tushar Jain', title: 'Co-founder & CEO', image: 'https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg' },
    { name: 'Amit Verma', title: 'CTO', image: 'https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg' },
    { name: 'Neha Singh', title: 'Head of Design', image: 'https://capturethismoment.in/wp-content/uploads/2019/08/team-member-01.jpg' },
    { name: 'Karan Patel', title: 'Marketing Lead', image: 'https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg' },
];

const AboutPage = () => {

    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('https://assets10.lottiefiles.com/packages/lf20_u4yrau.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data));
    }, []);

    return (
        <div className="bg-black text-white">

            <section className="py-20 px-6 text-center bg-black text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-20">Our Mission</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
                    At Corazor, we believe in building tech that empowers people. Our mission is to solve real-world problems with simple, elegant solutions that scale.
                </p>

                <div className="mx-auto w-72 h-72 flex justify-center items-center">
                    {animationData && <Lottie animationData={animationData} loop={true} />}
                </div>
            </section>

            <section className="bg-black py-16 px-6">
                <h3 className="text-4xl md:text-5xl font-semibold mb-12 text-center text-white">Our Journey</h3>

                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 px-4 md:px-20">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center max-w-[200px]">
                            <div className="w-6 h-6 rounded-full bg-blue-500 mb-2"></div>
                            <div className="text-white text-xl font-semibold">{item.year}</div>
                            <p className="text-gray-300 text-[16px] text-center mt-2">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 bg-black">
                <h3 className="text-4xl md:text-5xl text-white font-semibold text-center mb-10">
                    Meet Our Team
                </h3>
                <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 w-full max-w-xs transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 object-cover rounded-full mb-4 shadow"
                                />
                                <h4 className="font-bold text-xl text-gray-800">{member.name}</h4>
                                <p className="text-[16px] text-gray-600">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
