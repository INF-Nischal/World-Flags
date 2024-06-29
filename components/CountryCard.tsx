"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function CountryCard({ country }: { country: any }) {
  return (
    <Link
      href={`/country/${country.name}`}
      className="flex flex-col rounded-lg shadow-sm overflow-hidden bg-white-dm-text-lm-elements"
    >
      <div className="h-[148px]">
        <Image
          src={`${country.flag}`}
          alt="Country Flag"
          width={0}
          height={0}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="description p-4 flex flex-col gap-2">
        <h2 className="font-bold">{country.name}</h2>
        <span>
          Population: <CountUp end={country.population} duration={1.75} />
        </span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </Link>
  );
}
