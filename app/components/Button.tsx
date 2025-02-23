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
  const getButtonStyle = () => {
    switch (variant) {
      case "filled":
        return {
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          opacity: isLoading || disabled ? 0.5 : 1, 
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "all 0.2s ease-in-out",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "#000",
          border: "2px solid #000",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: isLoading || disabled ? 0.5 : 1,
          transition: "all 0.2s ease-in-out",
        };
      case "ghost":
        return {
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: isLoading || disabled ? 0.5 : 1,
          transition: "all 0.2s ease-in-out",
        };
      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "opacity 0.2s, box-shadow 0.2s",
        outline: "none",
        ...getButtonStyle(),
      }}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.opacity = "0.8"; 
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.opacity = "1"; 
      }}
      onFocus={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)"; 
      }}
      onBlur={(e) => {
        if (!disabled) e.currentTarget.style.boxShadow = "none"; 
      }}
    >
      {isLoading ? "読み込み中..." : children}
    </button>
  );
};

export default Button;





