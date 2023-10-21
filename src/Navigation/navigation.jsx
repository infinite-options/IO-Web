import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link, useLocation} from "react-router-dom";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  const { selected } = props;
  return (
    <Tab
      component={Link}
      style={{ color: 'black', border: selected ? '4px solid #F6A833' : 'none'  }} 
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        // if (samePageLinkNavigation(event)) {
        //   event.preventDefault();
        // }
      }}
      {...props}
    />
  );
}

// export default function NavTabs() {
const NavTabs=()=> {
  const [value, setValue] = React.useState(0);
  
  const location = useLocation();
  const currentPath = location.pathname;

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <nav className="navbar">
    <div className="emptyDiv" ></div >
    <div style={{display:'flex', justifyContent:'flex-start'}}>
      <Link to="/" className="nav-logo">
        {/* <img src={location.pathname === "/projects" ? "/Navigation/Logo-White.png"  : "/Navigation/Logo.png"}/> */}
        <img src={"/Navigation/Logo.png"} className="nav-Image"/>
      </Link>
      {/* <div  className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div> */}
    </div>
    {/* <Box sx={{ width: '60%'}}> */}
    <Box sx={{ flex:1}}>
      <Tabs 
      value={value} 
      onChange={handleChange} 
      aria-label="nav tabs example"    
      variant="fullWidth" 
      indicatorColor="none"
      >
        <LinkTab label="About" to="/about" selected={currentPath === "/about"} />
        <LinkTab  label="Internships" to="/teams" selected={currentPath === "/teams"} />
        <LinkTab  label="Projects" to="/projects" selected={currentPath === "/projects"} />
        <LinkTab label="Contact Us" to="/contact" selected={currentPath === "/contact"} />
      </Tabs>
    </Box>
    </nav>
  );
}
export default NavTabs;