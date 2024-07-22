"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function CountryCard({ country }: { country: any }) {
  return (
    <Link
      href={`/country/${country.name.official}`}
      className="w-[280px] flex flex-col rounded-[7px] shadow-md overflow-hidden bg-white-dm-text-lm-elements dark:bg-dark-blue dark:text-white-dm-text-lm-elements"
    >
      <div className="w-[280px] h-[160px] object-cover bg-white">
        <Image
          className="h-full w-full object-cover"
          src={`${country.flags.svg}`}
          width={280}
          height={160}
          alt="Country Flag"
        />
      </div>

      <div className="description p-4 flex flex-col gap-2">
        <h2 className="font-bold">{country.name.common}</h2>
        <span>
          Population: <CountUp end={country.population} duration={0.75} />
        </span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </Link>
  );
}
