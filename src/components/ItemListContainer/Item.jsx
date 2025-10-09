import './Item.css'
import { Link } from "react-router";

export default function Item({ id,title, img, price }) {

  return (
    <div className="item-card">
      <h3 className="item-card-title"> {title} </h3>
      <img className="item-card-img" src={img} alt="skin-img.jpg"></img>
      <p className="item-card-price">Precio: $ {price.toFixed(2)}</p>
      <hr/>
      <Link to={ `/detalle/${id}` }>
        <button className="button-detail">Ver detalle</button>
      </Link>
    </div>
  )
}


