import React from 'react'
import './Form.css'

import Button from '../Button';

const Form = props => {
   return (
     <div className = "Form" >
      <p>Введите название продукта:</p>
      <input type = "text"
       value = {props.nameValue}
       name = "nameValue"
       onChange = {(e) =>props.addNameProduct(e.target.value, e.target.name)}
      />
      <p>Введите стоимость продукта:</p>
      <input type = "number"
       value = {props.costValue}
       name = "costValue"
       onChange = {(e) =>props.addNameProduct(e.target.value, e.target.name)}
      />
      <p>Введите общий вес продукта:</p>
      <input type = "number"
      value = {props.quantityValue}
      name = "quantityValue"
      onChange = {(e) =>props.addNameProduct(e.target.value, e.target.name)}
      />
      <Button oncklick = {props.addHandleTable}>Добавить</Button>
      </div>
   );
}

export default Form