"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-4 rounded-md px-8 py-1.5 dark:bg-dark-blue shadow-lg mr-auto"
      onClick={() => router.back()}
    >
      <FaArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
