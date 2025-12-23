import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/Section";

function DashBoard() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;

      // HEADER LOGIC
      if (currentScroll > lastScrollY) {
        setShowHeader(false);    // hide on scroll DOWN
      } else {
        setShowHeader(true);     // show on scroll UP
      }

      // FOOTER LOGIC (show only at bottom)
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

      setShowFooter(atBottom);

      setLastScrollY(currentScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER (controlled by scroll) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Header className="" />
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-[112px] flex-grow">
        <Section />
      </div>

      {/* FOOTER — FADE IN ONLY AT BOTTOM */}
      <div
        className={`transition-all duration-300 
        ${showFooter ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Footer className="" />
      </div>
    </div>
  );
}

export default DashBoard;
