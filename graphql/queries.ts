import { gql } from "@apollo/client";

const getRecipesQuery = gql`
  query {
    recipes {
      name
      instructions
      ingredients
      country
    }
  }
`;

const queries = { getRecipes: getRecipesQuery };

export default queries;
