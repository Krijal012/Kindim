import Header from '../Components/header';
import Footer from '../Components/footer';
import { Sidebar } from '../Components/sidebar';
import { DataTable } from '../Components/datatable';

export function MyProducts() {
    const columns = ['Product ID', 'Name', 'Category', 'Price', 'Stock', 'Sales', 'Status', 'Action'];
    const data = [];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex pt-20">
                <Sidebar userType="seller" activeMenu="products" />
                
                <div className="flex-1 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">My Products</h1>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Add Products
                        </button>
                    </div>

                    <div className="mb-4">
                        <input 
                            type="text"
                            placeholder="Search Product..."
                            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <DataTable columns={columns} data={data} />
                </div>
            </div>
            <Footer />
        </div>
    );
}