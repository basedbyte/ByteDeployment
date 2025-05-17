  "use client";
  import React, { useState, useCallback } from "react";
  import MainView from "@components/mainView";
  import MoreOptionsView from "@components/moreOptions";
  import Wallet from "@components/wallet";
  import RoleSelection from "./roleSelection";
  import Profile from "./profile";


  interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "login" | "signup";
  }

  const AuthModal = ({ isOpen, onClose, mode }: AuthModalProps) => {
    const [currentView, setCurrentView] = useState<"main" | "more-options" | "wallet" | "roleSelection" | "profile">("main");
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const isRoleSelection = currentView === "roleSelection";

  const handleBackgroundClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        // Reset state before closing
        setFormData({ username: "", password: "" });
        setCurrentView("main");
        setShowPassword(false);
        onClose();
      }
    },
    [onClose]
  );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      },
      []
    );

    const togglePasswordVisibility = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowPassword((prev) => !prev);
    }, []);

    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleBackgroundClick}
      >
        <div className={`bg-white rounded-xl shadow-xl w-full transition-all duration-300 
            ${isRoleSelection ? "max-w-6xl " : "max-w-[600px]"} h-[650px] lg:h-[750px] overflow-hidden`}>
          <div className="p-8 flex flex-col items-center justify-center w-full h-full">
            {currentView === "main" && (
              <MainView mode={mode} onViewChange={setCurrentView} />
            )}
            {currentView === "more-options" && (
              <MoreOptionsView
                mode={mode}
                onViewChange={setCurrentView}
                formData={formData}
                onInputChange={handleInputChange}
                showPassword={showPassword}
                onTogglePassword={togglePasswordVisibility}
                onBack={() => setCurrentView("main")}
              />
            )}
            {currentView === "wallet" && (
              <div className="flex w-full flex-col">
                <div className="flex justify-between items center w-full mb-10" > 
                  <h2 className="text-xl text-black font-bold">Connect Wallet</h2>
                  <button
                    className="  h-[6 0px] text-black hover:text-green-500 transition"
                    onClick={() => setCurrentView("more-options")}> x
                  </button>
                </div>
                <Wallet 
                  onViewChange={setCurrentView}
                />
              </div>
            )}
            {currentView === "roleSelection" && (
              <RoleSelection
                onViewChange={setCurrentView}
                
              />
            )}
            {currentView === "profile" && (
              <Profile
              />
            )}
            {(currentView === "main" || currentView === "more-options" || currentView === "wallet") && (
            <div className="mt-6 text-xs text-gray-500 text-center w-[80%]">
              By using this website, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </div>
          )}    
          </div>
        </div>
      </div>
    );
  };

  export default AuthModal;
