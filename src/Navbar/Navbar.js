import logo from "../image/InfiniteOptionsLogoDark.png";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="nav-ul">
          <li className="nav-item">
            <a href="" className="nav-link">
              <img src={logo} alt="Infinite Options Logo" />
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              What We Do
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Profolio
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Media
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Get Involved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
