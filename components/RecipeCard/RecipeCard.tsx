import React from "react";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string;
};

const RecipeCard = ({
  name,
  description,
  img,
  ingredients,
  instructions,
}: Props) => {
  const defaultImg = "https://generated.vusercontent.net/placeholder.svg";
  const backImg =
    "https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes";

  return (
    <Section>
      <Heading text={name} className="text-3xl font-bold mb-4 md:text-4xl" />
      <div>
        <Image
          src={!img ? defaultImg : backImg + img}
          alt={name}
          className="w-full md:w-[720px] lg:w-[660px] object-contain rounded-2xl   "
          height={250}
          width={400}
        />
      </div>
    </Section>
  );
};

export default RecipeCard;
