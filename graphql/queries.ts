import { gql } from "@apollo/client";

const GET_RECIPES = gql`
  query {
    recipes {
      name
      instructions
      ingredients
      country
    }
  }
`;

const GET_RANDOM_RECIPES = gql`
  query GetRandomRecipes {
    getRandomRecipes {
      name
      vote_average
      description
      id
    }
  }
`;

const queries = {
  GET_RECIPES: GET_RECIPES,
  GET_RANDOM_RECIPES: GET_RANDOM_RECIPES,
};

export default queries;
