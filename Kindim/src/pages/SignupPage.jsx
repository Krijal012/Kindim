import profileIcon from "../assets/icons/profile.png";
import emailIcon from "../assets/icons/email.png";
import logoIcon from "../assets/icons/logo-icon.png";

import AuthBox from "../components/AuthBox";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import BluePanel from "../components/BluePanel";

export default function SignupPage() {
  return (
    <AuthBox>
     
      <div className="w-1/2 flex flex-col justify-center px-[60px]">
        <h1 className="text-[48px] font-bold mb-[30px] text-center">Signup</h1>

        <div className="w-full max-w-[380px] mx-auto">
          <InputField placeholder="Username" icon={profileIcon} />
          <InputField type="email" placeholder="Email" icon={emailIcon} />
          <PasswordField placeholder="Password" />
          <PasswordField placeholder="Confirm Password" />

          <button className="w-full py-[12px] bg-[#0d47c2] text-white rounded-[30px] mt-[10px] hover:scale-105 transition duration-300">
            Sign up
          </button>
          
        </div>
      </div>

      <BluePanel 
        buttonText="Login" 
        bottomText="Already have an account?" 
        icon={logoIcon} 
      />
    </AuthBox>
  );
}
