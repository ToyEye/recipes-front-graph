"use client";

import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import queries from "@/graphql/queries";

export const useSearch = (country: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data: dataAllRecipe, loading: loadingAllRecipe } = useQuery(
    queries.GET_RECIPES
  );

  const { data: dataByCountry, loading: loadingByCountry } = useQuery(
    queries.GET_RECIPE_BY_COUNTRY,
    {
      variables: { country },
    }
  );

  useEffect(() => {
    if (dataByCountry?.country) {
      setData(dataByCountry.country.recipes);
      console.log(dataByCountry.country.recipes);
    }

    setLoading(loadingByCountry);
  }, [dataByCountry, loadingByCountry]);

  useEffect(() => {
    if (dataAllRecipe) {
      setData(dataAllRecipe.recipes);
      console.log(dataAllRecipe.recipes);
    }
    setLoading(loadingAllRecipe);
  }, [dataAllRecipe, loadingAllRecipe]);

  return { data, loading };
};
