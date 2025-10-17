import { Link, useParams } from "react-router";
import './ItemDetailContainer.css'
import { getProductById } from "../../data/firebase";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";




export default function ItemDetailContainer() {
    const [product, setProduct] = useState({ loading: true});
    const { idParam } = useParams();
    const {addItem} = useContext(cartContext);

    useEffect( () => {
      getProductById(idParam)
       .then( response => setProduct(response) )
       .catch( error => Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error,
                        }))
    }, [])
    
    if (product.loading){
      return <h2>Cargando...</h2>
    }

    return (
        <div className="detail-container">
            <div className="item-detail-container">
                <h3 className="item-detail-title"> {product.title} </h3>
                <div className="item-detail-img-container">
                    <img className="item-detail-img" src={product.img} alt="skin-img.jpg"></img>
                    <div className="item-detail-description-container">
                        <p className="item-detail-description">{product.description}</p>
                        <p className="item-detail-price">Precio: $ {product.price.toFixed(2)} </p>
                    </div>   
                </div>
                <button className="add-to-cart-button" onClick={ () => addItem(product) }>Agregar al carrito</button>
                <Link to="/">
                <h3 className="item-detail-return">Ir al Inicio</h3>
                </Link>
            </div>
        </div>
  )
}