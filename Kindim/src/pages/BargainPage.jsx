import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OfferForm } from "../components/OfferForm";
import { ProductInfo } from "../components/ProductInfo";
import products from "../data/Products";

export function BargainPage({ product }){
    const productToDisplay = product || products[0];

    const handleSubmit = ({ proposedPrice, reason }) => {
        alert(`Offer of Rs. ${proposedPrice} submitted for ${productToDisplay.name}. Reason: ${reason || 'N/A'}`);
    };

    return(
        <>
            <Header />
            <main className="bg-gray-50 py-10 mt-20 min-h-screen">
                <div className="max-w-2xl mx-auto px-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Bargain</h1>
                    <ProductInfo 
                        productName={productToDisplay.name} 
                        originalPrice={productToDisplay.price} 
                        productImage={productToDisplay.image} 
                    />
                    <OfferForm onSubmit={handleSubmit} />
                </div>
            </main>
            <Footer />
        </>
    );
}