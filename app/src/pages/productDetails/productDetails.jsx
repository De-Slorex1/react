import React from 'react'
import { dishes } from '../../../public/data';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const dish_id = useParams()
    const dish = dishes.culinary_dishes.find(item => item.dish_id === dish_id)
  return (
    <div>
      <img className='w-[400px] h-[400px] my-5' src={dish.images.full_size} alt={dish.name} />
      <p className=' font-medium text-amber-600'>{dish.cuisine}</p>
      <h3  className=' font-semibold text-2xl'>{dish.name}</h3>
      <p className='text-sm text-gray-600 text-center'>{dish.description}</p>
      <p>{dish.category}</p>
    </div>
  )
}

export default ProductDetails;
