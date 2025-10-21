import { Link, useParams } from "react-router";
import './ItemDetailContainer.css'
import { getProductById } from "../../data/firebase";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCount  from "./ItemCount";



export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { idParam } = useParams();
    const {addItem} = useContext(cartContext);

    useEffect( () => {
        setIsLoading(true);
        setError(null);
    
      getProductById(idParam)
       .then( response => setProduct(response) )
       .catch( error => {
            setError(error.message);
            console.error(error);})
       .finally( () => setIsLoading(false));
    }, [idParam])
    
    function handleAddToCart (count) {
      addItem(product, count)
    }


    if (isLoading){
      return <h2>Cargando...</h2>
    }

    if (error){
      return <h2>Error: {error}</h2>
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
                        <ItemCount max={product.stock} min={1} onAddToCart={handleAddToCart} />
                    </div>   
                </div>
                
                <Link to="/">
                <h3 className="item-detail-return">Ir al Inicio</h3>
                </Link>
            </div>
        </div>
  )
}