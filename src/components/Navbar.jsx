
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-black text-white px-4 py-3 fixed top-0 w-full z-50 shadow-sm border-b-[0.3px] border-gray-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="hidden md:flex flex-1 justify-center gap-x-[80px] text-xl font-medium text-gray-400">
            <a href="#feature" className="hover:text-white transition cursor-pointer">Features</a>
            <a href="#testimonials" className="hover:text-white transition cursor-pointer">Testimonials</a>
            <Link to="/study" className="hover:text-white transition cursor-pointer">Case Study</Link>
          </div>


          <div className="flex justify-center flex-1 md:flex-none">
            <Link to="/" className="cursor-pointer rotate-y-hover transition-transform duration-700 hover:rotate-y-90">
              <img
                src="/images/logo1.png"
                alt="Logo"
                className="w-10 h-10 rounded-lg bg-white p-1"
              />
            </Link>
          </div>


          <div className="hidden md:flex flex-1 justify-center gap-x-[80px] text-xl font-medium text-gray-400">
            <Link to="/why" className="hover:text-white transition cursor-pointer">Why Corazor?</Link>
            <Link to="/solution" className="hover:text-white transition cursor-pointer">Solution</Link>
            <a href="#pricing" className="hover:text-white cursor-pointer">Pricing</a>
          </div>
        </div>

        <div className="md:hidden mt-3 text-sm font-medium text-center space-x-5 text-gray-400">
          <a href="#features" className="hover:text-white cursor-pointer">Features</a>
          <a href="#testimonials" className="hover:text-white cursor-pointer">Testimonials</a>
          <a href="#why" className="hover:text-white cursor-pointer">Why Corazor?</a>
          <Link to="/solution" className="hover:text-white transition cursor-pointer">Solutions</Link>
          <a href="#pricing" className="hover:text-white cursor-pointer">Pricing</a>
        </div>
      </nav>
      <div className="fixed top-0 left-0 w-full h-16 z-40 pointer-events-none backdrop-blur-sm backdrop-brightness-90 opacity-90" />

    </>
  );
};

export default Navbar;

