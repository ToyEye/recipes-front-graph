import { gql } from "@apollo/client";

const CHANGEVOTE = gql`
  mutation ($id: ID, $newVote: String) {
    changeVote(id: $id, newVote: $newVote) {
      id
      vote_average
    }
  }
`;

const SIGNUP = gql`
  mutation (
    $name: String
    $email: String
    $password: String
    $comfirmPassword: String
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      confirmPassword: $comfirmPassword
    ) {
      name
      email
    }
  }
`;

const mutation = {
  CHANGEVOTE: CHANGEVOTE,
  SIGNUP: SIGNUP,
};

export default mutation;
