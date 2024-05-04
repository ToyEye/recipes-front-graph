"use client";

import React, { useState } from "react";
import Section from "../Section/Section";
import SearchByCountry from "../SearchByCountry/SearchByCountry";
import { useQuery } from "@apollo/client";
import queries from "@/graphql/queries";
import RecipeList from "../RecipeList/RecipeList";

const SearchRecipe = () => {
  const [country, setCountry] = useState("");

  const { data: dataByCountry, loading: loadingByCountry } = useQuery(
    queries.GET_RECIPE_BY_COUNTRY,
    {
      variables: { country },
    }
  );

  const { data, loading } = useQuery(queries.GET_RECIPES);

  const getCountry = (country: string) => {
    setCountry(country);
  };

  return (
    <Section>
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Explore Recipes</h2>
        <SearchByCountry getCountry={getCountry} />

        <RecipeList
          data={
            !dataByCountry?.country
              ? data?.recipes
              : dataByCountry?.country?.recipes
          }
          itemCount={6}
          loading={!dataByCountry?.country ? loading : loadingByCountry}
        />
      </div>
    </Section>
  );
};

export default SearchRecipe;
