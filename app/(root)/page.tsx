import Filter from "@/components/Filter";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";
import { CountryListSkeleton } from "@/components/skeletons/CountryCardSkeleton";
import CountryList from "@/components/CountryList";

export default async function Home({
  searchParams,
}: {
  searchParams: { name?: string | ""; region?: string | "" };
}) {
  return (
    <main className="main dark:bg-very-dark-blue-dm-bg">
      <div className="flex flex-col justify-between gap-8 pt-4 lg:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBox />
          <Filter />
        </Suspense>
      </div>

      <Suspense fallback={<CountryListSkeleton />}>
        <CountryList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
