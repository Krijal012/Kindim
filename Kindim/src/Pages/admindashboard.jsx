import Footer from "../Components/footer";
import Header from "../Components/header";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
     <Header />

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
     <Footer />
    </div>
  );
}

export default AdminDashboard;
