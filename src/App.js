import './App.css';
import { useState } from 'react';
import { evaluate } from "mathjs";
import Button from './components/Button/Button';
import Display from './components/Display/Display';
import ClearButton from './components/ClearButton/ClearButton';

function App() {

  const [input, setInput] = useState("")

  const addInput = val => {
    setInput (input + val);
  }

  const result = ()=> {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert ("Ingrese valores")
    }
  }

  return (
    <div className="App">
     <div className="calculator-container">
      <Display input={input} />
      <div className="row">
        <Button handleClick={ addInput } >1</Button>
        <Button handleClick={ addInput } >2</Button>
        <Button handleClick={ addInput } >3</Button>
        <Button handleClick={ addInput } >+</Button>
      </div>
      <div className="row">
        <Button handleClick={ addInput } >4</Button>
        <Button handleClick={ addInput } >5</Button>
        <Button handleClick={ addInput } >6</Button>
        <Button handleClick={ addInput } >-</Button>
      </div>
      <div className="row">
        <Button handleClick={ addInput } >7</Button>
        <Button handleClick={ addInput } >8</Button>
        <Button handleClick={ addInput } >9</Button>
        <Button handleClick={ addInput } >*</Button>
      </div>
      <div className="row">
        <Button handleClick={ result } >=</Button>
        <Button handleClick={ addInput } >0</Button>
        <Button handleClick={ addInput } >.</Button>
        <Button handleClick={ addInput } >/</Button>
      </div>
      <div className="row">
        <ClearButton handleClear={()=> setInput("")} >Clear</ClearButton>
      </div>
     </div>
    </div>
  );
}

export default App;
