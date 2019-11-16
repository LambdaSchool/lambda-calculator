import React from "react";


const OperatorButton = (props) => {

  const char = props.operator.value;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
      <button onClick={ () =>{props.changeData(char)}}>{props.operator.char}</button>
    
    </>
  );
};

export default OperatorButton;