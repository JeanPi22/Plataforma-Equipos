import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Formulario from './components/form/form.jsx'
import MiOrg from './components/MiOrg/index.jsx'

function App() {

  const [mostrarForm, actualizarMostrar] = useState(true)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  return (
    <>
      <Header />
      {mostrarForm ? <Formulario /> : <></>}      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </>
  )
}

export default App
