import logoIcon from "../assets/icons/logo-icon.png";

export default function BluePanel({ bottomText, buttonText }) {
  return (
    <div className="w-1/2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A73E8] to-[#0F4EB3] rounded-tr-[70px] flex flex-col justify-center items-center text-white">
        <img
          src={logoIcon}
          alt="logo"
          className="w-[80px] h-[80px] mb-[25px]"
        />

        <h2 className="text-[36px] font-bold leading-[44px] text-center mb-[20px]">
          Hello,<br />Welcome to Kindim
        </h2>

        <p className="text-[16px] mb-[10px]">{bottomText}</p>

        <button className="px-[30px] py-[10px] bg-black text-white rounded-[25px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
