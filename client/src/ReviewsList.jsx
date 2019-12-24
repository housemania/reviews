import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Message from './Message.jsx';
import Response from './Response.jsx';


const ReviewContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "user"
    "message"
    "response"
    "line"
`;
const UserContainer = styled.div`
  display: grid;
  grid-area: user;
  grid-template-columns: 75px 150px;
  grid-template-row: auto auto;
  grid-template-areas:
    "userPhoto userName"
`;

const ParentTextDiv = styled.div`
  grid-area: message;
`;
const TextDiv = styled.div`
  grid-area: message;
  font-size: 16px;
  line-height: 1.375em;
  color: #484848;
`;

const NameDiv = styled.div`
  grid-area: userName;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
`;
const DateDiv = styled.div`
  margin-top: 25px;
  grid-area: userName;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.2857142857142858em;
`;
const Image = styled.img`
  grid-row: 1 / 4;
  width: 50px;
  height: 50px;
  border-radius: 50%
`;
const LineThrough = styled.div`
  grid-area: line;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const BoldText = (props) => (
  props.text.map((item, i) => {
    if (i === props.text.length - 1) {
      return <span>{item}</span>
   } else {
      return <span>{item}<b>{props.keyword}</b></span>
    }
  })
);

const ReviewsList = (props) => (
  <div className="feed">
    <div className="reviews">
      {props.reviews.map((feedItem, i)=>
        <Reviews review={feedItem} key={i} searchTerm={props.searchTerm}/>
      )}
    </div>
  </div>
);

class Reviews extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    let response;
    if (this.props.review.response.comment !== '') {
      response = <Response message={this.props.review.response}/>
    } else {
      response = null;
    }
    let message;
    if (this.props.review.comment.length < 320 || this.props.searchTerm.length > 0) {
      let text;
      if (this.props.searchTerm !== '') {
        const searchItem = this.props.searchTerm
        const split = this.props.review.comment.split(this.props.searchTerm);
        text =  <BoldText text={split} keyword={searchItem}/>
      } else {
        text = <p>{this.props.review.comment}</p>
      }
      message =
         <ParentTextDiv className="message">
            <TextDiv>
             {text}
            </TextDiv>
          </ParentTextDiv>
    } else {
      message = <Message message={this.props.review.comment}/>
    }

    return(
      <ReviewContainer className="review">
        <UserContainer>
          <div className="image">
            <Image src={this.props.review.userImage}></Image>
          </div>
            <NameDiv className="username">
              {this.props.review.userName}
            </NameDiv>
          <DateDiv className="date">
            {moment(Date.parse(this.props.review.dateCreated)).format("MMMM YYYY")}
          </DateDiv>

        </UserContainer>
        <span>{message}</span>
        {response}
        <LineThrough></LineThrough>
      </ReviewContainer>
    )

  }
}

export default ReviewsList;