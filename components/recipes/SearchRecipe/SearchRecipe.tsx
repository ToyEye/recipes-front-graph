"use client";

import React, { useState } from "react";
import Section from "../../Section/Section";
import SearchByCountry from "../SearchByCountry/SearchByCountry";

import RecipeList from "../RecipeList/RecipeList";
import { useSearch } from "@/app/hooks/useSearch";
import { useSearchParams } from "next/navigation";

const SearchRecipe = () => {
  const [country, setCountry] = useState("");

  const { data, loading } = useSearch(country);

  const getCountry = (country: string) => {
    setCountry(country);
  };

  return (
    <Section>
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Explore Recipes</h2>
        <SearchByCountry getCountry={getCountry} />

        <RecipeList data={data} itemCount={9} loading={loading} />
      </div>
    </Section>
  );
};

export default SearchRecipe;
