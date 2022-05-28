import React, { useState } from 'react';
import Button from '../src/components/Button/index';
import Questions from '../src/components/Questions/index';
import Header from '../src/components/Header/index';
import ProgressBar from '../src/components/ProgressBar/index';
import helper from './Helper';
import '../src/components/Button/index.scss';
import LastScreen from '../src/components/LastScreen/index';
import blueCircle from '../src/Assets/blueCircle.png';
import './App.scss';

function App() {
  var score = 0;
  const [questionsLength, setQuestionsLength] = useState(score+1);
  const [questions, setQuestion] = useState(0);
  const [color, setColor] = useState('white');

  
const questLength = (e) => {
  e.preventDefault();
  setQuestion(questions+1);
  setColor('blue');
}

  return (
    <>
      <div className='Eden_container'><LastScreen /></div>
      <div className='progress_container'><ProgressBar color1 = {color} questLength = {questions}/></div>
      { questions < 3 ? 
      <div className='main_container'>
      <Header header={helper[questions].header} subHeader={helper[questions].subHeader}/>
      <Questions currentQuestion1={helper[questions].text1} 
      currentQuestion2={helper[questions].text2}
      currentQuestion3={helper[questions].text3}
      currentQuestion4={helper[questions].text4}
      questLength={questions}
      />
      <Button click = {questLength} content = {helper[questions].button}/>
      </div> : 
      <div className='main_container'>
        <div><img style={{height: "70px", width: "70px", marginBottom: "50px"}} src={blueCircle} alt="blue Circle"/></div>
        <Header header={helper[questions].header} subHeader={helper[questions].subHeader}/>
        <a href='https://dribbble.com/shots/15669113-Onboarding-Exploration/attachments/7464149?mode=media'><Button click = {questLength} content = {helper[questions].button}/></a>
      </div>
      }
    </>
  );
}

export default App;
