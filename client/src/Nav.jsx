import React from 'react';
import ReactDOM from 'react-dom';

const Nav = (props) => (
  <div className="nav">
    <div className="left" onClick={props.changePage}> left </div>
    <div className="right" onClikc={props.changePage}> right </div>
  </div>
)

export default Nav;