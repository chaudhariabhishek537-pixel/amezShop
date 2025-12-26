import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Offers from './pages/Offers'
import Shop from './pages/Shop'
import Profile from './pages/Profile'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path="/offers" element={<Offers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
