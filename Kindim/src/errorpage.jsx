import KindimLogo from './assets/Logo.png';
import KindimErrorImg from './assets/Errorpage.png';
 

function ErrorPage() {
  return (
    <>
 

<header className="flex items-center px-10 py-4 bg-[#1A73E8] fixed top-0 left-0 w-full z-[9999] gap-5">
  {/* Logo */}
  <img
    src={KindimLogo}
    alt="Logo"
    className="h-20 w-20 cursor-pointer transition-all duration-500 ease hover:scale-125 hover:brightness-110 hover:hue-rotate-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(26,115,232,0.6)] hover:border-2 hover:border-white"
  />

  {/* Title */}
  <span className="text-white font-bold text-3xl">Kindim</span>

  {/* Search Bar Container */}
  <form className="ml-10 flex flex-1 max-w-xl relative">
    {/* Search Icon */}
    <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>

    {/* Input */}
    <input
      type="text"
      placeholder="Search products..."
      className="w-full px-4 py-2 pl-12 rounded-md border-none outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-black"
    />
  </form>

  {/* Login button */}
  <button className="ml-6 px-6 py-3 text-white border-0 rounded-sm bg-[#0F4EB3] cursor-pointer transition-all duration-500 ease hover:bg-white hover:text-[#0F4EB3]">
    Login
  </button>
</header>



      {/* Middle Section (404 content) */}
      <section className="flex justify-between items-center px-20 py-40 gap-10">
        <div className="flex-1 text-left">
          <h1 className="text-8xl text-[#0F1FCF]">404</h1>
          <h3 className="text-5xl font-thin mt-2">Page Not Found</h3>

          <p className="text-2xl my-4">
            We couldn't find the page you were <br />
            looking for. It might have been <br />
            moved or deleted.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-8 py-4 border-0 text-xl cursor-pointer transition-all duration-500 ease hover:bg-black hover:text-white rounded">
              Reload Page
            </button>
            <button className="px-8 py-4 border-0 text-xl bg-[#0F4EB3] text-white cursor-pointer transition-all duration-500 ease hover:bg-white hover:text-[#0F4EB3] rounded">
              Go to HomePage
            </button>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={KindimErrorImg}
          alt="Error"
          className="max-w-[350px] cursor-pointer transition-all duration-500 ease hover:scale-125 hover:brightness-110 hover:hue-rotate-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(26,115,232,0.6)] hover:border-2 hover:border-white"
        />
      </section>

      
<section className="flex justify-between items-center px-20 py-40 gap-10 pb-36">
  {/* Your 404 content */}
</section>

<footer className="flex items-center px-10 py-2 bg-[#1A73E8] fixed bottom-0 left-0 w-full z-[9999] gap-5">
  {/* Left Footer Info */}S
  <div className="">
    <h3 className="text-xl font-bold mb-1 ml-1">Kindim</h3>  {/* smaller text */}
    <p className="text-sm leading-relaxed">
      Your trusted online marketplace for quality products at great prices.
    </p>
  </div>

  {/* Right Footer Quick Links */}
  <div className="flex-1 flex flex-col gap-1 md:items-end">
    <h3 className="text-xl font-bold mb-1">Quick Links</h3>  {/* smaller text */}
    {['Home', 'Products', 'About Us', 'Contact'].map(link => (
      <a
        key={link}
        href="#"
        className="text-sm hover:underline transition-all duration-300"
      >
        {link}
      </a>
    ))}
  </div>
</footer>



    </>
  );
}

export default ErrorPage;