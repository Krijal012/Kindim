import { useState, useEffect } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Section from "../Components/Section";

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
      <Header show={showHeader} />

      {/* MAIN CONTENT */}
      <div className="mt-[112px] flex-grow">
        <Section />
      </div>

      {/* FOOTER (controlled by scroll) */}
      <Footer show={showFooter} />
    </div>
  );
}

export default DashBoard;
