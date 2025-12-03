import KindimLogo from '../assets/Logo.png';

function Header() {
  return (
    <header className="flex items-center px-10 py-4 bg-[#1A73E8] fixed top-0 left-0 w-full z-[9999] gap-5">
        {/* Logo */}
        <img
          src={KindimLogo}
          alt="Logo"
          className="h-20 w-20 cursor-pointer transition-all duration-500 ease hover:scale-125 hover:brightness-110 hover:hue-rotate-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(26,115,232,0.6)] hover:border-2 hover:border-white"
        />
        {/* Title */}
        <span className="text-white font-bold text-3xl">Kindim</span>
        {/* Login button */}
        <button className="ml-auto px-6 py-3 text-white border-0 rounded-sm bg-[#0F4EB3] cursor-pointer transition-all duration-500 ease hover:bg-white hover:text-[#0F4EB3]">
          Login
        </button>
    </header>
  );
}

export default Header;