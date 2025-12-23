import { CartItem } from "./components/WishCart";
import DashBoard from "./pages/DashBoard";
import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WishList from "./pages/WishList";


export default function App() {
  // To see other pages, you can swap <DashBoard /> with:
  // import LoginPage from "./pages/LoginPage"; -> <LoginPage />
  // import SignupPage from "./pages/SignupPage"; -> <SignupPage />
  return <WishList />;
}