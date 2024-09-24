import React, { useEffect } from "react";
import { useMarca } from "./MarcaContext";

function ListadoMarcas() {
  const { marcas, getMarcas, eliminarMarca } = useMarca();

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <div className="container">
      <h2>Listado de Marcas</h2>
      <button
          onClick={() => getMarcas()}
          className="btn btn-primary btn-lg w-10"
        >
          Buscar
        </button>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Denominación</th>
            <th>Observación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {marcas.map((marca) => (
            <tr key={marca.id}>
              <td>{marca.id}</td>
              <td>{marca.denominacion}</td>
              <td>{marca.observaciones}</td>
              <td>
                <button onClick={() => eliminarMarca(marca.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoMarcas;

