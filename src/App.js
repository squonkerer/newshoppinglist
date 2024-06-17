import { useState } from 'react';
import './App.css';
import NewProduct from './NewProduct';
import Product from './Product';

function App() {
  const [items, setItems] = useState([])

  const toggleChecked = (id) => {
    console.log('toggle ' + id)
    let newItems = items.map((el, index) => {
      if (index === id) {
        return {...el, isInBasket:!el.isInBasket}
      } else {
        return el
      }
    });
    setItems(newItems)
  }

  const deleteProduct = (id) => {
    items[id] = null;

    let newItems = items.filter(el => el !== null)
    setItems(newItems)
  }

  const addProduct = ({description, unit, amount}) => {
    console.log("add " + description)
    const NewProduct = {
      description,
      unit,
      amount,
      isInBasket: false,
    }
    setItems([...items, NewProduct])
  }
  
  return (
    <>
      <div className="container" >
        <h1>Shopping list</h1>
          <NewProduct addProduct = {addProduct} />
        {
          items.map((item, index) => {
            return <Product key={index} product={item} id={index} deleteProduct={deleteProduct} toggleChecked={toggleChecked}/>
          })
        }
      </div>
    </>
  );
}

export default App;
