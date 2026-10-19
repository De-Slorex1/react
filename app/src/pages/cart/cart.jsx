import React from 'react'
import { useCart } from '../../context/cartContext';

function Cart() {
  const {cart, handleIncrement, handleDecrement} = useCart()

  if(cart.length === 0) {
    return <h3>Your cart is empty!!!</h3>
  }

  return (
    <div className='flex flex-col gap-7 justify-center items-center'>
      <h3 className='my-5 text-3xl font-bold'>Your Cart</h3>
      {cart.map(item => (
        <div className='flex justify-between items-center w-[90%] h-[100px] px-7 border border-amber-900 rounded-2xl' key={item.dish_id}>
          <div>
            <h2 className='text-2xl font-bold'>{item.name}</h2>
            <p>{item.description}</p>
            <p className='font-bold'>${item.price}</p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
              <button onClick={() => handleDecrement(item.dish_id)} className='w-5 h-5 bg-amber-400 flex justify-center items-center font-bold rounded text-2xl'>-</button>
              <p className='text-xl font-bold'>{item.quantity}</p>
              <button onClick={() => handleIncrement(item.dish_id)} className='w-5 h-5 bg-amber-400 flex justify-center items-center font-bold rounded text-2xl'>+</button>
            </div>
            <p className='font-bold'>${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart;
