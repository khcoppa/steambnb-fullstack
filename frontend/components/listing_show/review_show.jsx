import React from 'react';

const Review = ({ rating, body, user }) => {
  debugger
  return (
    <div className="review-show">
    <h5>{user.username}</h5>
    <ul>
    <li>Rating: { rating }</li>
    <li>{ body }</li>
    </ul>
    </div>
  );
};
export default Review;
