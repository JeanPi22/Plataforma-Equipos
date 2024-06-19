/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./miOrg.css"

const MiOrg = (props) => {

  console.log(props);

  /*
  const [mostrar, actualizarMostrar] = useState(true)
  const manejarClick = () => { 
    actualizarMostrar(!mostrar)  
  }
  */

  return <section className="orgSection">
    <h3 className="title">Mi Organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
  </section>
}

export default MiOrg