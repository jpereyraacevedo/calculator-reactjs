import React from "react";
import "./Button.css"

function Button (props) {

  const isOperator= value => {
    return isNaN(value)
  }

    return ( 
      <div 
      className={`button-container ${isOperator(props.children) ? "operator" : " "}`.trimEnd()}
      onClick= {()=> props.handleClick(props.children)}>
        {props.children}
      </div>
    )
}

export default Button