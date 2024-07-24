import React from "react";

interface ButtonProps {
  title: string;
  handleRegionChange: (region: string) => void;
}

const Button = ({ title, handleRegionChange }: ButtonProps) => {
  return (
    <button
      className="w-full px-6 py-2 text-start text-very-dark-blue-dm-bg dark:text-white-dm-text-lm-elements text-xs
      hover:bg-very-dark-blue-dm-bg hover:text-white-dm-text-lm-elements dark:hover:bg-white-dm-text-lm-elements dark:hover:text-very-dark-blue-dm-bg"
      onClick={() => handleRegionChange(title)}
    >
      {title}
    </button>
  );
};

export default Button;
