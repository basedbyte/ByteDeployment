import React from "react";
import Image from "next/image";

interface MainViewProps {
  mode: "login" | "signup";
  onViewChange: (view: "main" | "more-options") => void;
}

const MainView = ({ mode, onViewChange }: MainViewProps) => {
  return (
    <div className="w-full flex flex-col items-center px-2 sm:px-4 md:px-8">
      <div className="mb-6">
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/assets/footerAssets/Vector (1).png" width={64} height={64} alt="BYTE logo" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold md:text-3xl text-black text-center mb-10">
        {mode === "login" ? "Log in to your account" : "Create a new account"}
      </h2>

      <div className="w-full flex flex-col items-center space-y-6">
        {["Google", "Twitter", "Discord", "Github"].map((provider) => (
          <button
            key={provider}
            className="flex items-center hover:bg-green-100 justify-start w-full max-w-md h-14 sm:h-[60px] border border-green-300 rounded-md py-2 px-4 transition"
          >
            <Image
              src={`/assets/modalAssets/${provider}.png`}
              width={30 }
              height={30}
              alt={provider}
              className="mr-3"
            />
            <span className="text-black">{provider}</span>
          </button>
        ))}

        <button
          className="flex items-center hover:bg-green-100 justify-start w-full max-w-md h-14 sm:h-[60px] border border-green-300 rounded-md py-2 px-4 transition"
          onClick={() => onViewChange("more-options")}
        >
          <Image
            src="/assets/modalAssets/MoreOp.png"
            width={30}
            height={30}
            alt="More Options"
            className="mr-3"
          />
          <span className="text-black">More Options</span>
        </button>
      </div>
    </div>
  );
};

export default MainView;
