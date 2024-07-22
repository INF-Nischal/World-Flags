"use client";

import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const debounced = useDebouncedCallback((value) => {
    const newSearchQuery = new URLSearchParams(searchParams.toString());

    if (value.length > 0) {
      newSearchQuery.set("name", value);
    } else {
      newSearchQuery.delete("name");
    }
    router.replace(`${pathname}?${newSearchQuery.toString()}`);
  }, 1000);

  useEffect(() => {
    const name = searchParams.get("name");
    setSearchQuery(name || "");
  }, [searchParams]);

  return (
    <div className="relative flex items-center dark:text-white-dm-text-lm-elements">
      <span className="absolute left-6">
        <FaMagnifyingGlass />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-[480px] pl-16 py-3 rounded-md shadow-md dark:bg-dark-blue dark:text-white-dm-text-lm-elements"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
          debounced(e.target.value);
        }}
      />
    </div>
  );
}
