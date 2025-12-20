import { useState } from "react";
import eyeIcon from "../assets/icons/eye.png";
import eyeOffIcon from "../assets/icons/eye-off.png";

export default function PasswordField({ placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative mb-[20px]">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full px-[15px] py-[12px] pr-[40px] rounded-[6px] border border-[#ccc] bg-[#f0f0f0] text-[16px]"
      />
      <img
        src={show ? eyeIcon : eyeOffIcon}
        alt=""
        className="w-[20px] h-[20px] absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setShow(!show)}
      />
    </div>
  );
}
