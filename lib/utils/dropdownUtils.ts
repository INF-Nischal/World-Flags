import { useEffect, RefObject } from "react";

export const handleClickOutside = (
  event: MouseEvent,
  dropdownRef: RefObject<HTMLDivElement>,
  setIsOpen: (isOpen: boolean) => void
) => {
  if (
    dropdownRef.current &&
    !dropdownRef.current.contains(event.target as Node)
  ) {
    setIsOpen(false);
  }
};

export const handleKeyPress = (
  event: KeyboardEvent,
  setIsOpen: (isOpen: boolean) => void
) => {
  if (event.key === "Escape") {
    setIsOpen(false);
  }
};

export const useDropdownEffect = (
  dropdownRef: RefObject<HTMLDivElement>,
  setIsOpen: (isOpen: boolean) => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) =>
      handleClickOutside(event, dropdownRef, setIsOpen);
    const handleKey = (event: KeyboardEvent) =>
      handleKeyPress(event, setIsOpen);

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [dropdownRef, setIsOpen]);
};
