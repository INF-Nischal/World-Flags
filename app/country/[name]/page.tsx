import CountryDetails from "@/components/CountryDetails";
import React from "react";

const page = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="country-details">
      <CountryDetails name={name.toString()} />
    </div>
  );
};

export default page;
