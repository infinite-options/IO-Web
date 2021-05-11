import logo from "../image/logo.png";
import {NavLink} from 'react-router-dom';


const style = {
  // borderBottom: "6px solid #F6A833",
  marginBottom:'200px',
  border:'1px solid black'
};

const Navbar = () => {
  return (
    <nav style={style}>
      <div style={{width:'33%'}}>
      <img src={logo} alt="logo" style={{float:'left',marginTop:'35px'}}/>
      </div>
      <div style={{width:'66%',float:'right'}}>
      <ul style={{fontSize:'25px',listStyleType:'none',float:'left'}}>
        <li style={{float:'right',margin:'20px',}}>
        <NavLink to="/whatwedo">
          <p style={{fontSize:'32px'}}>What We Do</p>
          </NavLink>
        </li>
        <li style={{float:'right',margin:'20px'}}>
        <NavLink to="/media">
          <p style={{fontSize:'32px'}}>How_we_can_help</p>
          </NavLink>
        </li>

        <li style={{float:'right',margin:'20px'}}>
        
          <p style={{fontSize:'32px'}}>Contact</p>
          
        </li >
        <li style={{float:'right',margin:'20px'}}>
        <NavLink to="/portfolio">
          <p style={{fontSize:'32px'}}>Our Portfolio</p>
          </NavLink>
        </li>
        <li style={{float:'right',margin:'20px',width:'205px',height:'90px',backgroundColor:'#F6A833',borderRadius:'1px solid black',borderRadius:'30px'}}>
        <NavLink to="/getinvolved">
          <p style={{fontSize:'32px'}}>Get Involved</p>
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
