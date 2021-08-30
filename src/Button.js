import React from 'react'
import './Button.css'

const Button = ({children, product, onClick}) => {
   return (
   <>
    <button
      className = "Button"
      onClick = {onClick}
      product = {product}  
     >{children}</button>
   </>


   );
}
export default Button