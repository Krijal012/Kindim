import Sidebar from "../components/profile/Sidebar";
import PersonalInfo from "../components/profile/PersonalInfo";


export default function Profile() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      <div className="flex gap-6">
             <Sidebar />
          <PersonalInfo />

     
      
      </div>
    </div>
  );
}
