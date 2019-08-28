import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewsList from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Nav from './Nav.jsx'

class App extends React.Component {
  constructor(props) {
    super();
    this.limit = 7;
    this.state = {
      houseId: 7,
      ratings: {},
      reviews: [],
      page: 0

    }
  }
  componentDidMount() {
    this.getRatings();
    this.getReviews(0);
  }
  // http://127.0.0.1:5000/reviews/76?offset=0&limit=7
  nextPage() {
    this.getReviews(this.state.page + this.limit);
  }
  backPage() {
    if (this.state.page > 0) {
      this.getReviews(this.state.page - this.limit);
    }
   }
  toPage(num) {
    const offset = num * this.limit;
    this.getReviews(offset);

  }
  getReviews(newPage) {
    $.ajax({
      type: "get",
      url: `http://localhost:5000/reviews/${this.state.houseId}?offset=${newPage}&limit=${this.limit}`,
      contentTupe: "application/json",
      success: (data) => {
        console.log(data)
        this.setState({
          reviews: data,
          page: newPage
        })
      },
      error: () => {
        console.log('get error')
      }

    })
  }
  getRatings() {
    $.ajax({
      type: "get",
      url: "http://localhost:5000/ratings/" + this.state.houseId,
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
          <Nav numOfPages={Math.ceil(this.state.ratings.numReviews / this.limit)}
              nextPage={this.nextPage.bind(this)}
              backPage={this.backPage.bind(this)}
              toPage={this.toPage.bind(this)}
              currentPage={Math.floor(this.state.page / 7)}
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