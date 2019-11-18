import React,  { useState } from "react";
import ButtonMaker from '../ButtonMaker'
import { specials } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [button, setButton] = useState(specials)
  // console.log(`Specials: Data from state`, button)
  return (
    <div>
      {
        button.map((value, index) => {
          return <ButtonMaker
              key={index}
              buttonLabel={value}
              displayChanger={props.displayChanger}
            />
        })
      }
    </div>
  );
};

export default Specials