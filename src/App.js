import logo from "./assets/logo/logoCompleto.png";
import "./App.css";
import NavBar from "./components/navegacion/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abaut from "./components/pages/Abaut";
import Catalog from "./components/pages/Catalog";
import Contact from "./components/pages/Contact";
import CartWidget from "./components/pages/CartWidget";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Abaut" element={<Abaut />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/CartWidget" element={<ItemListContainer />} />
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="" width="25%" alt="logo"/>
        <h1 className="mt-4">Pagina en construcción</h1>
      </header>
    </div>
  );
}

export default App;
