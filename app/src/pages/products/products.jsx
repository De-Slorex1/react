import React from 'react'
import { dishes } from '../../../public/data';
import ProductCard from '../../components/productCard';

function Products() {
  return (
    <div className='px-5 py-5'>
      <h3 className=' text-center text-4xl font-bold py-2'>Discover our Italian Dishes</h3>
      <p className='text-center pb-10 text-gray-600'>Currated and well served nigeria and ghana jollof rice</p>
      <div className='flex flex-row flex-wrap gap-5'>
        {dishes.culinary_dishes.map(item => (
          <ProductCard key={item.dish_id} dish={item} />
        ))}
      </div>
    </div>
  )
}

export default Products;
