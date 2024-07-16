"use client";

import { useState, useEffect } from "react";
import { getCountryByName } from "@/lib/data";
import Image from "next/image";
import CountUp from "react-countup";
import CountryDetailsSkeleton from "./skeletons/CountryDetailsSkeleton";
import Link from "next/link";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borderCountries: string[];
}

const CountryDetails = ({ name }: { name: string }) => {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const getCountry = async () => {
      const country = await getCountryByName(name);
      setCountry(country);
    };

    getCountry();
  }, [name]);

  if (!country) {
    return <CountryDetailsSkeleton />;
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
      <div className="w-full h-[240px] lg:w-[720px] lg:h-[360px]">
        <Image
          src={country.flags.svg}
          alt="Country Flag"
          width={500}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-full lg:w-[60%] flex flex-col justify-center gap-6">
        <h2 className="font-[800] text-2xl">{country.name.common}</h2>
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="flex flex-col gap-2">
            <p className="font-[600]">
              Native name:
              <span className="font-[300]"> {country.name.official}</span>
            </p>
            <p className="font-[600]">
              Population:
              <span className="font-[300]">
                {" "}
                <CountUp end={country.population} duration={1.75} />
              </span>
            </p>
            <p className="font-[600]">
              Region:<span className="font-[300]"> {country.region}</span>
            </p>
            <p className="font-[600]">
              Sub-region:
              <span className="font-[300]"> {country.subregion}</span>
            </p>
            <p className="font-[600]">
              Capital:<span className="font-[300]"> {country.capital}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[600]">
              Top Level Domain:{" "}
              <span className="font-[300]">{country.tld}</span>
            </p>

            <p className="font-[600]">
              Currencies:{" "}
              {Object.entries(country?.currencies).map(([key, value]) => (
                <span key={key} className="font-normal">
                  {value.name}
                </span>
              ))}
            </p>

            <p className="font-[600]">
              Languages:{" "}
              {Object.entries(country.languages).map(([key, value]) => (
                <span key={key} className="font-normal">
                  {value}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="font-[600] mt-6 flex">
          <div className="w-56 lg:w-40">Border Countries: </div>
          <div className="flex gap-4 flex-wrap">
            {country?.borderCountries?.map((border: string) => (
              <Link
                href={"/country/" + border}
                key={border}
                className="font-[300] rounded-md px-2 py-0.5 text-sm dark:bg-dark-blue"
              >
                {border}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
