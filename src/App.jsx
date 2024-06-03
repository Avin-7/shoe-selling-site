import Product from "./components/Product";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContextProvider.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
function App() {
  return (
    <div>
      <CartContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/products/:productId" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
