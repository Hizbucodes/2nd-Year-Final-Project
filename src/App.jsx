import { Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import MenuScreen from "./screens/MenuScreen"
import { ProductProvider } from "./context/ProductContext"
import { CartProvider } from "./context/CartContext"
import CartScreen from "./screens/CartScreen"
import SingleProductScreen from "./screens/SingleProductScreen"
import Login from "./components/Login"
import Register from "./components/Register"
import { UserAuthContextProvider } from "./context/UserAuthContext"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (
    <>
    <ProductProvider>
      <CartProvider>
        <UserAuthContextProvider>
      <Routes>
        <Route path="/" 
        element={
        <ProtectedRoute>
          <HomeScreen/>
        </ProtectedRoute>}
        />
        <Route path="/menu" element={<ProtectedRoute><MenuScreen/></ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><CartScreen/></ProtectedRoute>}/>
        <Route path="/products/:id" element={<ProtectedRoute><SingleProductScreen/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </UserAuthContextProvider>
      </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
