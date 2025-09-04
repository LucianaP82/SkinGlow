import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <div>
       <NavBar/>
       <ItemListContainer greeting="Bienvenidos! Tu piel merece lo mejor"/>
      </div>
    </>
  )
}

export default App
