import { createContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const cartContext = createContext("default value");

export function CartProvider( { children }){

  const [cartItems, setCartItems] = useState([]);

  function addItem(newItem) {
    const quantityCount = 1;
    const newCart = structuredClone(cartItems)
    const isInCart = cartItems.some(item => item.id === newItem.id)

    if (isInCart) {
      const index = cartItems.findIndex(item => item.id === newItem.id)
      newCart[index].quantity += quantityCount
      toast.success("Agregaste otra unidad al carrito");
    }
    else {
      newItem.quantity = quantityCount
      newCart.push(newItem)
      toast.success("Producto agregado al carrito");
    }
    setCartItems(newCart)
  }

  function countCartItems() {
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count;
  }

  function countTotalPrice() {
    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += item.quantity * item.price)
    return totalPrice;
  }

  function removeItem(idToRemove){
    const newCart = cartItems.filter( itemInCart => itemInCart.id !== idToRemove)
    setCartItems(newCart)
    toast.error("Producto eliminado del carrito");
  }

  function clearCart(){
    setCartItems([])
  }

  return (
    <cartContext.Provider value={{ cartItems, addItem, countCartItems, removeItem, countTotalPrice, clearCart }}>
        { children }       
        <Toaster toastOptions={{ style: { border: '1px solid #6B6D76', padding: '16px', color: '#6B6D76',
    },
  }}
position="top-center"/> 
    </cartContext.Provider>
  )
}

export { cartContext }