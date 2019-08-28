import React from 'react';
import ReactDOM from 'react-dom';
var moment = require('moment');

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }
 
  render(){

    return(
      <div>
        <div className="image">
          <img src={this.props.review.userImage}></img>
        </div>
        <div className="username">
          {this.props.review.userName}
        </div>
        <div className="date">
          {moment(Date.parse(this.props.review.dateCreated)).format("MMMM YYYY")}
        </div>
        <div className="message">
          {this.props.review.comment.split('\n').map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>
          })}
        </div>
      </div>
    )

  }
}

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

