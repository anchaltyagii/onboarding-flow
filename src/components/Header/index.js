import React from 'react';
import './index.scss';

const index = (props) => {
  return (
  <div>
      <div className='header'>
         {props.header}
      </div>
      <div className='sub_header'>
          {props.subHeader}
      </div>
  </div>
  )
}

export default index
