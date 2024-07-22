"use server";

import React from "react";
import CountryCard from "./CountryCard";
import { fetchCountries } from "@/lib/data";

interface CountryListProps {
  searchParams: { name?: string; region?: string };
}

const CountryList = async ({ searchParams }: CountryListProps) => {
  const countries = await fetchCountries(
    searchParams.name || "",
    searchParams.region || ""
  );

  return (
    <div className="grid grid-cols-1 gap-12 px-4 pb-8 md:grid-cols-2 lg:px-0 lg:grid-cols-4">
      {countries.length > 0 &&
        countries
          .slice(0, 8)
          .map((country: any) => (
            <CountryCard key={country.tld} country={country} />
          ))}
    </div>
  );
};

export default CountryList;
