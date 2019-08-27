import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewsList from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Nav from './Nav.jsx'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ratings: {},
      reviews: []
    }
  }
  componentDidMount() {
    this.getRatings(4);
    this.getReviews(4, 0);
  }
  // http://127.0.0.1:5000/reviews/76?offset=0&limit=7
  getReviews(houseId, page) {
    let currentPage = page || 1;
    $.ajax({
      type: "get",
      url: `http://localhost:5000/reviews/${houseId}?offset=${page}&limit=7`,
      contentTupe: "application/json",
      success: (data) => {
        console.log(data);
        this.setState({
          reviews: data
        })
      },
      error: () => {
        console.log('get error')
      }

    })
  }
  getRatings(num) {

    $.ajax({
      type: "get",
      url: "http://localhost:5000/ratings/" + num,
      contentTupe: "application/json",
      success: (data) => {
        this.setState({
          ratings: data
        })
      },
      error: () => {
        console.log('get error')
      }

    })

  }
  render() {
    return (
      <div>
        <div className="ratings">
          <Ratings averageRatings={this.state.ratings}/>
        </div>
        <div className="reviews">
          <ReviewsList reviews={this.state.reviews}/>
        </div>
        <div className="nav">
          <Nav numOfRatings={this.state.ratings.numReviews}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);