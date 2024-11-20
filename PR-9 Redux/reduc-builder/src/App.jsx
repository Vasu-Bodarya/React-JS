import { BrowserRouter, Route, Routes } from "react-router-dom"

import Add from "./Pages/Add"
import View from "./Pages/View"
import Edit from "./Pages/Edit"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/edit/:editid" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
      <h1></h1>
    </>
  )
}

export default App