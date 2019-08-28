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
      reviews: [],
      page: 0
    }
  }
  componentDidMount() {
    this.getRatings(4);
    this.getReviews(4);
  }
  // http://127.0.0.1:5000/reviews/76?offset=0&limit=7
  nextPage() {
    this.setState({
      page: this.state.page + 7
    })
    this.getReviews();
  }
  backPage() {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 7
      })
    }
    this.getReviews();
  }
  toPage(num) {
    const limit = 7;
    const offset = (num - 1) * limit;
    this.setState({
      page: offset
    })
    this.getReviews();
  }
  getReviews(houseId) {

    $.ajax({
      type: "get",
      url: `http://localhost:5000/reviews/${houseId}?offset=${this.state.page}&limit=7`,
      contentTupe: "application/json",
      success: (data) => {
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
    console.log(this.state.page);
    return (
      <div>
        <div className="ratings">
          <Ratings averageRatings={this.state.ratings}/>
        </div>
        <div className="reviews">
          <ReviewsList reviews={this.state.reviews}/>
        </div>
        <div className="nav">
          <Nav numOfRatings={this.state.ratings.numReviews}
              nextPage={this.nextPage.bind(this)}
              backPage={this.backPage.bind(this)}
              toPage={this.toPage.bind(this)}
          />
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);