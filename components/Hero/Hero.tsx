import Section from "../Section/Section";

import RandomRecipe from "../RandomRecipe/RandomRecipe";
import Heading from "../Heading/Heading";

const Hero = () => {
  return (
    <Section type="hero">
      <Heading
        className="text-4xl font-bold mb-4 md:text-5xl"
        text="Welcome to Recipe Collection"
        tag="h1"
      />

      <p className="text-gray-600 mb-8 md:text-xl">
        Discover a world of delicious recipes from around the globe.
      </p>

      <RandomRecipe />
    </Section>
  );
};

export default Hero;
