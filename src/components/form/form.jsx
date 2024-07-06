/* eslint-disable react/prop-types */
import { useState } from "react";
import "./form.css";
import Campo from "../Campo/index.jsx";
import ListaOpciones from "../ListaOpciones/index.jsx";
import Boton from "../Boton/index.jsx";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [colorPrimario, setColor] = useState("");

  const {registrarColaborador, crearEquipo} = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envío");
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          setValor={setNombre}
          required
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          setValor={setPuesto}
          required
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar foto"
          valor={foto}
          setValor={setFoto}
          required
        />
        <ListaOpciones 
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          valor={titulo}
          setValor={setTitulo}
          required
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          valor={colorPrimario}
          setValor={setColor}
          type="color"
          required
        />
        <Boton texto="Registrar Equipo" />
      </form>
    </section>
  );
};

export default Formulario;
