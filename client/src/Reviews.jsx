import React from 'react';
import ReactDOM from 'react-dom';
var moment = require('moment');

const Reviews = ({review}) => (

    <div>
      <div className="image">
        <img src={review.userImage}></img>
      </div>
      <div className="username">
        {review.userName}
      </div>
      <div className="date">
        {moment(Date.parse(review.dateCreated)).format("MMMM YYYY")}
      </div>
      <div className="message">
        <p>{review.comment}</p>
      </div>
    </div>

)

const ReviewsList = (props) => (
  <div className="feed">
    <div className="reviews">
    {props.reviews.map((feedItem, i)=>
      <Reviews review={feedItem} key={i}/>
    )}
    </div>
  </div>
);

export default ReviewsList;

