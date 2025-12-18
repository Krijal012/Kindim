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
        <h1 className=" text-black text-[48px] font-bold mb-[30px] text-center">
          Login
        </h1>

        <div className="w-full max-w-[380px] mx-auto">
          <InputField placeholder="Username" icon={profileIcon} />
          <PasswordField placeholder="Password" />

<button className="w-full py-[12px] bg-[#0d47c2] text-white rounded-[30px] mb-[15px] 
  hover:scale-105 
  transition duration-300
  hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]">
  Login
</button>


          <div className="no-underline hover:underline text-center text-blue-600 underline cursor-pointer">
            Forgot Password?
          </div>
        </div>
      </div>

     
    </AuthBox>
  );
}