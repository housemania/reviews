import React from 'react';
import ReactDOM from 'react-dom';

const Nav = ({nextPage, backPage}) => (
  <div className="nav">
    <div className="left" onClick={backPage}> left </div>
    <div className="right" onClick={nextPage}> right </div>
  </div>
)

export default Nav;