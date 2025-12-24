export default function Orderhistorypage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-lg font-semibold">
           
            Kindim
          </div>

          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full rounded-md px-4 py-2 text-black outline-none"
            />
            <span className="absolute right-3 top-2 text-gray-500">🔍</span>
          </div>

          <div className="flex items-center gap-4">
           
            <button className="bg-blue-800 px-4 py-1.5 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <h2 className="text-xl font-semibold text-center mb-6">
          Order History
        </h2>

      <div className="mb-6 flex justify-start">
  <input
    type="text"
    placeholder="Search Orders"
    className="w-64 border rounded-md px-4 py-2 outline-none"
  />
</div>


        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-md" />
                <div>
                  <h3 className="font-semibold">Product Name</h3>
                  <p className="text-sm text-gray-500">Price</p>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm">
                buy again
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between">
          <div>
            <h4 className="font-semibold mb-1">Kindim</h4>
            <p className="text-sm max-w-xs">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
