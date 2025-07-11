
import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 bg-black text-white relative overflow-hidden px-4 py-10">
      
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[600px] bg-[#093FB4] opacity-20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:px-60">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex justify-center flex-1 md:flex-none">
            <a href="#home">
              <img
                src="/images/logo1.png"
                alt="Logo"
                className="w-10 h-10 rounded-lg bg-white p-1"
              />
            </a>
          </div>
          </div>
          <div className="text-lg font-semibold">Corazor</div>
          <p className="text-sm text-gray-400 mb-3">Follow us on:</p>
          <div className="flex gap-4 text-gray-300">
            <Instagram size={18}  className="hover:text-white cursor-pointer"/>
            <Facebook size={18} className="hover:text-white cursor-pointer" />
            <Youtube size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Sections</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Why Corazor</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">404</li>
            <li className="hover:text-white cursor-pointer">Use Template</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
          </ul>
        </div>

        <div className="w-[300px]">
          <h3 className="font-semibold text-white mb-3">Join our newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Sign up to our mailing list below and be the first to know about new updates. Don’t worry, we hate spam too.
          </p>
          <div className="flex items-center rounded-full overflow-hidden max-w-md">
            <div className="flex items-center rounded-full overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 w-1/2 py-2 bg-[#181818] text-sm w-full h-[50px] outline-none text-white placeholder-gray-400"
              />
              {/* <button className="bg-[#093FB4] text-white px-6 h-[50px] py-2 text-sm font-medium">
                Get Notified
              </button> */}
            </div>
            <button className="bg-[#093FB4] rounded-full w-[130px] text-white h-[50px] py-2 text-sm font-medium ml-2">
                Get Notified
              </button>
          </div>
      </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 text-center text-sm text-gray-500 mt-5">
        <hr className="w-full md:px-[-200px] border-t border-gray-900"></hr>
        <p className="mt-4">© 2025 Corazor All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
