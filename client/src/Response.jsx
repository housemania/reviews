import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

const ResponseContainer = styled.div`
  display: grid;
  grid-area: response;
  grid-template-columns: 75px auto;
  grid-template-rows: auto auto auto
  grid-template-areas:
    "responseImg responseUserName"
    "space  responseText"
    "space  responseDate"
`;
const ResponseNameDiv = styled.div`
  grid-area: responseUserName;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.375em;
`;
const ResponseTextDiv = styled.div`
  grid-area: responseUserName;
  margin-top: 20px;
  font-size: 16px;
`;
const ResponseImage = styled.img`
  grid-area: responseImg;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%
`;
const ResponseDate = styled.div`
  margin-top: 15px;
  grid-area: responseDate;
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
`;

const Response = ({ message }) => (
  <ResponseContainer className="response">
    <div className="responseImage">
      <ResponseImage src={message.image}></ResponseImage>
    </div>
    <ResponseNameDiv className="respnseTittle">
      Response from {message.name}:
    </ResponseNameDiv>
    <ResponseTextDiv className="responsecomment">
      {message.comment}
    </ResponseTextDiv>
    <ResponseDate className="responseDate">
      {moment(message.dateCreated).format("MMMM YYYY")}
    </ResponseDate>
  </ResponseContainer>
);

Response.propTypes = {
  message: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    comment: PropTypes.string,
    dateCreated: PropTypes.string,
  }).isRequired
};

export default Response;