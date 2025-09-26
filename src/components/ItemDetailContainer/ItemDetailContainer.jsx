import { useParams } from "react-router";
import './ItemDetailContainer.css'
import { getProductById } from "../../data/mockAPI";
import { useEffect, useState } from "react";
import ItemSizePick from "./ItemSizePick";



export default function ItemDetailContainer() {
    const { idParam } = useParams();
    const [product, setProduct] = useState({ loading: true});
    
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
                        <ItemSizePick/>
                    </div>   
                </div>
                <button className="cart-button">Agregar al carrito</button>
            </div>
        </div>
  )
}