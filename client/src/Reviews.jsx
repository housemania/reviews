import React from 'react';
import ReactDOM from 'react-dom';

const Reviews = ({review}) => (
  // return(
    <div>
      <div className="image">
        <img src={review.userImage}></img>
      </div>
      <div className="username">
        {review.userName}
      </div>
      <div className="date">
        {review.dateCreated}
      </div>
      <div className="message">
        <p>{review.comment}</p>
      </div>
    </div>
  // )
)

const ReviewsList = (props) => (
  <div className="feed">
    <div className="reviews">
    {props.reviews.map(feedItem =>
      <Reviews review={feedItem} />
    )}
    </div>
  </div>
);

export default ReviewsList;