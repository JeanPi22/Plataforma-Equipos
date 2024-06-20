import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Formulario from './components/form/form.jsx'
import MiOrg from './components/MiOrg/index.jsx'
import Equipo from './components/Equipo/index.jsx'

function App() {

  const [mostrarForm, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <>
      <Header />
      {mostrarForm ? 
        <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        /> 
        : <></>
      }      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map( (equipo) => <Equipo
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores}
        />)
      }
    </>
  )
}

export default App
