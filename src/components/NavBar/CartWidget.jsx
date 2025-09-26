import "./CartWidget.css"

export default function CartWidget() {
    return (
        <div className="cart-widget">
            <img className="cart-img" src="/imgs/cart-img.png" alt="cart-img"></img>
            <span> (0) </span>
        </div>
    );
}