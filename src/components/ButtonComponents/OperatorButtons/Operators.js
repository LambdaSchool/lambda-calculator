import React, { useState } from "react";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators)
  console.log({operator});
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <p>Operators</p>
      {operator.map((operator) => {
        return <button className="operatorButton" key={operator} value={operator.value}>{operator.char}</button>
      })

      }
    </div>
  );
};

export default Operators;
