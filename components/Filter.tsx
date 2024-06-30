"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Button from "./Button";

interface FilterProps {
  handleRegion: (e: any) => void;
}

export default function Filter({ handleRegion }: FilterProps) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [regionKey, setRegionKey] = useState<string>("Filter by Region");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRegionChange = (region: string) => {
    setRegionKey(region);
    setIsOpen(false);
    handleRegion(region);
  };

  return (
    <div className="relative w-[240px] dark:text-white-dm-text-lm-elements">
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
