import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section/Section";
import RandomRecipe from "../RandomRecipe/RandomRecipe";
import Image from "next/image";

const Hero = () => {
  return (
    <Section type="hero">
      <Heading
        className="text-4xl font-bold mb-4 md:text-5xl"
        text="Welcome to Recipe Collection"
        tag="h1"
      />

      <p className="text-gray-600 mb-3 md:text-xl">
        Discover a world of delicious recipes from around the globe.
      </p>

      <Image
        width={1600}
        height={600}
        src={"/img/recipes.avif"}
        alt="recipe book"
        className="mb-4 lg:mb-8"
      />

      <Heading
        className="text-2xl font-medium  mb-8 md:text-5xl"
        text="Random Recipes"
        tag="h2"
      />
      <RandomRecipe />
    </Section>
  );
};

export default Hero;
