import React from 'react';
import ReactDOM from 'react-dom';

const Ratings = ({averageRatings}) => (
  <div id="ratings">
    <div id="overall">{averageRatings.overall}</div>
    <div id="numReviews">{averageRatings.numReviews}</div>
    <div id="accuracy">Accuracy {averageRatings.accuracy}</div>
    <div id="communication">Communication {averageRatings.communication}</div>
    <div id="clean">Cleanliness {averageRatings.cleanliness}</div>
    <div id="location">Location {averageRatings.location}</div>
    <div id="checkIn">Check In {averageRatings.checkIn}</div>
    <div id="value">Value {averageRatings.value}</div>
  </div>
)

export default Ratings;

// {
//   "accuracy": "2.0",
//   "communication": "2.5",
//   "location": "3.0",
//   "checkIn": "2.5",
//   "value": "2.0",
//   "cleanliness": "2.0",
//   "overall": "2.5",
//   "numReviews": 15
// }