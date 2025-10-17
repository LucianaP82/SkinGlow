import { useState } from "react";
import "./FormCheckout.css"

export default function FormCheckout(props) {
  const [formData, setFormData] = useState({
     username: "", email: "", phone: ""
  })

  console.log(formData)

  function handleSubmit(evt){
    evt.preventDefault();
    console.log("Formulario enviado", formData)
    props.handleCheckout(formData)
  }

  function handleInputChange(evt){
    const value = evt.target.value
    const inputName = evt.target.name
    const newFormData = { ...formData}
    newFormData[inputName] = value;
    setFormData(newFormData)
  }

  return(
    <section>
    <h2 className="form-checkout-title"> Formulario de compra</h2>
    <form className="form-checkout" onSubmit={ handleSubmit } >
       <label>
          <span>Nombre:</span>
          <input onChange={handleInputChange} required name="username" type="text" value={formData.username} placeholder="María Lopez"/>
       </label>
       <label>
          <span>Email:</span>
          <input onChange={handleInputChange} required name="email" type="email" value={formData.email} placeholder="info@skinglow.com"/>
       </label>
       <label>
        <span>Teléfono:</span>
        <input onChange={handleInputChange} required  name="phone" type="tel" pattern="[0-9]{8,15}" value={formData.phone} placeholder="1152223344"/>
       </label>
        <div className="form-buttons-container">
            <button>
                Confirmar Compra
            </button>
            <button 
            onClick={ () => setFormData({username: "", email: "", phone: ""})}
                type="button">
                Borrar Datos
            </button>
       </div>
    </form>
    </section>
  )
}