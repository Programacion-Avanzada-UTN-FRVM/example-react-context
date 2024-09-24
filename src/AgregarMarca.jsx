import axios from "axios";
import React, { useState } from "react";
import { useMarca } from "./MarcaContext";

function AgregarMarca() {
  const [marca, setMarca] = useState({ denominacion: "", observaciones: "" });
  const { agregarMarca } = useMarca();

  const { denominacion, observaciones } = marca;

  const onInputChange = (e) => {
    setMarca({ ...marca, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await agregarMarca(marca);
    } catch (error) {
      alert("Error al guardar marca");
    }
  };
  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Marca </h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="denominación" className="form-label">
            Denominación
          </label>
          <input
            type="text"
            className="form-control"
            id="denominacion"
            name="denominacion"
            required={true}
            value={denominacion}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="observación" className="form-label">
            Obsevacion
          </label>
          <input
            type="text"
            className="form-control"
            id="observaciones"
            name="observaciones"
            value={observaciones}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Agregar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}

export default AgregarMarca;
