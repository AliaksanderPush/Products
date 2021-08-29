import React from 'react'
import './Input.css'

const Input = props => {
   return (
    <>
    <input 
    type = {props.type}
    onChange = {() => props.onChange(props.index)}
    index = {props.index}

    />
    </>
   );
}
export default Input