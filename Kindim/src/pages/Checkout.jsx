import Header from "../components/header";
import Footer from "../components/footer";

import ShippingSection from "../components/ShippingSection";
import OrderSummary from "../components/OrderSummary";
import PaymentMethod from "../components/PaymentMethod";

export default function Checkout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 overflow-y-auto flex justify-center">
        <div className="w-[1200px] px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          <div className="flex gap-12">
            <ShippingSection />

            <div className="w-[320px] self-start">
              <OrderSummary />
              <PaymentMethod />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
