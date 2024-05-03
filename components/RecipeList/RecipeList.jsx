"use client";

import React from "react";
import { useQuery } from "@apollo/client";

import RecipeItemSkeleton from "@/app/lib/skeletons/RecipeItemSkeleton";

import mutation from "@/graphql/mutations";
import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = ({ req }) => {
  const { data, error, loading } = useQuery(req);

  return (
    <>
      <ul className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {loading ? (
          Array(3)
            .fill(null)
            .map((d, i) => <RecipeItemSkeleton key={i} />)
        ) : (
          <>
            {data?.getRandomRecipes.map(
              ({ id, name, description, img, vote_average }) => {
                return (
                  <RecipeItem
                    key={id}
                    img={img}
                    id={id}
                    name={name}
                    description={description}
                    vote_average={vote_average}
                  />
                );
              }
            )}
          </>
        )}
      </ul>
    </>
  );
};

export default RecipeList;
