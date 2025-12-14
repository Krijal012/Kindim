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
          bg-[#1A73E8] text-white px-6 py-4 fixed bottom-0 left-0 w-full
          transition-transform duration-300
          ${show ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          
          {/* Left */}
          <div className="text-left">
            <h3 className="text-lg font-bold sm:text-xl">Kindim</h3>
            <p className="text-xs sm:text-sm leading-tight">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-1 text-left sm:text-left">
            <h3 className="text-lg font-bold sm:text-xl">Quick Links</h3>
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-xs sm:text-sm hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
