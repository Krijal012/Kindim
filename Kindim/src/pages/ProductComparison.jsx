import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  "price",
  "brand",
  "screenSize",
  "RAM",
  "storage",
  "batteryLife",
  "operatingSystem",
  "waterResistance",
  "wirelessCharging",
  "warranty",
  "includedAccessories",
];

const featureLabels = {
  price: "Price",
  brand: "Brand",
  screenSize: "Screen Size",
  RAM: "RAM",
  storage: "Storage",
  batteryLife: "Battery Life",
  operatingSystem: "Operating System",
  waterResistance: "Water Resistance",
  wirelessCharging: "Wireless Charging",
  warranty: "Warranty",
  includedAccessories: "Included Accessories",
};

const products = [
  {
    name: "Product 1",
    price: "$999",
    brand: "Brand A",
    screenSize: "6.1 inch",
    RAM: "8 GB",
    storage: "128 GB",
    batteryLife: "24h",
    operatingSystem: "OS 1",
    waterResistance: "IP68",
    wirelessCharging: "Yes",
    warranty: "1 year",
    includedAccessories: "Charger, Earphones",
  },
  {
    name: "Product 2",
    price: "$899",
    brand: "Brand B",
    screenSize: "6.5 inch",
    RAM: "6 GB",
    storage: "256 GB",
    batteryLife: "30h",
    operatingSystem: "OS 2",
    waterResistance: "IP67",
    wirelessCharging: "No",
    warranty: "2 years",
    includedAccessories: "Charger",
  },
  {
    name: "Product 3",
    price: "$799",
    brand: "Brand C",
    screenSize: "6.2 inch",
    RAM: "4 GB",
    storage: "64 GB",
    batteryLife: "20h",
    operatingSystem: "OS 3",
    waterResistance: "IP65",
    wirelessCharging: "No",
    warranty: "6 months",
    includedAccessories: "Charger",
  },
];

export default function ProductComparison() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Product Comparison</h1>
          <p className="text-gray-600 mt-2">
            Compare features, specifications, and prices side-by-side to make an informed decision.
          </p>
        </div>

        <div className="flex justify-end mb-6 gap-2">
          <input
            type="text"
            placeholder="Search for product to add..."
            className="border rounded px-3 py-1 w-64 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-[200px_repeat(3,220px)] border-t border-l">
          <div className="border-r">
            <div className="font-bold p-2 border-b">Features</div>
            {features.map((feature) => (
              <div key={feature} className="py-2 px-2 border-b">
                {featureLabels[feature]}
              </div>
            ))}
          </div>

          {products.map((product, idx) => (
            <div key={idx} className="border-r">
              <div className="flex items-center gap-2 p-2 border-b">
                <div className="bg-gray-300 w-10 h-10 rounded"></div>
                <div>
                  <div className="font-bold">{product.name}</div>
                  <div className="text-gray-500">{product.price}</div>
                </div>
              </div>

              {features.map((feature) => (
                <div key={feature} className="py-2 px-2 border-b">
                  {product[feature]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
