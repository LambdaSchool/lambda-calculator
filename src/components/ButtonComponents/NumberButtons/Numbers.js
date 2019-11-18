import React, { useState } from "react";
import { numbers } from "../../../data";
import ButtonMaker from '../ButtonMaker'
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
const Numbers = (props) => {
  // console.log(`Numbers Console.log`, props)
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  // console.log(`Numbers: Data from state`, number)
  
  return (
    <div>
       {
         number.map((number, index) => {
           return <ButtonMaker 
              key={`${number} ${index}`} 
              buttonLabel={number}
              displayChanger={props.displayChanger}
              />
         })
       }
       
    </div>
  );
};
export default Numbers;
