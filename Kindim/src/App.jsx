import './App.css'
import DashBoard from "./pages/DashBoard";
import CategoryPage from './pages/categorypage';
import ErrorPage from './errorpage';
// import ErrorPage from './pages/errorpage';

function App() {
  return (
    <ErrorPage />
  );

export default function App() {
  // To see other pages, you can swap <DashBoard /> with:
  // import LoginPage from "./pages/LoginPage"; -> <LoginPage />
  // import SignupPage from "./pages/SignupPage"; -> <SignupPage />
  return <DashBoard />;
}
