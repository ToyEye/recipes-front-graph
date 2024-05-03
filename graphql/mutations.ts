import { gql } from "@apollo/client";

const changeVote = gql`
  mutation ($id: ID, $newVote: String) {
    changeVote(id: $id, newVote: $newVote) {
      id
      vote_average
    }
  }
`;

const mutation = {
  changeVote: changeVote,
};

export default mutation;
