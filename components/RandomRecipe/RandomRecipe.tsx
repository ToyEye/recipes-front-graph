"use client";

import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import RecipeList from "../RecipeList/RecipeList";

const RandomRecipe = () => {
  const { data, error, loading } = useQuery(queries.GET_RANDOM_RECIPES);
  return <RecipeList data={data} itemCount={3} loading={loading} />;
};

export default RandomRecipe;
