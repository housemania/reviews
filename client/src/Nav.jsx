import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';


const imgUrls = {
  leftPage: "http://127.0.0.1:5000/leftPage.jpg",
  rightPage: "http://127.0.0.1:5000/rightPage.jpg",
  current: "http://127.0.0.1:5000/currentPageBackground.jpg"

}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px;
`;
const LeftRight = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
const CurrentNums = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Nums = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Current = styled.div`
  position: relative;
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    console.log(data);
    this.props.toPage(data.selected);
  };
  render() {
    console.log(this.props);
    return (
      <ReactPaginate
      previousLabel= <img src={imgUrls.leftPage}/>
      nextLabel= <img src={imgUrls.rightPage}/>
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={this.props.numOfPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={this.handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
    );
  }
}

export default Nav;

