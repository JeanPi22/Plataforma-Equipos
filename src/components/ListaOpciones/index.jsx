/* eslint-disable react/prop-types */
import "./listaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const manejarCambio = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((equipo, posicion) => {
          return <option key={posicion}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
