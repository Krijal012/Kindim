import Sidebar from "../components/profile/Sidebar";
import PersonalInfo from "../components/profile/PersonalInfo";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col">
      
      <Header />

      
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold mb-6">Profile</h1>

          <div className="flex gap-6">
            <Sidebar />
            <PersonalInfo />
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}
