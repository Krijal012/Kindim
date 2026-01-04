import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Sidebar } from '../Components/sidebar';
import { DataTable } from '../Components/datatable';

export function SellerManagement() {
    const columns = ['ID', 'Name', 'Email', 'Role', 'Status', 'Action'];
    const data = [];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex pt-20">
                <Sidebar userType="admin" activeMenu="seller" />
                
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Seller Management</h1>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
