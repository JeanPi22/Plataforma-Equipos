import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Formulario from './components/form/form.jsx'
import MiOrg from './components/MiOrg/index.jsx'
import Equipo from './components/Equipo/index.jsx'
import Footer from './components/Footer/index.jsx'

function App() {

  const [mostrarForm, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{    
    equipo:"Front End",
    foto:"https://github.com/JeanPi22.png",
    nombre:"Jean Pierre",
    puesto:"Desarrollador"
  },
  {
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  // Registrar
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  // Eliminar
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
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
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
        />)
      }
      <Footer />
    </>
  )
}

export default App
