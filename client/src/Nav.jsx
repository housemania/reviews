import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let left;
    let right;
    let middle1;
    let middle2;
    let middle3;
    let middle4;
    let middle5;

    console.log("currentPage: " + this.props.currentPage + "   numOfPages: " + this.props.numOfPages);
    if (this.props.currentPage !== 0) {
      left = <div className="left" onClick={this.props.backPage}> left </div>
    } else {
      left = null;
    }

    if (this.props.currentPage >= 4 && this.props.currentPage < (this.props.numOfPages - 4)) {
      middle1 = <div className="middle">...</div>
      middle2 = <div className="middle" onClick={ () => { this.props.toPage(this.props.currentPage - 1); } }>{this.props.currentPage}</div>
      middle3 = <div className="middle current" onClick={ () => { this.props.toPage(this.props.currentPage); } }>{this.props.currentPage + 1}</div>
      middle4 = <div className="middle" onClick={ () => { this.props.toPage(this.props.currentPage + 1); } }>{this.props.currentPage + 2}</div>
      middle5 = <div className="middle">...</div>
    } else if (this.props.currentPage < 4) {
        if (this.props.currentPage === 0) {
          if (this.props.numOfPages > 2) {
            middle1 = <div className="middle" onClick={ () => { this.props.toPage(1); } }>2</div>
          } else {
            middle1 = null;
          }
          if (this.props.numOfPages > 3) {
            middle2 = <div className="middle" onClick={ () => { this.props.toPage(2); } }>3</div>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <div className="middle">...</div>
          } else {
            middle3 = null;
          }
          middle4 = null;
          middle5 = null;
        } else if (this.props.currentPage === 1) {
          if (this.props.numOfPages > 2) {
            middle1 = <div className="middle" onClick={ () => { this.props.toPage(1); } }>2</div>
          } else {
            middle1 = null;
          }
          if (this.props.numOfPages > 3) {
            middle2 = <div className="middle" onClick={ () => { this.props.toPage(2); } }>3</div>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <div className="middle">...</div>
          } else {
            middle3 = null;
          }
          middle4 = null;
          middle5 = null;
        } else if (this.props.currentPage === 2) {
          middle1 = <div className="middle current" onClick={ () => { this.props.toPage(1); } }>2</div>
          if (this.props.numOfPages > 3) {
            middle2 = <div className="middle" onClick={ () => { this.props.toPage(2); } }>3</div>
          } else {
            middle2 = null;
          }
          if (this.props.numOfPages > 4) {
            middle3 = <div className="middle" onClick={ () => { this.props.toPage(3); } }>4</div>
          } else {
            middle3 = null;
          }
          if (this.props.numOfPages > 5) {
            middle4 = <div className="middle">...</div>
          } else {
            middle4 = null;
          }
          middle5 = null;
        } else if (this.props.currentPage === 3) {
          middle1 = <div className="middle" onClick={ () => { this.props.toPage(1); } }>2</div>
          middle2 = <div className="middle current" onClick={ () => { this.props.toPage(2); } }>3</div>
          middle3 = <div className="middle" onClick={ () => { this.props.toPage(3); } }>4</div>
          if (this.props.numOfPages > 5) {
            middle4 = <div className="middle" onClick={ () => { this.props.toPage(4); } }>5</div>
          } else {
            middle4 = null;
          }
          if (this.props.numOfPages > 6) {
            middle5 = <div className="middle">...</div>
          } else {
            middle5 = null;
          }

         }
    } else {
      if (this.props.currentPage == this.props.numOfPages - 1) {
        middle5 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); } }>{this.props.numOfPages - 1}</div>
        middle4 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); } }>{this.props.numOfPages - 2}</div>
        middle3 = <div className="middle">...</div>
        middle2 = null;
        middle1 = null;
      } else if (this.props.currentPage == this.props.numOfPages - 2) {
        middle5 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); } }>{this.props.numOfPages - 1}</div>
        middle4 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); } }>{this.props.numOfPages - 2}</div>
        middle3 = <div className="middle">...</div>
        middle2 = null;
        middle1 = null;
      } else if (this.props.currentPage == this.props.numOfPages - 3) {
        middle5 = <div className="middle current" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); } }>{this.props.numOfPages - 1}</div>
        middle4 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); } }>{this.props.numOfPages - 2}</div>
        middle3 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 4); } }>{this.props.numOfPages - 3}</div>
        middle2 = <div className="middle">...</div>
        middle1 = null;
      } else if (this.props.currentPage == this.props.numOfPages - 4) {
        middle5 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 2); } }>{this.props.numOfPages - 1}</div>
        middle4 = <div className="middle current" onClick={ () => { this.props.toPage(this.props.numOfPages - 3); } }>{this.props.numOfPages - 2}</div>
       middle3 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 4); } }>{this.props.numOfPages - 3}</div>
        middle2 = <div className="middle" onClick={ () => { this.props.toPage(this.props.numOfPages - 5); } }>{this.props.numOfPages - 4}</div>
        middle1 = <div className="middle">...</div>
       }

    }

     console.log(this.props.currentPage, this.props.numOfPages);
    if (this.props.currentPage !== this.props.numOfPages -1) {
      right = <div className="right" onClick={this.props.nextPage}> right </div>
    } else {
      right = null;
    }

    return(
      <div className="nav">
        {left}
        <div className="first" onClick={ () => { this.props.toPage(0); } }>1</div>
        {middle1}
        {middle2}
        {middle3}
        {middle4}
        {middle5}
        <div className="last" onClick={ () => { this.props.toPage(this.props.numOfPages - 1) }}>{this.props.numOfPages}</div>
        {right}
      </div>
    )

  }
}

export default Nav;