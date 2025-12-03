function Footer() {
    return (
        <>
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
            {["Home", "Products", "About Us", "Contact"].map((link) => (
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

export default Footer;
