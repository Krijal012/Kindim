import React from "react";
import forgotImg from "./buy.jpg"; 

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-[1100px] h-[90vh] bg-white rounded-2xl shadow-lg flex justify-center items-center">
        <div className="w-full flex justify-between px-12">
          <div className="flex-1 flex justify-start">
            <img src={forgotImg} alt="Password Illustration" className="w-[550px] h-auto" />
          </div>

          <div className="flex-1 text-left mt-48">
            <h2 className="text-3xl mb-5">Your Password?</h2>

            <div className="flex items-center border border-gray-300 rounded-lg p-3 mb-8 bg-gray-100 w-4/5">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent outline-none text-base"
              />
              <span className="ml-2 text-xl">✉️</span>
            </div>

            <button className="w-[150px] py-3 rounded-full bg-blue-600 text-white text-base hover:bg-blue-800 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
