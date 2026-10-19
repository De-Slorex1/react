import { useContext, createContext, useState } from "react";

const CartContext = createContext(null)

export function CartPrivider({children}) {
    const [cart, setCart] = useState([])

    function addToCart(dish) {
        setCart((currentItems) => {
            const existingItem = currentItems.find((item) => item.dish_id === dish.dish_id)

            if(existingItem) {
                return currentItems.map((item) => item.dish_id === dish.dish_id ? {...dish, quantity: item.quantity + 1} : item)
            } 
        })

        return setCart([...cart, {...dish, quantity: 1}])
    }

    console.log(cart)
    
    function handleIncrement(id) {
        return setCart((currentItem) => currentItem.map(item => item.dish_id === id ? {...item, quantity: item.quantity + 1} : item))
    }

    function handleDecrement(id) {
        return setCart((currentItem) => currentItem.map(item => item.dish_id === id ? {...item, quantity: item.quantity - 1} : item))
    }

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{addToCart, cart, cartCount, handleIncrement, handleDecrement}}>
        {children}
    </CartContext.Provider>
  )
}


export function useCart() {
    const context = useContext(CartContext)

    if(!context){
        return <p>Context not found</p>
    }

    return context
}
