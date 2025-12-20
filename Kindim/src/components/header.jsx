import KindimLogo from '../assets/Logo.png';

function Header({ show = true }) {
  return (
    <header
      className={`
        flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-8 sm:py-4 md:px-10 bg-[#1A73E8]
        fixed top-0 left-0 w-full z-[9999]
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <img
        src={KindimLogo}
        alt="logo"
        className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
      />

      <span className="text-white font-bold text-lg sm:text-2xl md:text-3xl">
        Kindim
      </span>

      <form className="ml-4 hidden sm:flex flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 rounded-md text-black outline-none"
        />
        <button
          type="submit"
          className="absolute left-0 top-0 bottom-0 px-3 text-gray-500 hover:text-gray-700"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </button>
      </form>

      <button className='ml-auto bg-[#3d87ff] text-black font-semibold text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-md shadow hover:bg-gray-100 active:scale-95 transition'>Logout</button>
    </header>
  );
}

export default Header;
