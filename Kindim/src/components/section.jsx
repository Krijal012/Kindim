import KindimErrorImg from '../assets/Errorpage.png';

function Section(){
    return(
        <>   
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
        </>
    );
}

export default Section;
