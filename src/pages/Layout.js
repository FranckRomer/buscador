import { Outlet, Link } from "react-router-dom";
// import '../App.css';
import '../pages.css';
import App from '../App';

const Layout = () => {
  return (
    <>
    {/* <App />  */}
      <header >
        <nav className="container-menu">
          <div className="menu">
            <ul >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pruebas">Diagnostico</Link>
              </li>
              <li>
                <Link to="/trainz">Train-Z</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header >

      <Outlet />
    </>
  )
};

export default Layout;