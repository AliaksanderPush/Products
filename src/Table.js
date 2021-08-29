import React from 'react'
import './Table.css'
import Button from './Button';
import Input from './UI/Input';

class Table extends React.Component {
   constructor(props) {
      super(props);
   }
 


   render() {
      const {product, index, oncklick,types,changeHandleCheckbox} =this.props,
            typ = "checkbox";
      return (
      <tr>
         <td>{index+1}</td>
         <td>{product['name']}</td>
         <td>{product['cost']}</td>
         <td>{product['quantity']}</td>
         <td>{product['quantity']*product['cost']}</td>
         <td><Button 
         oncklick = {oncklick}
         index = {this.props.index}
         product = {product}
         >Удалить 
         </Button>
         </td>
         <td><Input 
         type = {typ}
         onChange = {changeHandleCheckbox}
         index = {index}
         /></td>
      </tr>
      );
   }
}

export default Table