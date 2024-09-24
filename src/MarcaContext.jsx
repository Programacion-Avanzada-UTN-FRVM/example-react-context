import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Crear el contexto
const MarcaContext = createContext();

// Proveedor del contexto que envuelve toda la aplicación
export const MarcaProvider = ({ children }) => {
  const [marcas, setMarcas] = useState([]);

  // Función para obtener las marcas
  const getMarcas = async () => {
    try {
      const value = await axios.get("http://localhost:8080/PA/marcas");
      setMarcas(value.data);
    } catch (error) {
      console.error("Error al obtener marcas", error);
    }
  };

  // Función para eliminar una marca
  const eliminarMarca = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/PA/marca/${id}`);
      setMarcas(marcas.filter((marca) => marca.id !== id));
    } catch (error) {
      console.error("Error al eliminar marca", error);
    }
  };

  // Función para agregar una nueva marca
  const agregarMarca = async (marca) => {
    try {
      const response = await axios.post("http://localhost:8080/PA/marca", marca);
      setMarcas([...marcas, response.data]);
    } catch (error) {
      console.error("Error al agregar marca", error);
    }
  };

  return (
    <MarcaContext.Provider
      value={{ marcas, getMarcas, eliminarMarca, agregarMarca }}
    >
      {children}
    </MarcaContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useMarca = () => {
  return useContext(MarcaContext);
};
