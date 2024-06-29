import { FaMoon } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="header">
      <h1 className="text-md lg:text-2xl font-[800]">Where in the world?</h1>
      <button className="text-sm lg:text-md center gap-2 font-[600]">
        <span>
          <FaMoon />
        </span>
        <span>Dark Mode</span>
      </button>
    </header>
  );
}
