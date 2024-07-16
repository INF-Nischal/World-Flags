import React from "react";

interface ButtonProps {
  title: string;
  handleRegionChange: (region: string) => void;
}

const Button = ({ title, handleRegionChange }: ButtonProps) => {
  return (
    <div>
      <button
        className="w-full px-4 py-2 text-start bg-[var(--background)] text-[var(--text)] hover:bg-[var(--hover)]"
        onClick={() => handleRegionChange(title)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
