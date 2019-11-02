import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewsList from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Nav from './Nav.jsx';
import Search from './Search.jsx';
import styled from 'styled-components';

const SearchDiv = styled.div`
  float: right;
  margin-right: 100px;
  margin-top: 5px;
`;


class App extends React.Component {
  constructor(props) {
    super();
    this.limit = 7;
    this.state = {
      houseId: 7,
      ratings: {},
      reviews: [],
      page: 0,
      length: 0
    }
    this.searchTerm = '';
    this.length = 0;
  }
  componentDidMount() {
    this.getRatings();
    this.getReviews(0);
  }
  nextPage() {
    this.getReviews(this.state.page + this.limit);
  }
  backPage() {
    if (this.state.page > 0) {
      this.getReviews(this.state.page - this.limit);
    }
   }
  search(term) {
    this.searchTerm = term;
    this.toPage(0);

  }
  toPage(num) {

    const offset = num * this.limit;
    this.getReviews(offset);
    // this.getRatings();
  }
  getReviews(newPage) {
    let currentUrl;
    let secondUrl;
    if (this.searchTerm === '') {
      currentUrl = `http://localhost:5000/reviews/${this.state.houseId}?offset=${newPage}&limit=${this.limit}`
      secondUrl = `http://localhost:5000/totalReviews/${this.state.houseId}`
    } else {
      currentUrl = `http://localhost:5000/reviews/${this.state.houseId}?offset=${newPage}&limit=${this.limit}&search=${this.searchTerm}`
      secondUrl = `http://localhost:5000/totalReviews/${this.state.houseId}?search=${this.searchTerm}`
    }
    if (newPage === 0) {
      $.ajax({
        type: "get",
        url: secondUrl,
        contentTupe: "application/json",
        success: (data) => {
          this.setState({
            length: data
          })
        },
        error: () => {
          console.log('get error')
        }

      })
    }

    $.ajax({
      type: "get",
      url: currentUrl,
      contentTupe: "application/json",
      success: (data) => {
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
        <SearchDiv className="search">
          <Search search={this.search.bind(this)}/>
        </SearchDiv>
        <div className="ratings">
          <Ratings averageRatings={this.state.ratings}/>
        </div>
        <div className="reviews">
          <ReviewsList reviews={this.state.reviews} searchTerm={this.searchTerm}/>
        </div>
        <div className="nav">
          <Nav numOfPages={Math.ceil(this.state.length / this.limit)}
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