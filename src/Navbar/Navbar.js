import logo from "../image/logo.png";

const style = {
  borderBottom: "6px solid #F6A833",
};

const Navbar = () => {
  return (
    <nav style={style}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <p>What We Do</p>
        </li>
        <li>
          <p>Profolio</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
        <li>
          <p>Media</p>
        </li>
        <li>
          <p>Get Involved</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
