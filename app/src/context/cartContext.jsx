import { useContext, createContext, useState } from "react";

// const CartContext = createContext(null)

function CartContext() {
    const [cartItems, setCartItems] = useState([, 2, 3, 4, 5, 6, 7])
    console.log(cartItems)

    function addToCart() {
        setCartItems((cartItems) => {
            cartItems.find(item => item === 1)
        })
    }
  return (
    <div>
        {cartItems}
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default CartContext;
