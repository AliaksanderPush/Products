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
		{id: 1, name: 'Молоко', cost: 2.3 ,quantity:5, checked: false},
		{id: 2, name: 'Сыр',    cost: 4.1 ,quantity:2, checked: false},
		{id: 3, name: 'Колбаса',cost: 5.8 ,quantity:5, checked: false},
    {id: 4, name: 'Яблоко', cost: 1.29,quantity:3, checked: false},
		{id: 5, name: 'Кефир',  cost: 1.55,quantity:4, checked: false},
		{id: 6, name: 'Мюсли',  cost: 5.15,quantity:1, checked: false}
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

  addHandleTable = () => {
    const newproduct = {
      name : this.state.nameValue,
      cost: this.state.costValue,
      quantity: this.state.quantityValue
    }
    this.setState({products:[...this.state.products,newproduct]})
    this.setState({nameValue:'',costValue:'',quantityValue:''})

  }

   
  removeHandle = index => {
    const products = this.state.products;
    products.splice(index, 1);
    this.setState({products});
        
  }
  addHandleProduct = () => {
    this.setState({show : !this.state.show});
  }
  changeHandleCheckbox = index => {
    const products = this.state.products;
    products[index].checked = !products[index].checked;
    this.setState({products});
  }

  sumHandleProduct = () => {
    const products = this.state.products;
    let resultQuantity = 0,
        resultCost = 0;
   
    for (let elem of products) {
      if(elem.checked) {
        resultQuantity += Number(elem['cost'])*Number(elem['quantity']);
        resultCost += Number(elem['quantity']); 
      }
    }
    const summ = this.state.summ;
    summ[0].quantity = resultQuantity;
    summ[0].cost = resultCost;
    this.setState({summ})
     console.log(resultCost);  
  }


  render() {
  const {products, nameValue, costValue, quantityValue, summ} = this.state,
        {addHandleTable, removeHandle, addHandleProduct, 
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
           oncklick = {removeHandle}
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
      <Button oncklick = {addHandleProduct}>Добавить продукт</Button>
      <Button oncklick = {sumHandleProduct}>общая стоимость продуктов</Button>
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
