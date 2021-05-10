import logo from "../image/logo.png";


const style = {
  // borderBottom: "6px solid #F6A833",
  marginBottom:'200px',
  border:'1px solid black'
};

const Navbar = () => {
  return (
    <nav style={style}>
      <div style={{width:'33%'}}>
      <img src={logo} alt="logo" style={{float:'left'}}/>
      </div>
      <div style={{width:'66%',float:'right',border:'1px solid black'}}>
      <ul style={{fontSize:'25px',listStyleType:'none',float:'left'}}>
        <li style={{float:'right',margin:'20px',}}>
          <p>What We Do</p>
        </li>
        <li style={{float:'right',margin:'20px'}}>
          <p>Profolio</p>
        </li>
        <li style={{float:'right',margin:'20px'}}>
          <p>Contact</p>
        </li >
        <li style={{float:'right',margin:'20px'}}>
          <p>Media</p>
        </li>
        <li style={{float:'right',margin:'20px'}}>
          <p>Get Involved</p>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
