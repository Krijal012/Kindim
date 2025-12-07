import logoIcon from "../assets/icons/logo-icon.png";

export default function BluePanel({ buttonText, bottomText }) {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-[#1A73E8] to-[#0F4EB3] rounded-tl-[70px] text-white p-[40px]">
      
      <img src={logoIcon} alt="Logo" className="w-[80px] h-[80px] mb-[20px]" />

      <h2 className="text-[36px] font-bold text-center mb-[20px]">
        Hello,<br />Welcome to Kindim
      </h2>

      <p className="text-[16px] mb-[30px] text-center">{bottomText}</p>

      <button
        className="px-[30px] py-[10px] bg-black text-white rounded-[25px] hover:bg-gray-800 transition"
        onClick={() => console.log("Button clicked!")}
      >
        {buttonText}
      </button>
    </div>
  );
}
