import React from 'react';
import styled from 'styled-components';

const ParentTextDiv = styled.div`
  grid-area: message;
`;
const TextDiv = styled.div`
  grid-area: message;
  font-family:sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
`;
const ReadMore = styled.a`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  text-decoration: none;
  color: #008489;
`;

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.showMore = this.showMore.bind(this);
  }
  showMore(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {

    let button;
    let message;
    if (this.state.expanded === false) {
      message = this.props.message.slice(0, 320);
      message += '...';
      button = <ReadMore href="#" onClick={this.showMore}>
              Read more
              </ReadMore>
    } else {
      message = this.props.message;
      button = null;
    }
    return (
      <ParentTextDiv>
        <TextDiv className="message">
          <p>{message}{button}</p>

        </TextDiv>

      </ParentTextDiv>
    )
  }


}

export default Message;