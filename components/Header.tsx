"use client";

import ThemeSwitcher from "./theme/ThemeSwitcher";

export default function Header() {
  return (
    <header className="header dark:bg-dark-blue">
      <h1 className="text-md lg:text-2xl font-[800] dark:text-white-dm-text-lm-elements">
        Where in the world?
      </h1>
      <ThemeSwitcher />
    </header>
  );
}
