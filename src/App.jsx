import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFund';
import { CartProvider } from './components/context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { subirProductosAFirestore } from './data/firebase';


export default function App() {
  
  
  return (
    <main>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route 
              path="/" 
              element={<ItemListContainer greeting="Bienvenidos! Tu piel merece lo mejor"/>} 
            />
            <Route 
              path="/detalle/:idParam" 
              element={<ItemDetailContainer />} 
            />
            <Route 
              path="/category/:categParam" 
              element={<ItemListContainer greeting="Categoría de Productos"/>} 
            />
            <Route 
              path="/cart" 
              element={<CartContainer />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </main>    
  )
}


