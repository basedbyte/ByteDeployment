"use client";
import React from "react";
import Image from "next/image";

interface RoleSelectionProps {
  onViewChange: (view: "main" | "more-options" | "profile") => void;
}

const RoleSelection = ({ onViewChange }: RoleSelectionProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full overflow-auto">
      <div className="flex flex-col items-center w-full max-w-[99%] sm:max-w-5xl p-1 sm:p-2 md:p-3 lg:p-4 my-auto">
        {/* Cards - stack on mobile, side by side on md+ */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full justify-center">
          {/* Talent Column */}
          <div className="flex flex-col w-full max-w-full md:max-w-[48%] flex-1">
            {/* Talent Heading */}
            <h2 className="text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-700 text-center mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              Start contributing to Web3 projects and earn in crypto.
            </h2>
            
            {/* Talent Card */}
            <div className="flex flex-col bg-[#E0F2E9] rounded-lg md:rounded-xl lg:rounded-2xl shadow-sm md:shadow-md items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 w-full flex-grow">
              <div className="flex flex-row justify-center items-center w-full mb-1 md:mb-3 lg:mb-4 gap-2 md:gap-3 lg:gap-4">
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/modalAssets/talentPic1.png" 
                    width={150} 
                    height={150} 
                    alt="talentImage1" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/modalAssets/talentPic2.png" 
                    width={150} 
                    height={150} 
                    alt="talentImage2" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <ul className="text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-700 mt-1 md:mt-3 mb-1 md:mb-3 space-y-0.5 md:space-y-1.5 lg:space-y-2 w-full flex-grow">
                <li>✔️ Explore open bounties from real projects</li>
                <li>✔️ Build your on-chain portfolio</li>
                <li>✔️ Climb the ranks and unlock perks</li>
                <li>✔️ Get rewarded with crypto or tokens</li>
              </ul>
              <button
                className="bg-white text-green-700 font-semibold rounded-md px-1 sm:px-2 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-2.5 mt-2 md:mt-3 w-full hover:bg-green-50 transition flex items-center justify-center gap-1 text-[9px] sm:text-xs md:text-sm lg:text-base"
                onClick={() => onViewChange("profile")}
              >
                Continue as Talent <span aria-hidden>→</span>
              </button>
            </div>
          </div>
          
          {/* Client Column */}
          <div className="flex flex-col w-full max-w-full md:max-w-[48%] flex-1 mt-3 md:mt-0">
            {/* Client Heading */}
            <h2 className="text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-700 text-center mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              Post tasks, hire top talent, and scale your project.
            </h2>
            
            {/* Client Card */}
            <div className="flex flex-col bg-[#A7E7C5] rounded-lg md:rounded-xl lg:rounded-2xl shadow-sm md:shadow-md items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 w-full flex-grow">
              <div className="flex flex-row justify-center items-center w-full mb-1 md:mb-3 lg:mb-4 gap-2 md:gap-3 lg:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/modalAssets/clientPic1.png" 
                    width={150} 
                    height={150} 
                    alt="clientImage1" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/modalAssets/clientPic2.png" 
                    width={150} 
                    height={150} 
                    alt="clientImage2" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/modalAssets/clientPic3.png" 
                    width={150} 
                    height={150} 
                    alt="clientImage3" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <ul className="text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-700 mt-1 md:mt-3 mb-1 md:mb-3 space-y-0.5 md:space-y-1.5 lg:space-y-2 w-full flex-grow">
                <li>✔️ Launch tasks</li>
                <li>✔️ Reach thousands of Web3 contributors</li>
                <li>✔️ Manage payouts through smart contracts</li>
                <li>✔️ Transparent, secure, and decentralized</li>
              </ul>
              <button
                className="bg-black text-white font-semibold rounded-md px-1 sm:px-2 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-2.5 mt-2 md:mt-3 w-full hover:bg-gray-900 transition flex items-center justify-center gap-1 text-[9px] sm:text-xs md:text-sm lg:text-base"
                onClick={() => onViewChange("more-options")}
              >
                Continue as Client <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;