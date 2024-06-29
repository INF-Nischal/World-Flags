"use client";

import Filter from "@/components/Filter";
import SearchBox from "@/components/SearchBox";
import { Suspense, useEffect, useState } from "react";
import { fetchCountries } from "@/lib/data";
import CountryCard from "@/components/CountryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetchCountries();
      setCountries(response);
    }

    getData();
  }, []);

  const handleSearch = (e: any) => {
    setSearchFilter(e.target.value);
  };

  const handleRegion = (region: string) => {
    setRegionFilter(region);
  };

  return (
    <main className="main">
      <div className="flex flex-col justify-between gap-8 pt-8 lg:flex-row">
        <SearchBox handleSearch={handleSearch} />
        <Filter handleRegion={handleRegion} />
      </div>
      <div className="w-full grid grid-cols-1 gap-12 px-4 pb-8 md:grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-16">
        <Suspense fallback={<div>Loading...</div>}>
          {countries
            .filter((country: any) =>
              country.region.toLowerCase().includes(regionFilter.toLowerCase())
            )
            .filter((country: any) =>
              country.name.toLowerCase().includes(searchFilter.toLowerCase())
            )
            .slice(0, 8)
            .map((country: any) => (
              <CountryCard key={country} country={country} />
            ))}
        </Suspense>
      </div>
    </main>
  );
}
