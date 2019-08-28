import React from "react";

const Display = (props) => {
  //console.log('test', props, props.number)
  return <div className="Display-Section">
  {props.number}
  </div>;
};

export default Display;