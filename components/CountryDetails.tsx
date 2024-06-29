"use client";

import { useState, useEffect } from "react";
import { getCountryByName } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import CountUp from "react-countup";

const CountryDetails = ({ name }: { name: string }) => {
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    async function getCountry() {
      const country = await getCountryByName(name);
      setCountry(country);
    }

    getCountry();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex">
        <Link
          href={"/"}
          className="flex items-center gap-4 border-2 rounded-md px-8 py-1.5"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>
      </div>

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
              <p className="font-bold">
                Native name:
                <span className="font-normal"> {country.nativeName}</span>
              </p>
              <p className="font-bold">
                Population:
                <span className="font-normal">
                  {" "}
                  <CountUp end={country.population} duration={1.75} />
                </span>
              </p>
              <p className="font-bold">
                Region:<span className="font-normal"> {country.region}</span>
              </p>
              <p className="font-bold">
                Sub-region:
                <span className="font-normal"> {country.subregion}</span>
              </p>
              <p className="font-bold">
                Capital:<span className="font-normal"> {country.capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Top Level Domain:{" "}
                <span className="font-normal">{country?.topLevelDomain}</span>
              </p>

              <p className="font-bold">
                Currencies:{" "}
                {country.currencies?.map((currency: any) => (
                  <span key={currency.name} className="font-normal">
                    {currency.name}
                  </span>
                ))}
              </p>

              <p className="font-bold">
                Languages:{" "}
                {country.languages?.map((language: any) => (
                  <span key={language.name} className="font-normal">
                    {language.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="font-bold mt-6 flex items-center gap-2 lg:gap-6">
            Borders:{" "}
            <div className="flex gap-4 flex-wrap">
              {country?.borders?.map((border: string) => (
                <span
                  key={border}
                  className="font-normal border-2 rounded-md px-4 py-1"
                >
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
