import React from 'react'
import Header from '../components/Header'
import ProductContainer from '../components/cart-components/ProductContainer'
import SideBar from '../components/cart-components/SideBar'

const CartScreen = () => {
  return (
    <div>
        <Header/>
        <div className='flex items-center justify-center'>
        <ProductContainer/>
        <SideBar/>
        </div>
    </div>
  )
}

export default CartScreen