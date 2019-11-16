import React, { useState } from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';
//import any components needed

//Import your array data to from the provided data file


const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [calculatorOp, setCalculatorop] = useState(operators);
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {calculatorOp.map((operator, index)=><OperatorButton operator ={operator} key={index} changeData ={props.changeData}/>)}

    </div>
  );
};

export default Operators;