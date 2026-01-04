import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { OfferForm } from "../components/OfferForm";
import { ProductInfo } from "../components/productinfo";
import img1 from "../assets/BeautyProducts/facewash.jpg";

export function BargainPage(){
    const handleSubmit = ({ proposedPrice }) => {
        alert(`Offer submitted for Rs. ${proposedPrice}`);
    };

    return(
        <>
            <Header />
            <main className="bg-gray-50 py-10 mt-20 min-h-screen">
                <div className="max-w-2xl mx-auto px-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Bargain</h1>
                    <ProductInfo 
                        productName="Facewash" 
                        originalPrice={450} 
                        productImage={img1} 
                    />
                    <OfferForm onSubmit={handleSubmit} />
                </div>
            </main>
            <Footer />
           
        </>
    );
}