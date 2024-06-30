import React from "react";

interface ButtonProps {
  title: string;
  handleRegionChange: (region: string) => void;
}

const Button = ({ title, handleRegionChange }: ButtonProps) => {
  return (
    <div>
      <button
        className="w-full px-4 py-2 text-start hover:bg-slate-100 rounded-sm hover:dark:bg-very-dark-blue-dm-bg"
        onClick={() => handleRegionChange(title)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
