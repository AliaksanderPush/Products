import React from 'react'
import './App.css';
import Button from './Button';

import Table from './Table'
import Form from './Form/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
 
this.state = {
	products: [
		{id: 'wer', name: 'Молоко', cost: 2.3 ,quantity:5, checked: false},
		{id: 'fd', name: 'Сыр',    cost: 4.1 ,quantity:2, checked: false},
		{id: 'gfs', name: 'Колбаса',cost: 5.8 ,quantity:5, checked: false},
    {id: 'gd', name: 'Яблоко', cost: 1.29,quantity:3, checked: false},
		{id: 'gfd', name: 'Кефир',  cost: 1.55,quantity:4, checked: false},
		{id: 'gad', name: 'Мюсли',  cost: 5.15,quantity:1, checked: false}
	],
  show : false,
  nameValue: '',
  costValue: '',
  quantityValue: '',
  summ: [
    {cost:'' , quantity:''}
  ]
  
  
};
  
 }

  addNameProduct = (value, name) => {
    this.setState({[name] :value})
  }
 /*
  addHandleTable = () => {
    
    const newproduct = {
      id: Math.random(),
      name : this.state.nameValue,
      cost: this.state.costValue,
      quantity: this.state.quantityValue
    }
    const products = [...this.state.products];
    this.setState({products:[...products,newproduct]})
    this.setState({nameValue:'',costValue:'',quantityValue:''})

  }
*/
  addHandleTable = () => {
    const newItem = {
      id: Math.random(),
      name : this.state.nameValue,
      cost: this.state.costValue,
      quantity: this.state.quantityValue
    }
    this.setState(({products}) => {
       const newProducts = [...products,newItem];
       return {
         products:newProducts, nameValue:'', costValue:'', quantityValue:'' 
       }
    });

    
  } 
  





   
      removeHandle = id => {
      this.setState(({products}) => {
       const index = products.findIndex(elem => elem.id === id);
       const after = products.slice(0, index);
       const before = products.slice(index + 1);
       const newProducts = [...before, ...after];
       return {
         products: newProducts 
       } 
      
    })
  }
     /*
     removeHandle = id => {
     const products = [...this.state.products];
     const index = products.findIndex(elem => elem.id === id);
     products.splice(index, 1);
     this.setState({products});
     }
    */
    
  
  addHandleProduct = () => {
    this.setState({show : !this.state.show});
  }

  changeHandleCheckbox = index => {
    const products = [...this.state.products];
    products[index].checked = !products[index].checked;
    this.setState({products});
  }

  sumHandleProduct = () => {
    const products = [...this.state.products];
    let resultQuantity = 0,
        resultCost = 0;
   
    for (let elem of products) {
      if(elem.checked) {
        resultQuantity += Number(elem['cost'])*Number(elem['quantity']);
        resultCost += Number(elem['quantity']); 
      }
    }
    const summ = [...this.state.summ];
    summ[0].quantity = resultQuantity;
    summ[0].cost = resultCost;
    this.setState({summ})
      
  }


  render() {
  const {products, nameValue, costValue, quantityValue, summ} = this.state;
  const {addHandleTable, removeHandle, addHandleProduct, 
        addNameProduct, changeHandleCheckbox, sumHandleProduct} = this;
        



  return (
    <div className = "App" >
      <table className = "tbl" >
        <thead>
       <tr>
         <th>id</th>
         <th>Название</th>
         <th>Цена</th>
         <th>Количество</th>
         <th>Стоимость</th>
        </tr>
          </thead>
          <tbody>
       {products.map((product, index) => {
        return (
          <Table
           key = {index}
           index={index}
           product = {product}
           onClick = {() => removeHandle(product.id)}
           changeHandleCheckbox = {changeHandleCheckbox}
           />
        )
       })}
         </tbody>
       {summ[0].quantity
        ? <thead>
            <tr>
              <th></th>
              <th>Итого</th>
              <th></th>
              <th>{summ[0].cost}</th>
              <th>{summ[0].quantity.toFixed(2)}</th>
            </tr>
          </thead>
          :null
       }
      </table>
      <Button onClick = {addHandleProduct}>Добавить продукт</Button>
      <Button onClick = {sumHandleProduct}>общая стоимость продуктов</Button>
      {this.state.show
      ? <Form
        nameValue = {nameValue}
        costValue = {costValue}
        quantityValue = {quantityValue}
        addHandleTable = {addHandleTable}
        addNameProduct ={addNameProduct}
        sumHandleProduct = {sumHandleProduct}
        
        />
      : ''
       }
      
    </div>
  );
  }
}
export default App;
