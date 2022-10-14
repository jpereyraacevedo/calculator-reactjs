import React from "react";
import "./ClearButton.css"

function ClearButton(props) {
  return (
    <div 
    className="clear-button" 
    onClick={props.handleClear} >
      {props.children}
    </div>
  )
}

export default ClearButton