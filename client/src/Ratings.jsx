import React from 'react';
import ReactDOM from 'react-dom';


const Ratings = ({averageRatings}) => (
  <div id="ratings">
    <div id="numReviews">{averageRatings.numReviews} Reviews</div>
    <div id="overall">{averageRatings.overall}</div>
    <div id="accuracy">Accuracy {averageRatings.accuracy}</div>
    <div id="communication">Communication {averageRatings.communication}</div>
    <div id="clean">Cleanliness {averageRatings.cleanliness}</div>
    <div id="location">Location {averageRatings.location}</div>
    <div id="checkIn">Check In {averageRatings.checkIn}</div>
    <div id="value">Value {averageRatings.value}</div>
  </div>
)

export default Ratings;
