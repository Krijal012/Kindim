import KindimLogo from '../assets/icons/logo-icon.png';

function Header() {
  return (
    <header className="
      flex items-center gap-4 px-6 py-3 bg-[#1A73E8]
      fixed top-0 left-0 w-full z-[9999]
      
      sm:px-8 sm:py-4
      md:px-10
    ">
      
      {/* Logo */}
      <img
        src={KindimLogo}
        alt="Logo"
        className="
          h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 
          cursor-pointer transition-all duration-500 ease
          hover:scale-125 hover:brightness-110 hover:hue-rotate-90
          hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(26,115,232,0.6)]
          hover:border-2 hover:border-white
        "
      />

      {/* Title */}
      <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
        Kindim Dashbord
      </span>

      
       <input 
    type="text" 
    placeholder="Search..." 
    class=" w-[50%] ml-60 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
     <button 
    class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  >Search</button>

      {/* Login Button */}
      <button className="
        ml-auto px-4 py-2 sm:px-6 sm:py-3
        text-sm sm:text-base
        text-white border-0 rounded-sm bg-[#0F4EB3]
        cursor-pointer transition-all duration-500 ease
        hover:bg-white hover:text-[#0F4EB3]
      ">
        Login
      </button>

    </header>
  );
}

export default Header;
