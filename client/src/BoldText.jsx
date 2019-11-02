import React from 'react';

const BoldText = (props) => (
  props.text.map((item, i) => {
    if (i === props.text.length - 1) {
      return <span>{item}</span>
   } else {
      return <span>{item}<b>{props.keyword}</b></span>
    }
  })

);

export default BoldText;