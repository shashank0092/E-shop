import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Regsiter from "./pages/Register";
import CreateBuyer from "./pages/Buyer/Create Buyer/CreateBuyer"
import CreateSeller from "./pages/Seller/Create Seller/CreateSeller"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/register/customer" element={<CreateBuyer />} />
        <Route path="/register/seller" element={<CreateSeller />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;