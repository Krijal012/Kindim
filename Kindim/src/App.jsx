import RewardDashboard from "./pages/RewardDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <RewardDashboard />
      </main>
      <Footer />
    </div>
  );
}
