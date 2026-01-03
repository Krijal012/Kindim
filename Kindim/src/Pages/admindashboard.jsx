import Header from '../Components/header';
import Footer from '../Components/footer';
import { Sidebar } from '../Components/sidebar';
import { StatCard } from '../Components/statcard';

export function AdminDashboard() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex pt-20">
                <Sidebar userType="admin" activeMenu="dashboard" />
                
                <div className="flex-1 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Total Users: 100" value="" />
                        <StatCard title="Total Orders: 100" value="" />
                        <StatCard title="Revenue: $ 5000" value="" />
                        <StatCard title="Total Sellers: 100" value="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}