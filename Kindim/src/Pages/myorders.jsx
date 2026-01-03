import Header from '../Components/header';
import Footer from '../Components/footer';
import { Sidebar } from '../Components/sidebar';
import { DataTable } from '../Components/datatable';

export function MyOrder() {
    const columns = ['Order ID', 'Customer', 'Product', 'Qty', 'Total', 'Status'];
    const data = [];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex pt-20">
                <Sidebar userType="seller" activeMenu="orders" />
                
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">My Order</h1>

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