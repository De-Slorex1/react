import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Products from './pages/products/products'
import Contact from './pages/contact/contact'
import Navbar from './components/navbar'
import ProductDetails from './pages/productDetails/productDetails'
import Cart from './pages/cart/cart'
import { useCart } from './context/cartContext'


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dish/:dish_id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
