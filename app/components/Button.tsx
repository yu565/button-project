"use client";

import React from "react";

type ButtonProps = {
  variant?: "filled" | "outline" | "ghost";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  onClick,
  children,
  disabled = false,
  isLoading = false,
}) => {
  const baseStyle = "px-6 py-2 rounded-lg text-lg font-bold transition-all duration-200";
  const disabledStyle = "opacity-50 cursor-not-allowed";
  
  const variantStyles = {
    filled: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    ghost: "bg-white text-black hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${disabled ? disabledStyle : ""}`}
      disabled={disabled}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"></path>
          </svg>
          読み込み中...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;




