import './App.css'

function App() {
  const usuario = {
    name: "Luciana",
    age: "20",
    color: "#a2409aff",
  }

  const sectionStyles = {
    backgroundColor: usuario.color,
    padding: "20px",
    border: "2px solid #f4e114ff",
  }
  function isUserPaymentok() {
    return "No pagaste 🤯"
  }
  


  return (
    <>
      <section style={sectionStyles}>
        <h1>Hola Mundo!</h1>
        <h2>Bienvenido {usuario.name} a la clase, tenés {usuario.age} años</h2>
        
        <div className="card">
          <p>
            <p>El estado de tu membresia es: {isUserPaymentok()}</p>
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more 
        </p>
      </section>
    </>
  )
}

export default App
