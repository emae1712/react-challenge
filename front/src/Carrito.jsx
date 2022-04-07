import React from "react";

const Carrito = ({cards, deleteProduct, increaseProduct, decreaseProduct}) =>{

    // sum of products
 const total = cards.reduce((sum, card) => ( sum + card.subtotal ), 0);
console.log(cards.length);
  return (

      <>
      <p>{cards.length} productos</p>
    {
        cards.length > 0 ?
        cards.map((card)=>(
        <div className="listOrden" key = {card.id}>
          
          <div className="product_andNote">
            
            <p className='productSelect'>{card.name}</p>
          </div>
          <div className='count'>
            <button type="button" onClick = {()=> decreaseProduct(card.id)}>-</button>
            <p  className='price' > {card.quantity} </p> 
            <button type="button" onClick = {()=> increaseProduct(card.id)}>+</button>
          </div>
          <p className='price'>S/. {card.subtotal = card.quantity * card.price}</p>
          <button className='trash' onClick = {()=> {deleteProduct(card.id)}}>Eliminar</button> 
        </div>  
        )) : (
          <span></span>
        )
        }
        { `${total}` === "0" ? "":
        <>
        <hr className='line'></hr>
        <div className='total_container'>
          <p className='total'>Total</p>
          <p  className='total'>S/. {total}</p>
        </div>
        </>
        }
  </>
  )
};


export default Carrito;
