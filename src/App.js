import logo from "./assets/portada/portada.png";
import logo2 from "./assets/portada/iimm.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/pages/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Abaut from "./components/pages/Abaut";
import Catalog from "./components/pages/Catalog";
import Contact from "./components/pages/Contact";
import Sumate from "./components/pages/Sumate";
import ItemListContainer from "./components/pages/ItemListContainer";
import Footer from "./components/pages/Footer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import Home from "./components/pages/Home";
import { CartContext } from "./context/CartContext";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/pages/Checkout";
function App() {

  return (
    <CartProvider>
      <div className="page-container" style={{ height: "100vh" }} >
        <div className="content-wrap">
          <BrowserRouter>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Abaut" element={<Abaut />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Producto/:categoryId" element={<ItemListContainer />} />
                <Route path="/Producto/" element={<ItemListContainer />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Sumate" element={<Sumate />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
              </Routes>
            </div>
          </BrowserRouter >
          {<Home logo={logo} logo2={logo2} />}
        </div >
        {< Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
