import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import MobileNavbar from "./components/MobileNavbar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App font-Montserrat tracking-tight bg-gray-50">
      <div className="lg:hidden sticky top-0 z-10">
        <MobileNavbar />
      </div>
      <div className="hidden  sticky top-0 z-10 lg:inline-block w-[100%]">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
