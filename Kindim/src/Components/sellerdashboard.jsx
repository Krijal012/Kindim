import React from "react";

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-white">


      <header className="w-full h-16 md:h-20 bg-blue-600 shadow-md fixed top-0 left-0 flex items-center px-4 md:px-8 z-50">
        <h1 className="text-white text-xl md:text-2xl font-bold">
          Kindim
        </h1>

        <button className="ml-auto bg-blue-800 px-3 py-1.5 md:px-4 md:py-2 rounded-md text-white text-sm md:text-base">
          Logout
        </button>
      </header>

 
      <div className="flex pt-16 md:pt-20 pb-44">

     
        <aside className="hidden md:block w-60 bg-gray-100 border-r border-gray-300 py-6 fixed top-20 bottom-40 left-0">
          <h3 className="text-lg font-semibold px-6 mb-3">
            Seller
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
            Seller Dashboard
          </h1>

          {/* TABLE WRAPPER */}
          <div className="w-full bg-gray-200 mx-auto mt-8 rounded-3xl shadow-md p-4 md:p-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-300">
                  <th className="px-4 md:px-6 py-3 text-left">ID</th>
                  <th className="px-4 md:px-6 py-3 text-left">Name</th>
                  <th className="px-4 md:px-6 py-3 text-left">Email</th>
                  <th className="px-4 md:px-6 py-3 text-left">Role</th>
                  <th className="px-4 md:px-6 py-3 text-left">Status</th>
                  <th className="px-4 md:px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
            </table>
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
            <p className="text-sm mt-2 max-w-xs">
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
