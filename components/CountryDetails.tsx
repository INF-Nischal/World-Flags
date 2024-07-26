import { getCountryByName } from "@/lib/actions/countryActions";
import { Country } from "@/lib/definitions/countryDefinitions";
import Image from "next/image";
import Link from "next/link";

const CountryDetails = async ({ name }: { name: string }) => {
  const country: Country = await getCountryByName(name);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
      <div className="w-full h-[240px] lg:w-[720px] lg:h-[405px]">
        <Image
          src={country.flags.svg}
          alt="Country Flag"
          width={240}
          height={240}
          className="w-full h-full object-contain"
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
                {country.population.toLocaleString()}
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
                  {value}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="font-[600] mt-6 flex flex-col gap-2 lg:flex-row lg:gap-0">
          <div className="w-36 lg:w-40">Border Countries: </div>
          <div className="flex items-center gap-4 flex-wrap">
            {country?.borderCountries?.map((border: string) => (
              <Link
                href={"/country/" + border}
                key={border}
                className="font-[300] rounded-sm px-6 py-[4px] text-sm shadow-md dark:bg-dark-blue"
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
