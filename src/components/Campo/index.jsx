/* eslint-disable react/prop-types */
import "./campo.css";

const Campo = (props) => {

  const placeholderModificado = `${props.placeholder}...`;

  const {type = "text"} = props

  const manejarCambios = (e) => {
    props.setValor(e.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambios}
        type={type}
      />
    </div>
  );
};

export default Campo;
