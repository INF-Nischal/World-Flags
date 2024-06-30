"use client";

import { useState, useEffect } from "react";
import { getCountryByName } from "@/lib/data";
import Image from "next/image";
import CountUp from "react-countup";
import CountryDetailsSkeleton from "./skeletons/CountryDetailsSkeleton";

const CountryDetails = ({ name }: { name: string }) => {
  const [country, setCountry] = useState<any>(null);

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
          src={country.flag}
          alt="Country Flag"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full lg:w-[60%] flex flex-col justify-center gap-6">
        <h2 className="font-[800] text-2xl">{country.name}</h2>
        <div className="flex flex-col gap-12 justify-between lg:flex-row">
          <div className="flex flex-col gap-2">
            <p className="font-[600]">
              Native name:
              <span className="font-[300]"> {country.nativeName}</span>
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
              <span className="font-[300]">{country?.topLevelDomain}</span>
            </p>

            <p className="font-[600]">
              Currencies:{" "}
              {country.currencies?.map((currency: any) => (
                <span key={currency.name} className="font-normal">
                  {currency.name}
                </span>
              ))}
            </p>

            <p className="font-[600]">
              Languages:{" "}
              {country.languages?.map((language: any) => (
                <span key={language.name} className="font-normal">
                  {language.name}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="font-[600] mt-6 flex items-center gap-2 lg:gap-6">
          Border Countries:{" "}
          <div className="flex gap-4 flex-wrap">
            {country?.borders?.map((border: string) => (
              <span
                key={border}
                className="font-[300] rounded-md px-2 py-0.5 text-sm dark:bg-dark-blue"
              >
                {border}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
