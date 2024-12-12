import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./componant/Add"


function App() {

  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
