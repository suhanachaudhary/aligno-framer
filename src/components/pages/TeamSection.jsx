
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const teamMembers = [
  {
    name: "Daisy M",
    role: "Brands and stuff",
    feedback: "Incredibly intuitive and boosted team productivity immediately.",
    img: "/images/image1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "PixelWorks",
    feedback: "Aligno transformed our project management efficiency!",
    img: "/images/image2.jpg",
  },
  {
    name: "Emily Carter",
    role: "BrightEdge",
    feedback: "Streamlined all our processes, saving us hours daily.",
    img: "/images/image3.jpeg",
  },
  {
    name: "Daisy M",
    role: "Brands and stuff",
    feedback: "Incredibly intuitive and boosted team productivity immediately.",
    img: "/images/image5.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "PixelWorks",
    feedback: "Aligno transformed our project management efficiency!",
    img: "/images/image2.jpg",
  },
  {
    name: "Emily Carter",
    role: "BrightEdge",
    feedback: "Streamlined all our processes, saving us hours daily.",
    img: "/images/image3.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-5 overflow-hidden">
      <h2 className="text-center text-4xl font-light mb-12">
        Meet our <span className="italic font-semibold">Team</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-scroll-left gap-8 w-[200%]"
          style={{
            animation: "scroll-left 15s linear infinite",
          }}
        >

          {teamMembers.concat(teamMembers).map((member, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-t from-black to-transparent rounded-3xl shadow-xl min-w-[280px] max-w-[300px] h-[400px] overflow-hidden relative group"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[300px] object-cover rounded-t-3xl rounded-b-none shadow-[inset_0_-80px_80px_-10px_rgba(0,0,0,0.8)]"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-sm border m-1 rounded-xl"> */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-sm border-t border-l border-r border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] m-1 rounded-t-xl">

                <p className="font-semibold text-white text-xl leading-tight mb-2">
                  {member.feedback}
                </p>
                <p className="text-gray-300 text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.role}</p>
                <div className="flex gap-3 mt-2 text-sm text-white/80">
                  <FaFacebookF className="hover:text-white cursor-pointer" />
                  <FaInstagram className="hover:text-white cursor-pointer" />
                  <FaTwitter className="hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default TeamSection;
