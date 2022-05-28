import React from 'react';

const index = (props) => {
    var isColorWhite = true;
    if(props.color1 === "white") {
        isColorWhite = true;
    }
    else isColorWhite = false;
  return (
      <>
      <div className = "circle_blue" style = 
      {{color: "whitesmoke",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
       height: "40px",
        width: "40px",
        borderRadius: "50%",
        backgroundColor: 'rgb(21, 21, 114)',
        border: "1px lightGrey solid",
        textAlign:"center"}}>1</div>
    <div style = 
      {{color: "whitesmoke",
       height: "1.5px",
        width: "80px",
        borderBottom: "1px lightGrey solid",
        backgroundColor: "rgb(21, 21, 114)"}} />

      <div style = 
      {{color: props.questLength === 1 || props.questLength === 2 || props.questLength === 3 ? 'white' : 'black',
       height: "40px",
        width: "40px",
        backgroundColor: props.questLength === 1 || props.questLength === 2 || props.questLength === 3 ? 'rgb(21, 21, 114)' : 'white',
        borderRadius: "50%",
        display: "flex",
      justifyContent: "center",
      alignItems: "center",
        border: "1px lightGrey solid",
        textAlign:"center"}}>2</div>
            
    <div style = 
      {{color: "whitesmoke",
       height: "1.5px",
        width: "80px",
        borderBottom: "1px lightGrey solid",
        backgroundColor: props.questLength === 1 || props.questLength === 2 || props.questLength === 3 ? 'rgb(21, 21, 114)' : 'white',}} />
         <div style = 
      {{color: props.questLength === 2 || props.questLength === 3 ? 'white' : 'black',
       height: "40px",
        width: "40px",
        backgroundColor: props.questLength === 2 || props.questLength === 3 ? 'rgb(21, 21, 114)' : 'white',
        borderRadius: "50%",
        display: "flex",
      justifyContent: "center",
      alignItems: "center",
        border: "1px lightGrey solid",
        textAlign:"center"}}>3</div>
            
    <div style = 
      {{color: "whitesmoke",
       height: "1.5px",
        width: "80px",
        borderBottom: "1px lightGrey solid",
        backgroundColor: props.questLength === 2 || props.questLength === 3 ? 'rgb(21, 21, 114)' : 'white',}} />
        <div style = 
      {{color: props.questLength === 3  ? 'white' : 'black',
       height: "40px",
        width: "40px",
        backgroundColor: props.questLength === 3  ? 'rgb(21, 21, 114)' : 'white',
        borderRadius: "50%",
        border: "1px lightGrey solid",
        display: "flex",
      justifyContent: "center",
      alignItems: "center",
        textAlign:"center"}}>4</div>
        
    </>
  )
}

export default index
