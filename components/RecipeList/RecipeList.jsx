"use client";

import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";

import RecipeItemSkeleton from "@/app/lib/skeletons/RecipeItemSkeleton";
import Rating from "../Rating/Rating";
import mutation from "@/graphql/mutations";

const RecipeList = ({ req }) => {
  const { data, error, loading } = useQuery(req);

  const defaultImg = "https://generated.vusercontent.net/placeholder.svg";
  const backImg =
    "https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes";

  const [changeVoteMutation, { data: voteData }] = useMutation(
    mutation.changeVote
  );
  console.log(voteData);
  const handleVoteChange = async (id, newVote) => {
    try {
      const { data } = await changeVoteMutation({
        variables: { id, newVote },
      });
      console.log("Vote changed successfully", data);
    } catch (error) {
      console.error("Error changing vote", error);
    }
  };

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
                  <li
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                    key={id}
                  >
                    <Image
                      alt={`Recipe ${name}`}
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
                        <Rating
                          rating={vote_average}
                          id={id}
                          handleVoteChange={handleVoteChange}
                        />
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
          </>
        )}
      </ul>
    </>
  );
};

export default RecipeList;
