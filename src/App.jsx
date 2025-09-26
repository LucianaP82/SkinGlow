import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFund';


export default function App() {
  return (
    <main>
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
            element={<div><h1>Carrito de Compras</h1>Proceder a la compra</div>} 
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </BrowserRouter>
    </main>    
  )
}


