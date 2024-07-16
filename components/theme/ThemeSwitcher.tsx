import React from "react";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="text-sm lg:text-md center gap-2 font-[600]"
      onClick={handleTheme}
    >
      <span>
        <FaMoon />
      </span>
      <span className="capitalize font-[600]">Dark Mode</span>
    </button>
  );
};

export default ThemeSwitcher;
