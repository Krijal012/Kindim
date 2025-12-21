import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function UserManagement() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <Header />

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-16 md:top-20 left-0 bottom-0 w-60 bg-gray-100 border-r border-gray-300 py-6 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
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
      <main className="pt-20 md:pt-24 pb-48 px-4 md:px-10 md:ml-60">
        <h1 className="text-center mt-6 font-bold text-2xl md:text-3xl">
          User Management
        </h1>

        <div className="w-full bg-gray-200 mt-8 rounded-3xl shadow-md p-4 md:p-8 overflow-x-auto">
          <table className="min-w-[700px] w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
