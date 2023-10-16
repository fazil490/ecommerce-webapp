import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Wishlist from "./pages/wishlist/Wishlist"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import Profile from "./pages/profile/Profile"

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
