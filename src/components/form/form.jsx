/* eslint-disable react/prop-types */
import { useState } from "react";
import "./form.css";
import CampoTexto from "../campoTexto/campoTexto.jsx";
import ListaOpciones from "../ListaOpciones/index.jsx";
import Boton from "../Boton/index.jsx";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const {registrarColaborador} = props

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

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          setValor={setNombre}
          required
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          setValor={setPuesto}
          required
        />
        <CampoTexto
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
    </section>
  );
};

export default Formulario;
