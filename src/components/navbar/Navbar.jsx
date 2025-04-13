import { Link } from "react-router-dom";
import styled from "./navbar.module.css";

function Navbar(props) {
  return (
    <div className={styled.navWrapper}>
      <div className="container">
        <div className={styled.nav}>
          <h3> {props.title} </h3>
          <ul>
            <li>
              <Link to="/">لیست محصولات</Link>
            </li>
            <li>
              <Link to="/aboute">درباره ما</Link>
            </li>
            <li>
              <Link to="/addPost">ساخت پست</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
