import React from 'react';

const Review = ({ rating, body, user }) => {
  return (
    <div className="review-show">
      <h5>{user.username}</h5>
      <p>{body}</p>
    </div>
  );
};
export default Review;
