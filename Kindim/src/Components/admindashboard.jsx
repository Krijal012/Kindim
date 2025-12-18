function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="w-full h-16 md:h-20 bg-blue-600 shadow-md fixed top-0 left-0 flex items-center px-4 md:px-8 z-50">
        <h1 className="text-white text-xl md:text-2xl font-bold">
          Kindim
        </h1>

        <button className="ml-auto bg-blue-800 px-3 py-1.5 md:px-4 md:py-2 rounded-md text-white text-sm md:text-base">
          Logout
        </button>
      </header>

      {/* BODY */}
      <div className="flex pt-16 md:pt-20 pb-44">

        {/* SIDEBAR (hidden on mobile) */}
        <aside className="hidden md:block w-60 bg-gray-100 border-r border-gray-300 py-6 fixed top-20 bottom-0 left-0">
          <h3 className="text-lg font-semibold px-6 mb-3">
            Admin
          </h3>

          <nav className="flex flex-col text-gray-700">
            <button className="px-6 py-3 text-left bg-blue-600 text-white rounded-r-full font-medium">
              Dashboard
            </button>

            <button className="px-6 py-3 text-left hover:bg-blue-600 hover:text-white rounded-r-full">
              User Management
            </button>

            <button className="px-6 py-3 text-left hover:bg-blue-600 hover:text-white rounded-r-full">
              Order Management
            </button>

            <button className="px-6 py-3 text-left hover:bg-blue-600 hover:text-white rounded-r-full">
              Seller Management
            </button>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:ml-60 px-4 md:px-10">
          <h1 className="text-center mt-6 md:mt-8 font-bold text-2xl md:text-3xl">
            Admin Dashboard
          </h1>

          <div className="bg-gray-200 rounded-2xl p-4 md:p-10 w-full max-w-7xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-gray-600">Total Users</p>
                <h2 className="text-3xl font-bold mt-2">100</h2>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-gray-600">Total Orders</p>
                <h2 className="text-3xl font-bold mt-2">100</h2>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-gray-600">Revenue</p>
                <h2 className="text-3xl font-bold mt-2">$5000</h2>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow">
                <p className="text-gray-600">Total Sellers</p>
                <h2 className="text-3xl font-bold mt-2">100</h2>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-blue-600 shadow-md fixed bottom-0 left-0 text-white px-6 py-6 z-50">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          <div>
            <h2 className="font-bold text-lg md:text-xl">
              Kindim
            </h2>
            <p className="mt-2 max-w-xs text-sm">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg md:text-xl">
              Quick Links
            </h2>
            <ul className="mt-2 text-sm space-y-1">
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

export default AdminDashboard;
