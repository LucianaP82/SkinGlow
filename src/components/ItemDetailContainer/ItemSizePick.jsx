import { useState } from "react"
import "./ItemSizePick.css"

export default function ItemSizePick(){
  const [size, setSize] = useState("30 ml");

  return (
    <div>
      <div>
        <button className="button-pick" onClick={ () => setSize("30 ml") }>30 ml</button>
        <button className="button-pick" onClick={ () => setSize("50 ml") }>50 ml</button>
      </div>
      <p>Tamaño seleccionado: 
        <span> {size} </span>
      </p>
    </div>
  )
}