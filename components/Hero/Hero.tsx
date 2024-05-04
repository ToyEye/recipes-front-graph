import Section from "../Section/Section";

import RandomRecipe from "../RandomRecipe/RandomRecipe";

const Hero = () => {
  return (
    <Section type="hero">
      <h1 className="text-4xl font-bold mb-4 md:text-5xl">
        Welcome to Recipe Collection
      </h1>
      <p className="text-gray-600 mb-8 md:text-xl">
        Discover a world of delicious recipes from around the globe.
      </p>

      <RandomRecipe />
    </Section>
  );
};

export default Hero;
