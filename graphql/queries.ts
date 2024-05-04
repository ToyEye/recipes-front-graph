import { gql } from "@apollo/client";

const GET_RECIPES = gql`
  query {
    recipes {
      name
      description
      img
      vote_average
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
      img
    }
  }
`;

const GET_COUNTRIES = gql`
  {
    countries {
      id
      country
    }
  }
`;

const GET_RECIPE_BY_COUNTRY = gql`
  query ($country: String) {
    country(country: $country) {
      recipes {
        name
        description
        img
        vote_average
      }
    }
  }
`;

const queries = {
  GET_RECIPES: GET_RECIPES,
  GET_RANDOM_RECIPES: GET_RANDOM_RECIPES,
  GET_COUNTRIES: GET_COUNTRIES,
  GET_RECIPE_BY_COUNTRY: GET_RECIPE_BY_COUNTRY,
};

export default queries;
