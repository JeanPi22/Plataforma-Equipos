/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

  const {titulo, colorPrimario, colorSecundario} = props.datos
  const {colaboradores, eliminarColaborador} = props

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: colorSecundario }}
        >
          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Equipo