import logo from "./assets/logo/logoCompleto.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/navegacion/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Abaut from "./components/pages/Abaut";
import Catalog from "./components/pages/Catalog";
import Contact from "./components/pages/Contact";
import CartWidget from "./components/pages/CartWidget";
import Sumate from "./components/pages/Sumate";
import ItemListContainer from "./components/pages/ItemListContainer"
import ApiExterna from "./components/apis/ApiExterna";
import Footer from "./components/pages/Footer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer";

function App() {
  const saludo= "hola after"
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Abaut" element={<Abaut />} />
          <Route path="/Contact" element={<Contact saludo = {saludo}/>} />
          <Route path="/Producto/:categoryId" element={<ItemListContainer />} />
          <Route path="/Producto/" element={<ItemListContainer />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/CartWidget" element={<CartWidget />} />
          <Route path="/Sumate" element={<Sumate />} />
          <Route path="/ApiExterna" element={<ApiExterna />} />
          <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="" width="25%" alt="logo" />
        <h1 className="mt-4">Pagina en construcción</h1>
      </header>
      {<Footer/>}
    </div>
  );
}

export default App;
