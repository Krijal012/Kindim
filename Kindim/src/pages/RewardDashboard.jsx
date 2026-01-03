import React from "react";
import wheelImg from "../assets/icons/wheel.png";

export default function RewardDashboard() {
  return (
    <div className="min-h-screen bg-white flex justify-center p-5">
      <div className="w-full max-w-5xl border-[3px] border-blue-500 p-5">
        
    
        <h2 className="text-center text-xl font-bold mb-5">
          Your Reward Dashboard
        </h2>

        <div className="bg-gray-200 rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm">Your Gem Balance</p>
            <p className="text-red-600 font-semibold">1000 Gems</p>
            <p className="text-sm">
              Equivalent to Rs 25.00 (50 Gems = Rs 1)
            </p>
          </div>

          <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800">
            Collect Gems
          </button>
        </div>

       
        <h3 className="text-center font-semibold mt-6 mb-2">
          Spin the Wheel Challenge
        </h3>


        <div className="flex justify-center my-6">
          <img
            src={wheelImg}
            alt="Spin Wheel"
            className="w-44 h-44"
          />
        </div>

        <div className="flex justify-center mt-2">
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Spin Now
          </button>
        </div>

        <p className="text-center font-semibold mt-4">
          You got a real gun for free
        </p>
      </div>
    </div>
  );
}
