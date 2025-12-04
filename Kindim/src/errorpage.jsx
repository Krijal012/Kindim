import KindimLogo from './assets/Logo.png';
import KindimErrorImg from './assets/Errorpage.png';

function ErrorPage() {
  return (
    <>
      {/* Header Section */}
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

      {/* Footer Section */}
      <footer className="flex justify-between items-start text-white py-10 px-20 bg-[#0F4EB3] gap-40">
        {/* Left Footer Info */}
        <div className="min-w-[200px]">
          <h3 className="text-3xl font-bold mb-4">Kindim</h3>
          <p className="text-lg leading-[1.5]">
            Your trusted online marketplace for quality products at great prices.
          </p>
        </div>

        {/* Right Footer Quick Links */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
          {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="no-underline text-white text-2xl p-[5px] transition-all duration-300 ease hover:underline hover:translate-x-[5px]"
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
