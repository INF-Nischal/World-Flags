"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { useDropdownEffect } from "@/lib/utils/dropdownUtils";

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

  useEffect(() => {
    const region = searchParams.get("region");
    setRegionKey(region || "Filter by Region");
  }, [searchParams]);

  return (
    <div
      ref={dropdownRef}
      className="relative w-[198px] dark:text-white-dm-text-lm-elements"
    >
      <button
        className="w-full flex justify-between items-center h-[48px] py-3 px-6 gap-4 bg-white shadow-md rounded-md dark:bg-dark-blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs">{regionKey}</span>
        <span className="center">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-[198px] flex flex-col gap-0.5 bg-white-dm-text-lm-elements mt-3 rounded-sm shadow-md overflow-hidden dark:bg-dark-blue"
          >
            {regions.map((region: string) => (
              <Button
                key={region}
                title={region}
                handleRegionChange={handleRegionChange}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
