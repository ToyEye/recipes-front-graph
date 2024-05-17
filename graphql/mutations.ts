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
    $confirmPassword: String
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      name
      email
      token
    }
  }
`;

const LOGIN = gql`
  mutation ($email: String, $password: String) {
    signin(email: $email, password: $password) {
      name
      email
      token
    }
  }
`;

const mutation = {
  CHANGEVOTE: CHANGEVOTE,
  SIGNUP: SIGNUP,
  LOGIN: LOGIN,
};

export default mutation;
