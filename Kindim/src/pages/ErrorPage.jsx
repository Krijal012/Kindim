
import ErrorMiddle from "../components/ErrorMiddle";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";

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