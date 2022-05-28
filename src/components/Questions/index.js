import React, { useState } from 'react';
import './index.scss';

const Index = (props) => {
    const [style, setStyle] = useState("input_3");
    
  return (
    <div>
        { props.questLength === 2 ? 
        <div className='input_container'>
            <div className={style}> <span>For myself </span>{props.currentQuestion1} </div>
            <div className={style}> <span>With my team </span>{props.currentQuestion2} </div>
        </div> : 
        <div>
        <div>
            <div className='question1'>{props.currentQuestion3}</div>
            <input type="text" name={props.currentQuestion1} placeholder={props.currentQuestion1}/>
       </div>
       <div>
           <div className='question1'>{props.currentQuestion4}</div>
           <input type="text" name={props.currentQuestion2} placeholder={props.currentQuestion2}/>
       </div>
       </div>
       }
    </div>
  )
}

export default Index;
