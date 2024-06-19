import "./boton.css"

const Boton = (props) => {
  // eslint-disable-next-line react/prop-types
  return <button className="boton">{props.texto}</button>
}

export default Boton