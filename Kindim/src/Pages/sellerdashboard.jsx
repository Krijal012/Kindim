import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function SellerDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
    
     <Header />

    
      <div className="flex pt-16 md:pt-20 pb-32">
    
        <aside className="hidden md:block w-64 bg-white border-r h-[calc(100vh-8rem)] sticky top-20">
          <div className="p-6 border-b">
            <h2 className="text-sm font-semibold text-gray-700">
              Seller Dashboard
            </h2>
            <p className="text-xs text-gray-500">Seller User</p>
          </div>

          <nav className="mt-4">
            <ul className="space-y-1">
              <li className="px-6 py-2 bg-blue-500 text-white rounded-r-full">
                Overview
              </li>
              <li className="px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                My Product
              </li>
              <li className="px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                My Order
              </li>
            </ul>
          </nav>
        </aside>

     
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <h1 className="text-xl font-semibold mb-6">
            Seller Dashboard
          </h1>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded shadow p-4">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-xl font-semibold mt-1">$12,458</p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <p className="text-sm text-gray-500">Total Sales</p>
              <p className="text-xl font-semibold mt-1">379</p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <p className="text-sm text-gray-500">Active Products</p>
              <p className="text-xl font-semibold mt-1">28</p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <p className="text-sm text-gray-500">Avg. Order Value</p>
              <p className="text-xl font-semibold mt-1">$34.45</p>
            </div>
          </div>

      
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
            <div className="lg:col-span-2 bg-white rounded shadow">
              <div className="p-4 border-b font-semibold">
                Recent Sale
              </div>

              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="p-3 text-left">Order ID</th>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-left">Qty</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-400">
                      No recent sales
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b font-semibold">
                Top Product
              </div>
              <div className="p-6 text-gray-400 text-sm">
                No data available
              </div>
            </div>
          </div>
        </main>
      </div>

   
      <Footer />
    </div>
  );
}
