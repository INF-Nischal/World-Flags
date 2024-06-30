"use client";

import { FaMoon } from "react-icons/fa6";

export default function Header() {
  const handleTheme = () => {
    const root = document.querySelector(".root");
    if (root?.classList.contains("dark")) {
      root.classList.remove("dark");
    } else {
      root?.classList.add("dark");
    }
  };

  return (
    <header className="header dark:bg-dark-blue dark:text-white-dm-text-lm-elements">
      <h1 className="text-md lg:text-2xl font-[800]">Where in the world?</h1>
      <button
        className="text-sm lg:text-md center gap-2 font-[600]"
        onClick={handleTheme}
      >
        <span>
          <FaMoon />
        </span>
        <span className="capitalize font-[600]">Dark Mode</span>
      </button>
    </header>
  );
}
