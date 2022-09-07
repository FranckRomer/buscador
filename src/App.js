import logo from './logo.svg';
import './App.css';
import { CreateTable } from "./modules/CreateTable"
import { TableContadores } from "./modules/TableContadores"
import { TableAlcancia } from "./modules/TableAlcancia"


function App() {
  return (
    <div className="App">
      <h1>Tabla de datos</h1>
      {/* <ul>
        <p>SERVIDOR</p>
        <CreateTable />

        <p>CONTADORES</p>
        <TableContadores />

        <p>ALCANCIAS</p>
        <TableAlcancia /> 
      </ul> */}
      <header className="App-header">
        <CreateTable />
        
      </header>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lista de camiones en operación
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CreateTable />
      </header> */}

    </div>
  );
}

export default App;
