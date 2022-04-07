import React from "react";
import './App.css'

const Carrito = ({cards, deleteProduct, increaseProduct, decreaseProduct}) =>{

    // sum of products
 const total = cards.reduce((sum, card) => ( sum + card.subtotal ), 0);
console.log(cards.length);
  return (

      <div className = "cart_container">
      <p className="product_cart">{cards.length} productos</p>
    {
        cards.length > 0 ?
        cards.map((card)=>(
        <div className="listaCarrito" >
        <table key = {card.id}>
        <tr>
            <td>{card.name}</td>
            <td>
                <div className="cantidad">
                    <button type="button" onClick = {()=> decreaseProduct(card.id)}>-</button>
                    <p  className='number' > {card.quantity} </p> 
                    <button type="button" onClick = {()=> increaseProduct(card.id)}>+</button>
                </div>
                
            </td>
            <td>S/. {card.subtotal = card.quantity * card.price}</td>
            <td><button className='trash' onClick = {()=> {deleteProduct(card.id)}}>Eliminar</button></td>
        </tr>

        </table>

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
  </div>
  )
};


export default Carrito;
