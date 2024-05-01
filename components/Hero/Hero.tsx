import React from "react";
import Section from "../Section/Section";
import RecipeList from "@/components/RecipeList/RecipeList";

import { useQuery } from "@apollo/client";
import queries from "@/graphql/queries";

const Hero = () => {
  // const { data, error, loading } = useQuery(queries.GET_RANDOM_RECIPES);
  // console.log(data && data.getRandomRecipes);
  return (
    <Section type="hero">
      <h1 className="text-4xl font-bold mb-4 md:text-5xl">
        Welcome to Recipe Collection
      </h1>
      <p className="text-gray-600 mb-8 md:text-xl">
        Discover a world of delicious recipes from around the globe.
      </p>

      <RecipeList req={queries.GET_RANDOM_RECIPES} />
    </Section>
  );
};

export default Hero;
