import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function OrderManagement() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

    
      <Header />

      <div className="flex pt-16 md:pt-20 pb-48">

      
        <aside
          className={`fixed top-16 md:top-20 bottom-40 left-0 z-40 w-60 bg-gray-100 border-r border-gray-300 py-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <h3 className="text-lg font-semibold px-6 mb-3">
            Order Management
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

    
        <main className="w-full md:ml-60 px-4 md:px-10">
          <h1 className="text-center mt-6 md:mt-8 font-bold text-2xl md:text-3xl">
            Order Management
          </h1>

         
          <div className="hidden md:block bg-gray-200 mx-auto mt-8 rounded-3xl shadow-md p-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-base">
              <thead>
                <tr className="bg-gray-300">
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Customer</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
            </table>
          </div>

        
          <div className="md:hidden mt-6 space-y-4">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-gray-200 rounded-xl p-4 shadow"
              >
                <p><strong>ID:</strong> #{id}</p>
                <p><strong>Customer:</strong> John Doe</p>
                <p><strong>Date:</strong> 12/08/2025</p>
                <p><strong>Amount:</strong> $120</p>
                <p><strong>Status:</strong> Pending</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

     
    <Footer />
    </div>
  );
}
