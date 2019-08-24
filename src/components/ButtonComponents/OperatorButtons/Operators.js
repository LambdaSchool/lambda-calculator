import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import {operators} from "../../../data"
const Operators = (props) => {
  // STEP 2 - add the imported data to state

  const clickbtn = btn => {
    btn === '=' ? props.caluclator() : props.updateValue(btn)
  }
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((operator , index) => {
         return <OperatorButton 
         operator={operator} 
         key={index}  
         updateValue={ () => clickbtn(operator.value)}
         />
       })}
    </div>
  );
};

export default Operators;