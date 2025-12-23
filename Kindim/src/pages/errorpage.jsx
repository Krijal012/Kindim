import { Footer } from "../Components/footer";
import { Header } from "../Components/header";
import KindimErrorImg from "../assets/Errorpage.png"

function ErrorPage(){
    return(
        <>
            <Header />
            {/* middle section (404 error) */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 py-12 md:py-20 max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-800">404</h1>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Page Not Found</h3>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We couldn't find the page you were <br />
                        looking for. It might have been <br />
                        moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Reload Page
                        </button>
                        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            Go to HomePage
                        </button>
                    </div>
                </div>

                <img 
                    src={KindimErrorImg} 
                    alt="Error" 
                    className="w-64 h-64 md: w-80 md: h-80 lg: w-96 lg: h-96 object-contain"
                />
            </section>
            <Footer />
        </>
    )
}
export default ErrorPage;