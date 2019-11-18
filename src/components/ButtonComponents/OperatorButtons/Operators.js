import React, { useState } from "react";
import ButtonMaker from '../ButtonMaker'
import { operators } from '../../../data'

let parsedArray = operators.map((value) => {
  return value.value
})

const Operators = (props) => {
  const [operator, setOperator] = useState(parsedArray)
  //console.log(`Operators: Data from State`, props)

  return (
    <div>
       {
         operator.map((value, index) => {
           return <ButtonMaker 
            key={`${value} ${index}`}
            buttonLabel={value}
            displayChanger={props.displayChanger}
            />
         })
       }
    </div>
  );
};

export default Operators