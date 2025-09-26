import "./NavBar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router";  

export default function NavBar() {
  return (
  <nav className="nav-menu">
    <div className="nav-logo">
    <Link to="/">
      <h2>SKINGLOW</h2>
    </Link>
    </div>
    <ul className="nav-list">
      <Link to="/category/Limpieza">
        <li>LIMPIEZA</li>
      </Link>
      <Link to="/category/Serums">
        <li>SERUMS</li>
      </Link>
      <Link to="/category/Cremas">
        <li>CREMAS</li>
      </Link>
    </ul>
    <div className="nav-cart">
      <Link to="/cart">
        <CartWidget/>
      </Link>
    </div>   
  </nav>
  );
}