const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Footer({ show = true }) {
  return (
    <>
      <footer
        className={`
          bg-[#1A73E8] text-white px-4 py-3 sm:px-6 sm:py-4 fixed bottom-0 left-0 w-full z-50
          transition-transform duration-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]
          ${show ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex flex-row justify-between items-center sm:items-start gap-4 max-w-7xl mx-auto">
          
          {/* Left */}
          <div className="text-left flex-1">
            <h3 className="text-base font-bold sm:text-xl">Kindim</h3>
            <p className="text-[10px] sm:text-sm leading-tight text-blue-100 mt-1 max-w-[200px] sm:max-w-md">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-1 text-right sm:text-left min-w-fit">
            <h3 className="hidden sm:block text-lg font-bold sm:text-xl mb-1">Quick Links</h3>
            <div className="flex flex-wrap justify-end sm:justify-start gap-x-3 gap-y-1 sm:flex-col sm:gap-1">
              {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[10px] sm:text-sm hover:underline hover:text-gray-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
