import BackButton from "@/components/BackButton";
import CountryDetails from "@/components/CountryDetails";
import CountryDetailsSkeleton from "@/components/skeletons/CountryDetailsSkeleton";
import { Suspense } from "react";

const page = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="country-details dark:bg-very-dark-blue-dm-bg dark:text-white-dm-text-lm-elements">
      <div className="flex flex-col gap-16">
        <BackButton />
        <Suspense fallback={<CountryDetailsSkeleton />}>
          <CountryDetails name={name.toString()} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
