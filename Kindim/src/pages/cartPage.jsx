import Cart from "../components/cart";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";

export function CartPage(){
    return(
        <>
            <Header />
            <main className="bg-gray-50 py-10 mt-20 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl text-left font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
                    <Cart />
                </div>
            </main>
            <Footer />
        </>
    );
}