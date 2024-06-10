import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <ul className="nav-bar">
      <Link to="/" className="link">
        <li>Login</li>
      </Link>
      <Link to="/homepage" className="link">
        <li>Home Page</li>
      </Link>
    </ul>
  );
};
export default Header;
