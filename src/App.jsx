import AgregarMarca from "./AgregarMarca";
import ListadoMarcas from "./ListadoMarcas";
import { MarcaProvider } from "./MarcaContext";

function App() {
  return (
    <>
      <MarcaProvider>
        <AgregarMarca />
        <ListadoMarcas />
      </MarcaProvider>
      ,
    </>
  );
}

export default App;
