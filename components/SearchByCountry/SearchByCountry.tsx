"use client";

import React, { ChangeEvent } from "react";
import { useQuery } from "@apollo/client";

import queries from "@/graphql/queries";

type Props = {
  getCountry: (args: string) => void;
};

const SearchByCountry = ({ getCountry }: Props) => {
  const { data, loading } = useQuery(queries.GET_COUNTRIES);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    getCountry(selectedCountry);
  };

  return (
    <div>
      <label className="mr-2 text-sm" htmlFor="country-filter">
        Filter by Country:
      </label>
      <select
        id="country-filter"
        defaultValue="default"
        name="countries"
        required
        onChange={handleCountryChange}
      >
        <option className="w-48 md:w-64" disabled value="default">
          {loading ? "loading..." : "Select a country"}
        </option>
        {data?.countries &&
          data.countries
            .slice()
            .sort((a: { country: string }, b: { country: string }) =>
              a.country.localeCompare(b.country)
            )
            .map(({ id, country }: { id: string; country: string }) => {
              return <option key={id}>{country}</option>;
            })}
      </select>
    </div>
  );
};

export default SearchByCountry;
