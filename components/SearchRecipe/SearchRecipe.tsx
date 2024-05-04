"use client";

import React from "react";
import Section from "../Section/Section";
import SearchByCountry from "../SearchByCountry/SearchByCountry";

const SearchRecipe = () => {
  return (
    <Section>
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Explore Recipes</h2>
        <SearchByCountry />
      </div>
    </Section>
  );
};

export default SearchRecipe;
