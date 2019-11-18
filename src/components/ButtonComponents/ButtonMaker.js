import React from "react";


function ButtonMaker(props) {
    console.log(`ButtonMaker Log`, props)
  return (
    <>
      <button
        onClick={() => props.displayChanger(props.buttonLabel)}>
        {props.buttonLabel}
      </button>
    </>
  );
}

export default ButtonMaker;


// {
//   props.displayChanger ? (
//     <button
//       onClick={() => props.displayChanger(props.buttonLabel)}>
//       {props.buttonLabel}
//     </button> 
//   ) : (
//     onClick={() => props.displayChanger(props.buttonLabel)}>
//     {props.buttonLabel}
//   )
// }

