"use client";

import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";

const Recipe = ({ params }: { params: { id: string } }) => {
  const { data, loading } = useQuery(queries.GET_RECIPE_BY_ID, {
    variables: { id: params.id },
  });

  console.log(data?.recipe);
  return (
    <div>
      {data && <RecipeCard {...data?.recipe} />}
      {loading && <RecipeDetailsSkeleton />}
    </div>
  );
};

export default Recipe;
