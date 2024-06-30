"use client";

import Filter from "@/components/Filter";
import SearchBox from "@/components/SearchBox";
import { useEffect, useState } from "react";
import { fetchCountries } from "@/lib/data";
import CountryCard from "@/components/CountryCard";
import CountryCardSkeleton from "@/components/skeletons/CountryCardSkeleton";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetchCountries();
      setCountries(response);
      setLoading(false);
    }

    getData();
  }, []);

  const handleSearch = (e: any) => {
    setSearchFilter(e.target.value);
  };

  const handleRegion = (region: string) => {
    setRegionFilter(region);
  };

  if (loading) {
    return (
      <main className="main dark:bg-very-dark-blue-dm-bg">
        <div className="flex flex-col justify-between gap-8 pt-8 lg:flex-row">
          <SearchBox handleSearch={handleSearch} />
          <Filter handleRegion={handleRegion} />
        </div>
        <div className="w-full grid grid-cols-1 gap-12 px-4 pb-8 md:grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <CountryCardSkeleton key={index} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="main dark:bg-very-dark-blue-dm-bg">
      <div className="flex flex-col justify-between gap-8 pt-8 lg:flex-row">
        <SearchBox handleSearch={handleSearch} />
        <Filter handleRegion={handleRegion} />
      </div>
      <div className="w-full grid grid-cols-1 gap-12 px-4 pb-8 md:grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-16">
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
      </div>
    </main>
  );
}
