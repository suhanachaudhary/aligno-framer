
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-black via-[#093FB4] to-[#121223] text-white px-4 py-6 fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="hidden md:flex flex-1 justify-center gap-x-[80px] text-xl font-medium text-gray-400">
          <a href="#feature" className="hover:text-white transition cursor-pointer">Features</a>
          <a href="#testimonials" className="hover:text-white transition cursor-pointer">Testimonials</a>
        </div>

        <div className="flex justify-center flex-1 md:flex-none">
          <a href="#home">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg bg-white p-1"
            />
          </a>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-x-[80px] text-xl font-medium text-gray-400">
          <a href="#why" className="hover:text-white transition cursor-pointer">Why Corazor?</a>
          <a href="#pricing" className="hover:text-white cursor-pointer">Pricing</a>
        </div>
      </div>

      <div className="md:hidden mt-3 text-sm font-medium text-center space-x-5 text-gray-400">
        <a href="#features" className="hover:text-white cursor-pointer">Features</a>
        <a href="#testimonials" className="hover:text-white cursor-pointer">Testimonials</a>
        <a href="#why" className="hover:text-white cursor-pointer">Why Aligno?</a>
        <a href="#pricing" className="hover:text-white cursor-pointer">Pricing</a>
      </div>
    </nav>
  );
};

export default Navbar;

