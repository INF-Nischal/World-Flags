import BackButton from "@/components/BackButton";
import CountryDetails from "@/components/CountryDetails";

const page = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="country-details dark:bg-very-dark-blue-dm-bg dark:text-white-dm-text-lm-elements">
      <div className="flex flex-col gap-16">
        <BackButton />
        <CountryDetails name={name.toString()} />
      </div>
    </div>
  );
};

export default page;
