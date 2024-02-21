import { Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import MenuScreen from "./screens/MenuScreen"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/menu" element={<MenuScreen/>}/>
      </Routes>
    </>
  )
}

export default App
