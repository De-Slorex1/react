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
    // const cartCount = cart.reduce((sum, item) => {sum + item.quantity})

  return (
    <CartContext.Provider value={{addToCart, cart}}>
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
