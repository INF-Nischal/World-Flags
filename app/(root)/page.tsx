import Filter from "@/components/Filter";
import SearchBox from "@/components/SearchBox";
import CountryList from "@/components/CountryList";
import { Suspense } from "react";
import { CountryListSkeleton } from "@/components/skeletons/CountryCardSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: { name?: string; region?: string };
}) {
  return (
    <main className="main dark:bg-very-dark-blue-dm-bg">
      <div className="flex flex-col justify-between gap-8 pt-8 lg:flex-row">
        <SearchBox />
        <Filter />
      </div>
      <Suspense fallback={<CountryListSkeleton />}>
        <CountryList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
