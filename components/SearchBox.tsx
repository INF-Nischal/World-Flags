import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchBoxProps {
  handleSearch: (e: any) => void;
}

export default function SearchBox({ handleSearch }: SearchBoxProps) {
  return (
    <div className="relative flex items-center dark:text-white-dm-text-lm-elements">
      <span className="absolute left-6">
        <FaMagnifyingGlass />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-[480px] pl-16 py-3 rounded-md focus:outline-none shadow-md dark:bg-dark-blue dark:text-white-dm-text-lm-elements"
        onChange={handleSearch}
      />
    </div>
  );
}
