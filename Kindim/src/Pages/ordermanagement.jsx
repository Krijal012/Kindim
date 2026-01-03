import Header from '../Components/header';
import Footer from '../Components/footer';
import { Sidebar } from '../Components/sidebar';
import { DataTable } from '../Components/datatable';

export function OrderManagement() {
    const columns = ['ID', 'Customer', 'Date', 'Amount', 'Status', 'Action'];
    const data = [];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex pt-20">
                <Sidebar userType="admin" activeMenu="order" />
                
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Management</h1>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
