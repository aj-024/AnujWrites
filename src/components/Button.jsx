import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`
        px-4 py-2 rounded-lg font-medium shadow-sm 
        ${bgColor} ${textColor} 
        hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 
        transition duration-200 ${className}
      `}
    >
      {children}
    </button>
  );
}
