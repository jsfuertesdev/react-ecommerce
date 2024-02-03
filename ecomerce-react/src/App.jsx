import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './main.css';
import AboutUs from './components/AboutUs';
import Contact from './components/contact';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>

      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer itemId={2} /> */}
    </div>
  );
}

export default App;
