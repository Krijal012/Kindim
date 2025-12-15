import Footer from "../Components/footer";
import Header from "../Components/header";
import { OrderSummary } from "../Components/ordersummary";

function CartPage(){
    return(
        <>
            <Header show={true} />
            <main className="pt-28 pb-24 flex justify-end items-start min-h-screen">
                <div className="w-full max-w-sm mt-8 px-4">
                    <OrderSummary />
                </div>
            </main>
            <Footer show={true} />
        </>
    );
}

export default CartPage;
