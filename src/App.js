import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  let [display, setDisplayState] = useState("0")
  let [isCalculated, setCalcState] = useState(true);
  let [usedDecimal, setDecimalState] = useState(false);
  let [total, setTotalState] = useState({value:0, recent:0, lastOp:null});
  function reset(){
    setCalcState(true);
    setDecimalState(false);
    setTotalState({value:0, recent:0, lastOp:null});
  }
  let operators = ["/", "*", "-","+","="];
  function calculate(){
    if (total.lastOp) {
      if (total.lastOp == "+") {
        return total.value + total.recent;
      } else if (total.lastOp == "-") {
        return total.value - total.recent;
      } else if (total.lastOp == "/") {
        return total.value / total.recent;
      } else {
        return total.value * total.recent;
      }
    } else {
      return Number(display);
    }
  }

  function numbersClick(event) {
    if (isCalculated) {
      setCalcState(false);
      display = "";
    }
    if (event.target.textContent  == "." && !usedDecimal) {
      setDecimalState(true);
      setDisplayState(display + event.target.textContent);
    } else if (event.target.textContent != ".") {
      setDisplayState(display + event.target.textContent);
    }
  }

  function opClick (event) { 
    if(!operators.includes(display[display.length - 1])) {
      setCalcState(false);
      total.recent = Number(display);
      total.value = calculate();
      total.lastOp = event.target.value;
      console.log(total);
      setDisplayState(total.value);
      setCalcState(true);
      setDecimalState(false);
      if (event.target.value == "=") {
        console.log(total);
        setDisplayState(total.value);
        reset();
      }
    }
  }

  function specialsClick(event){
    if (event.target.textContent == "C") {
      reset();
      setDisplayState(0);
    } else if (event.target.textContent == "+/-") {
      if (display[0] == "-") {
        setDisplayState(display.substring(1));
      } else { 
        setDisplayState("-" + display);
      }
    } else {
      setDisplayState(display/100);
      reset();
    }
  }
  return (
    <div className="container">
      <Logo />
      <Display display={display}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="nums-specs">
          <Specials onClick= {
            (event) => {
              specialsClick(event);
            }
          }
          />
          <Numbers 
            onClick={
              (event)=>{
                numbersClick(event);
              }
            }
          />
        </div>
        <Operators
          onClick = {
            (event) => {
              opClick(event);
            }
          }
        />
      </div>
    </div>
  );
}

export default App;
