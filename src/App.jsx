import './App.css'

function App() {
  const usuario = {
    name: "Luciana",
    age: "20",
    color: "#a2409aff",
  }

  function isUserPaymentok () {
    return "No pagaste 🤯"
  }
       

  return (
    <>
      <section style={{ backgroundColor: usuario.color }}>
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
