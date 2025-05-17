"use client";

import React from "react";
import Image from "next/image";

const Onboarding = () => {
  return (
    <div className="relative w-full min-h-auto overflow-hidden">
      {/* Green Gradient Background */}
      <div
        className="absolute inset-0 h-[351px] z-0 rounded-[40px]"
        style={{
          background:
            "linear-gradient(to bottom, #00E676 45%, #61C791 73%, #BBF7D0 100%)",
        }}
      />

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E4F1F] leading-tight mb-20">
            Earn Bounties. Post<br />
            Tasks. Get Paid In<br />
            <span className="text-[#BBF7D0]">Crypto.</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Connect With Global Clients, Complete Tasks, <br className="hidden sm:inline" />
            And Get Paid Securely In Cryptocurrency <br />
            All On A Decentralized Platform.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-full mx-auto md:mx-0 mt-4">
            <input
              type="text"
              placeholder="Search jobs, talent, or skills..."
              className="w-full py-3 pl-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#00E676] text-white p-2 rounded-full hover:bg-[#00cc68] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <Image
              src="/assets/homeAssets/globe at home hahahlk 2 (1).png"
              alt="Crypto Globe"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
