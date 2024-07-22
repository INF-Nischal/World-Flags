import React from "react";

const CountryDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
      <div className="w-full h-[240px] lg:w-[720px] lg:h-[405px] shimmer bg-gray-300 rounded"></div>
      <div className="w-full lg:w-[60%] flex flex-col justify-center gap-6">
        <div className="h-10 bg-gray-300 shimmer w-1/2 rounded"></div>
        <div className="w-full flex flex-col gap-12 justify-between lg:flex-row">
          <div className="w-full flex flex-col gap-4">
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
            <div className="h-6 bg-gray-300 shimmer w-3/4 p-2 rounded"></div>
          </div>
        </div>
        <div className="h-6 bg-gray-300 shimmer w-1/4 mt-6 rounded"></div>
      </div>
    </div>
  );
};

export default CountryDetailsSkeleton;
