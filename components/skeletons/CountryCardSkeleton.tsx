import React from "react";

export const CountryCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm overflow-hidden animate-pulse bg-gray-200">
      <div className="h-48 w-full bg-gray-300"></div>
      <div className="description px-8 py-6 flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export const CountryListSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-12 px-4 pb-8 md:grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-12">
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
      <CountryCardSkeleton />
    </div>
  );
};
