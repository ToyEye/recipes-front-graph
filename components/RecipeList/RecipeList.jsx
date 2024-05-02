"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";

const RecipeList = ({ req }) => {
  const { data, error, loading } = useQuery(req);
  console.log(data);

  const defaultImg = "https://generated.vusercontent.net/placeholder.svg";
  const backImg =
    "https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes";

  return (
    <>
      {data?.getRandomRecipes && (
        <ul className="grid grid-cols-1  md:grid-cols-3 gap-8">
          {data?.getRandomRecipes.map(
            ({ id, name, description, img, vote_average }) => {
              return (
                <li
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  key={id}
                >
                  <Image
                    alt="Recipe 1"
                    className="w-full h-48 object-cover"
                    height={250}
                    src={!img ? defaultImg : backImg + img}
                    style={{
                      aspectRatio: "400/250",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <div className="flex items-center mb-2">
                      {/* <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" /> */}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        {vote_average}
                      </span>
                    </div>
                    <p className="text-gray-600">{description}</p>
                    <Link
                      className="text-blue-500 hover:text-blue-700"
                      href="#"
                    >
                      View Recipe
                    </Link>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default RecipeList;
