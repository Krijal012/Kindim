export default function InputField({ type = "text", placeholder, icon }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mb-[20px] px-[15px] py-[12px] pr-[40px] rounded-[6px] border border-[#ccc] bg-[#f0f0f0] text-[16px] "
      style={{
        color:"black",
        backgroundImage: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "20px 20px",
        backgroundPosition: "right 10px center",
      }}
    />
  );
}