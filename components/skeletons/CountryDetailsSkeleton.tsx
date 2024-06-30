import React from "react";

const CountryDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
      <div className="w-full h-[240px] lg:w-[720px] lg:h-[360px] animate-pulse bg-gray-300"></div>
      <div className="w-full lg:w-[60%] flex flex-col justify-center gap-6">
        <div className="h-10 bg-gray-300 animate-pulse w-1/2"></div>
        <div className="w-full flex flex-col gap-12 justify-between lg:flex-row">
          <div className="w-full flex flex-col gap-4">
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
            <div className="h-6 bg-gray-300 animate-pulse w-3/4 p-2"></div>
          </div>
        </div>
        <div className="h-6 bg-gray-300 animate-pulse w-1/4 mt-6"></div>
      </div>
    </div>
  );
};

export default CountryDetailsSkeleton;
