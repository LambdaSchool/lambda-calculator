import React, { useState } from "react";
//import any components needed
import NumberButton from './NumberButton.js'
//Import your array data to from the provided data file
import { numbers } from '../../../data.js'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [buttonNum, setButtonNum] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         buttonNum.map((number) => {
           return <NumberButton key={number} calcNumbers={number} />
         })
       }
    </div>
 
  );
};

export default Numbers;