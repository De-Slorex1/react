import {MoveRight} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';

function ProductCard({dish}) {
    const navigate = useNavigate()

   const {addToCart, cart} = useCart()
   console.log(cart)

  return (
    <div className='w-[350px] height-[350px] p-5 rounded-2xl border-2 flex flex-col shadow shadow-amber-700 gap-2 justify-center items-center border-amber-700 hover:bg-amber-100 hover:border-0'>
      <p className=' font-medium text-amber-600'>{dish.cuisine}</p>
      <h3  className=' font-semibold text-2xl'>{dish.name}</h3>
      <p className='text-sm text-gray-600 text-center'>{dish.description}</p>
      <p>{dish.category}</p>
      <div className='flex gap-3'>
        <button onClick={() => navigate(`/dish/${dish.dish_id}`)} className='border border-amber-600 my-2 w-[120px] h-[35px] rounded-full font-normal text-black flex gap-2 justify-center items-center align-middle  hover:bg-amber-600 hover:text-white'>View <MoveRight className='w-3' /></button>
        <button onClick={() => addToCart(dish)} className='bg-amber-600 my-2 w-[120px] h-[35px] rounded-full font-normal text-white hover:bg-transparent border border-amber-600 hover:text-black'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard;
