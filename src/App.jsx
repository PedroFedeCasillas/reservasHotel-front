import "./App.css";
import Fondo from "./assets/fondoHome2.png";

function App() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen text-white text-center mb-16"
        style={{
          backgroundImage: `url(${Fondo})`,
        }}
      >
        <h1 className="text-white text-2xl font-bold">Reservas Hotel</h1>
      </div>
    </>
  );
}

export default App;
