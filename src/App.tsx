import "./App.css";
import ListUseExample from "./Components/ListUseExample/ListUseExample";
import Product from "./Product";
import Saludador from "./ReactFC";

function App() {
  return (
    <>
      <Saludador name="sebastian">
        <h2>Aqui iria el componente hijo</h2>
      </Saludador>
      <Product
        active={true}
        title="producto 1"
        description="descripcion re loca"
        images={["imagen1", "imagen2", "imagen3"]}
        price={200}
      />
      <ListUseExample />
    </>
  );
}

export default App;
