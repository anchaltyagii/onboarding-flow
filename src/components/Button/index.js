import React from 'react';
import './index.scss';

const index = (props) => {
  return (
    <div>
      <button onClick = {props.click}>{props.content}</button>
    </div>
  )
}

export default index
