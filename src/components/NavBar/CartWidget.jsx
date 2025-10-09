import { cartContext } from "../context/cartContext";
import "./CartWidget.css"
import { useContext } from "react";


export default function CartWidget() {
    const { countCartItems } = useContext(cartContext)  

    return (
        <div className="cart-widget">
            <img className="cart-img" src="/imgs/cart-img.png" alt="cart-img"></img>
            <span> ({countCartItems()}) </span>
        </div>
    );
}