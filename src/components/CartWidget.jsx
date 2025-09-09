import "./CartWidget.css"
export default function CartWidget() {
    return (
        <div className="cart-widget">
            <a href="https://www.google.com"><img className="cart-img" src="/imgs/cart-img.png" alt="cart-img"></img></a>
            <span> (0) </span>
        </div>
    );
}