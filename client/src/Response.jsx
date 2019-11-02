import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
  word-wrap: break-word;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.375em;
  color: #484848;
`;
const ResponseTextDiv = styled.div`
  grid-area: responseUserName;
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
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
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
  color: #484848;
`;

const Response = (props) => (
  <ResponseContainer className="response">
    <div className="responseImage">
      <ResponseImage src={props.message.image}></ResponseImage>
    </div>
    <ResponseNameDiv className="respnseTittle">
      Response from {props.message.name}:
    </ResponseNameDiv>
    <ResponseTextDiv className="responsecomment">
      {props.message.comment}
    </ResponseTextDiv>
    <ResponseDate className="responseDate">
      {moment(props.message.dateCreated).format("MMMM YYYY")}
    </ResponseDate>
  </ResponseContainer>
);

export default Response;