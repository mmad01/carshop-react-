import { Link } from "react-router-dom";
import styled from "./navbar.module.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand" href="#">
          سایت من
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item d-none">
              <Link className="nav-link" to="/">
                لیست محصولات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" id="navbarNavDropdown" role="button">
                محصولات
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/cartPage" id="navbarNavDropdown" role="button">
                سبد ها
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userPage" id="navbarNavDropdown" role="button">
                کاربران
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
