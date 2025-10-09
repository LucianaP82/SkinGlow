import { useState, useEffect } from "react";
import Item from "./Item";
import './ItemListContainer.css';
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../data/firebase";



export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const { categParam } = useParams();

    useEffect( ()=>{
      if(categParam === undefined ){
        const promiseData = getProducts();
        promiseData.then( (respuesta)=>{   
          setProducts(respuesta)
        }).catch( (error) => alert(`Error ${error}`))
      }
      else {
      getProductsByCategory(categParam).then( response => setProducts(response)).catch( err => alert(err))
      }
    }, [categParam])
 
    return (
        <section className="ItemListContainer-section">
            <h2 className="ItemListContainer-greeting">{greeting}</h2>
            <p className="ItemListContainer-title">Mirá nuestros productos</p>
            <div className="ItemListContainer-items">
                {
                  products.map( function(item) 
                  { return <Item 
                    key={item.id} 
                    {...item}
                  />})
                }
            </div>       
        </section>
    );
}