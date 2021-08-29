import React from 'react'
import './Button.css'

const Button = props => {
   return (
   <>
    <button
      className = "Button"
      onClick = {() => props.oncklick(props.index)}
      product = {props.product}  
      index = {props.index}
    >{props.children}</button>
   </>


   );
}
export default Button