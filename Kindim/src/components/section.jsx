import KindimErrorImg from '../assets/Errorpage.png';
import Button from './Button'; // Assuming you create a Button component

function Section() {
  return (
    <section
      className="
        flex flex-col md:flex-row justify-between items-center
        px-6 sm:px-10 md:px-20
        py-28 sm:py-32 md:py-40 
        gap-10 pt-[120px]
      "
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl sm:text-7xl md:text-8xl text-[#0F1FCF]">404</h1>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-thin mt-2">Page Not Found</h3>

        <p className="text-base sm:text-xl md:text-2xl my-4 leading-relaxed">
          We couldn't find the page you were <br className="hidden sm:block" />
          looking for. It might have been <br />
          moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Reload Page
          </Button>

          <Button variant="primary" onClick={() => { /* navigate to homepage */ }}>
            Go to HomePage
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <img
        src={KindimErrorImg}
        alt="Error"
        className="
          max-w-[220px] sm:max-w-[280px] md:max-w-[350px] 
          cursor-pointer transition-all duration-500 ease
          hover:scale-125 hover:brightness-110 hover:hue-rotate-90
          hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(26,115,232,0.6)]
          hover:border-2 hover:border-white
        "
      />
    </section>
  );
}

export default Section;
