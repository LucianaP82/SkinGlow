import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router"
import './CartContainer.css'
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";

export default function CartContainer(){
  const [orderCreatedId, setOrderCreated] = useState(false);
  const { cartItems, removeItem, countTotalPrice, clearCart } = useContext(cartContext)

  async function handleCheckout(buyer){    
    const total = countTotalPrice().toFixed(2);

    const newOrderConfirmed = await createOrder( { cartItems, total, buyer, date: new Date()} )
    console.log(newOrderConfirmed.toJSON());
     
    Swal.fire({
      title: `¡Gracias por tu compra!`,
      html: `El id de la orden es: <strong>${newOrderConfirmed.id}</strong>`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#6B6D76",
      draggable: true
    });

    clearCart();
    setOrderCreated(newOrderConfirmed.id);    
  } 

  if (cartItems.length === 0 )
    {
      return <div className="cart-empty">Tu carrito está vacío 
        <Link to="/">
          <button>Ir al inicio</button>
        </Link>
        </div>
      }

  return (
    <section className="cart-container">
        <div className="cart-background">
          <h2>Carrito de compras</h2>
          <div className="cart-item-list">
            {
              cartItems.map( itemInCart => <div className="cart-items">
              <img width="80" src={itemInCart.img}></img>
              <h4>{itemInCart.title}</h4>
              <p>Precio Unitario: ${itemInCart.price.toFixed(2)}</p>
              <p>Cantidad: {itemInCart.quantity}</p>
              <strong>
                <p>Precio total: $ {(itemInCart.quantity * itemInCart.price).toFixed(2)}</p>
              </strong>
              <button onClick={ () => removeItem(itemInCart.id)}>🗑️</button>
              </div>
              )
            }
          </div>
          <h3 className="cart-total">Total a pagar: $ {countTotalPrice().toFixed(2)}</h3>
        </div>
        <div className="cart-final-buttons">
        <button onClick={ () => clearCart() }>Vaciar carrito</button>
        <Link to="/">
          <button>Ir al inicio</button>
        </Link>
        </div>
        <FormCheckout handleCheckout={ handleCheckout } />  
    </section>
  )
}

