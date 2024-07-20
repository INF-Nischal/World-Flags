"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function CountryCard({ country }: { country: any }) {
  return (
    <Link
      href={`/country/${country.name.common}`}
      className="flex flex-col rounded-[9px] shadow-md overflow-hidden bg-white-dm-text-lm-elements dark:bg-dark-blue dark:text-white-dm-text-lm-elements"
    >
      <Image
        src={`${country.flags.svg}`}
        alt="Country Flag"
        width={0}
        height={0}
        className="h-40 w-full object-cover"
      />

      <div className="description px-8 py-6 flex flex-col gap-2">
        <h2 className="font-bold">{country.name.common}</h2>
        <span>
          Population: <CountUp end={country.population} duration={1.75} />
        </span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </Link>
  );
}
