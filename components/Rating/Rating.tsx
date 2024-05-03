import React from "react";
import RatingStars from "react-rating-stars-component";

const Rating = ({ rating = 0, size = 24, id = "", handleVoteChange }) => {
  const ratingChanged = (newRating: number) => {
    handleVoteChange(id, newRating.toString());
  };

  return (
    <RatingStars
      count={5}
      value={5}
      size={size}
      activeColor="#F87719"
      onChange={ratingChanged}
    />
  );
};

export default Rating;
