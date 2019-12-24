import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LineThrough = styled.div`
  border-bottom: 1px solid #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 40px 40px;
`;
const TextDiv = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const NumReviewsDiv = styled.div`
  word-wrap: break-word;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  padding-top: 2px;
  padding-bottom: 2px;
`;
const OverallContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 100px;
`;
const OverallRating = styled.img`
  width: 140px;
  margin: auto;
`;
const EachRating = styled.img`
  width: 100px;
`;

const imgUrls = {
  "1.0": "http://127.0.0.1:5000/rating1star.jpg",
  "1.5": "http://127.0.0.1:5000/rating1AndHalfstar.jpg",
  "2.0": "http://127.0.0.1:5000/rating2star.jpg",
  "2.5": "http://127.0.0.1:5000/rating2AndHalfstar.jpg",
  "3.0": "http://127.0.0.1:5000/rating3star.jpg",
  "3.5": "http://127.0.0.1:5000/rating3AndHalfstar.jpg",
  "4.0": "http://127.0.0.1:5000/rating4star.jpg",
  "4.5": "http://127.0.0.1:5000/rating4AndHalfstar.jpg",
  "4.0": "http://127.0.0.1:5000/rating4star.jpg"

}

const Ratings = ({ averageRatings }) => (
  <div>
    <OverallContainer>
      <NumReviewsDiv id="numReviews">{averageRatings.numReviews} Reviews
      </NumReviewsDiv>
      <OverallRating src={imgUrls[averageRatings.overall]}></OverallRating>
    </OverallContainer>
    <LineThrough></LineThrough>
    <TextDiv id="ratings">
    <RatingsContainer>
      <div id="accuracy">Accuracy</div>
      <EachRating src={imgUrls[averageRatings.accuracy]}></EachRating>
      <div id="communication">Communication</div>
      <EachRating src={imgUrls[averageRatings.communication]}></EachRating>
      <div id="clean">Cleanliness</div>
      <EachRating src={imgUrls[averageRatings.cleanliness]}></EachRating>
      <div id="location">Location</div>
      <EachRating src={imgUrls[averageRatings.location]}></EachRating>
      <div id="checkIn">Check In</div>
      <EachRating src={imgUrls[averageRatings.checkIn]}></EachRating>
      <div id="value">Value</div>
      <EachRating src={imgUrls[averageRatings.value]}></EachRating>
      </RatingsContainer>
    </TextDiv>

  </div>
)

Ratings.propTypes = {
  averageRatings: PropTypes.shape({
    numReviews: PropTypes.number,
    overall: PropTypes.string,
    accuracy: PropTypes.string,
    communication: PropTypes.string,
    cleanliness: PropTypes.string,
    location: PropTypes.string,
    checkIn: PropTypes.string,
    value: PropTypes.string,
  }).isRequired
};

export default Ratings;
