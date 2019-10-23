import React from "react";
 import "../../../App.css"


 const NumberButton = (props) => {
  function handleClickEvent() {
    props.consoleLog(props.number)
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button
         className="number_button"
          onClick={() => props.setDisplayValue(props.number)}
        >
          {props.number}
        </button>}
    </>
  );
 }
export default NumberButton;