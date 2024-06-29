import React from "react";

const CountryCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm overflow-hidden animate-pulse bg-gray-200">
      <div className="h-[136px] w-full bg-gray-300"></div>
      <div className="description p-4 flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
