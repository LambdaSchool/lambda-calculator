import React, {useState} from "react";
import { specials } from '../../../data';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spec] = useState(specials);
  return (
    <div className="specials-grid">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       spec.map((digits, index) => (
        <SpecialButton key={index} result={(digits)} />
       
      ))}
       
    </div>
  );
};


export default Specials;