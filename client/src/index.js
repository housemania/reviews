import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
// import Nav from './Nav.jsx'
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ratings: {}
    }
  }
  componentDidMount() {
    this.getRatings(4);
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
        {/* <div className="reviews">
          <Reviews />
        </div>
        <div className="nav">
          <Nav />
        </div> */}
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);