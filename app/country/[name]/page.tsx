import CountryDetails from "@/components/CountryDetails";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const page = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="country-details dark:bg-very-dark-blue-dm-bg dark:text-white-dm-text-lm-elements">
      <div className="flex flex-col gap-16">
        <div className="flex">
          <Link
            href={"/"}
            className="flex items-center gap-4 rounded-md px-8 py-1.5 dark:bg-dark-blue shadow-lg"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        </div>

        <CountryDetails name={name.toString()} />
      </div>
    </div>
  );
};

export default page;
