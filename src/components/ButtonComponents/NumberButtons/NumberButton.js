import React from "react";

const NumberButton = (props) => {
  return (
    <button className='button-style' onClick={() => console.log(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.calcNumbers}
    </button>
  );
};

export default NumberButton;