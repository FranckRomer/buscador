import './App.css';
import { CreateTable } from "./modules/CreateTable"
import { Swtch } from "./modules/Switch"
import { Checkbox } from "./modules/Checkbox"

function App() {
  return (
    <div className="App">
      <h1>Tabla de datos</h1>

      <header className="App-header">
        {/* <div className="container-switch">
            <span>Datos de Hoy </span>
            <label className="switch">
                <input type="checkbox" onChange={}/>
                <span className="slider"></span>
            </label>
        </div> */}
        {/* <div>
          <span>Datos de Hoy </span>
          <Swtch />
          
        </div> */}
        
        <CreateTable />

      </header>

    </div>
  );
}

export default App;
