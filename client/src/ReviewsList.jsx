import React from 'react';
import Reviews from './Reviews';

const ReviewsList = (props) => (
  <div className="feed">
   <div className="reviews">
   {props.reviews.map((feedItem, i)=>
     <Reviews review={feedItem} key={i} searchTerm={props.searchTerm}/>
   )}
   </div>
 </div>
);

export default ReviewsList;