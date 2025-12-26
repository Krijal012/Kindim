import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ErrorMiddle from "../components/errormiddle";

export function ErrorPage() {
  return (
    <>
      <Header />
      {/* Padding top to account for fixed header height */}
      <div className="pt-20 sm:pt-24 md:pt-32">
        <ErrorMiddle />
      </div>
      <Footer />
    </>
  );
}