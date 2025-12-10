import profileIcon from "../assets/icons/profile.png";
import AuthBox from "../components/AuthBox";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import BluePanel from "../components/BluePanel";

export default function LoginPage() {
  return (
    
    <AuthBox>
       <BluePanel
        bottomText="Don't have an account?"
        buttonText="Sign up"
      />
      <div className="w-1/2 flex flex-col justify-center px-[60px]">
        <h1 className="text-[48px] font-bold mb-[30px] text-center">
          Login
        </h1>

        <div className="w-full max-w-[380px] mx-auto">
          <InputField placeholder="Username" icon={profileIcon} />
          <PasswordField placeholder="Password" />

          <button className="w-full py-[12px] bg-[#0d47c2] text-white rounded-[30px] mb-[15px]">
            Login
          </button>

          <div className="text-center text-blue-600 underline cursor-pointer">
            Forgot Password?
          </div>
        </div>
      </div>

     
    </AuthBox>
  );
}