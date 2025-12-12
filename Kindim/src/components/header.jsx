import KindimLogo from '../assets/Logo.png';

function Header({ show = true }) {
  return (
    <header
      className={`
        flex items-center gap-4 px-6 py-3 bg-[#1A73E8]
        fixed top-0 left-0 w-full z-[9999]
        sm:px-8 sm:py-4 
        md:px-10
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <img
        src={KindimLogo}
        alt="logo"
        className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20"
      />

      <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
        Kindim
      </span>

      <form className="ml-10 flex flex-1 max-w-xl relative">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-12 rounded-md text-black outline-none"
        />
      </form>

      <button className='ml-auto bg-[#3d87ff] text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 active:scale-95 transition'>Logout</button>
    </header>
  );
}

export default Header;
