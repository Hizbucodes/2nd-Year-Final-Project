import { Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import MenuScreen from "./screens/MenuScreen"
import { ProductProvider } from "./context/ProductContext"
import { CartProvider } from "./context/CartContext"
import CartScreen from "./screens/CartScreen"
import SingleProductScreen from "./screens/SingleProductScreen"


function App() {

  return (
    <>
    <ProductProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/menu" element={<MenuScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/products/:id" element={<SingleProductScreen/>}/>
      </Routes>
      </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
