import React, { useEffect, useState } from 'react'
import Carrito from './Carrito'
import './App.css'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState([]);

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/api/products')
        .then((res) => res.json())
        .then((data) => setResponse(data))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------
  // select each product and save in an array
  const [cards, setCards] = useState([]);
  console.log(cards);
  const addProduct = (item)=>{
    // create a copy of product to add more properties
    const product = {
      id: item._id,
      name: item.name,
      price: item.price,
      quantity: 1,
      stock: item.countInStock,
      subtotal: 0
    }
    //receive an array of each card clicked
    const cardAdded = cards.find((oneCard)=> oneCard.id === product.id)
    if(cardAdded ===undefined){
    setCards([
      ...cards,
      product
    ]);
  }
}

// remove a product
const deleteProduct = (id)=>{
  setCards(cards.filter((oneCard)=> oneCard.id !== id))
}

//count products in the order component(increase)
const increaseProduct = (id)=>{
  const newProducts = cards.map((oneCard)=>{
    if(oneCard.id === id && oneCard.stock>0) {
      oneCard.quantity ++;
      oneCard.stock--
    }
    return oneCard;
    
  })
  setCards(newProducts)
}
//count products in the order component(decrease)
const decreaseProduct = (id)=>{
  const newProducts = cards.map((oneCard)=>{
    if(oneCard.id === id ) {
      oneCard.quantity === 1 ? oneCard.quantity = oneCard.quantity : oneCard.quantity --; oneCard.stock++;
    }
    return oneCard;
  })
  setCards(newProducts)
}

  return (
    <div className='contenedor'>
      <header className='header'>
        <h1> Prueba tecnica front Ecomsur 2021</h1>
      </header>
      
      {/* Check to see if express server is running correctly */}
      <Carrito 
      
      cards = {cards} 
      deleteProduct ={deleteProduct} 
      increaseProduct = {increaseProduct}
      decreaseProduct = {decreaseProduct}
       />

      {response.map((product)=>(
        <div className = "products_container" >
          <div className='product_card' key={product._id} >
            <img alt='' src={`http://localhost:5000/${product.image}`}/>
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <p> Raiting: {product.rating}</p>
            {`${product.countInStock}` === "0" ? <p> Stock agotado</p>:
            <button type='button' onClick={() => addProduct(product)}>Añadir item</button>
            }
          </div>
        </div>
         
      ))}
    </div>  
  )
}

export default App
