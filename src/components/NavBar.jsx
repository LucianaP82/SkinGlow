import "./NavBar.css"
import CartWidget from "./CartWidget"

export default function NavBar() {
  return (
  <nav>
    <h2 className="logo">SKINGLOW</h2>
    <ul>
      <a href="#"><li>LIMPIADORES</li></a>
      <a href="#"><li>SERUMS</li></a>
      <a href="#"><li>CREMAS</li></a>
    </ul>
    <CartWidget/>
  </nav>
  );
}