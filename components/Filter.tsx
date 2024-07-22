"use client";

import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";
import { useDropdownEffect } from "@/utils/dropdownUtils";

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const regions = [
    "Remove Filter",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [regionKey, setRegionKey] = useState<string>("Filter by Region");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleRegionChange = (region: string) => {
    const newSearchQuery = new URLSearchParams(searchParams);
    setRegionKey(region);
    setIsOpen(false);

    if (region === "Remove Filter") {
      newSearchQuery.delete("region");
      router.replace(`${pathname}}`);
      setRegionKey("Filter by Region");
    } else if (region !== "Filter by Region") {
      newSearchQuery.set("region", region);
    } else {
      newSearchQuery.delete("region");
    }

    router.replace(`${pathname}?${newSearchQuery.toString()}`);
  };

  useDropdownEffect(dropdownRef, setIsOpen);

  return (
    <div
      ref={dropdownRef}
      className="relative w-[240px] dark:text-white-dm-text-lm-elements"
    >
      <button
        className="w-full py-3 px-1 center gap-12 bg-white shadow-md rounded-md dark:bg-dark-blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        {regionKey}
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="absolute w-[240px] flex flex-col gap-0.5 bg-white-dm-text-lm-elements mt-3 rounded-md shadow-md overflow-hidden dark:bg-dark-blue">
          {regions.map((region: string) => (
            <Button
              key={region}
              title={region}
              handleRegionChange={handleRegionChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
