import React from 'react'
import { dishes } from '../../../public/data';
import ProductCard from '../../components/productCard';

function Products() {
  return (
    <div className='w-full px-5 py-5'>
      <h3 className=' text-center text-4xl font-bold py-2'>Discover our Italian Dishes</h3>
      <p className='text-center pb-10 text-gray-600'>Currated and well served nigeria and ghana jollof rice</p>
      <div className='w-full grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {dishes.culinary_dishes.map(item => (
          <ProductCard key={item.dish_id} dish={item} />
        ))}
      </div>
    </div>
  )
}

export default Products;



// import React from 'react'
// import { dishes } from '../../../public/data';
// import ProductCard from '../../components/productCard';

// function Products() {
//   return (
//     <div className='w-full px-5 py-5'>
//       <h3 className=' text-center text-4xl font-bold py-2'>Discover our Italian Dishes</h3>
//       <p className='text-center pb-10 text-gray-600'>Currated and well served nigeria and ghana jollof rice</p>
//       <div className='w-full flex justify-center flex-col md:flex-row md:flex-wrap lg:flew-row lg:flex-wrap gap-5'>
//         {dishes.culinary_dishes.map(item => (
//           <ProductCard key={item.dish_id} dish={item} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Products;
