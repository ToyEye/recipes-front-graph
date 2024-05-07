"use client";

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";

const Recipe = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery(queries.GET_RECIPE_BY_ID, {
    variables: { id: params.id },
  });

  console.log(data?.recipe);
  return <div>{data && <RecipeCard {...data?.recipe} />}</div>;
};

export default Recipe;
