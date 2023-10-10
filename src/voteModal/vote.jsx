import * as React from 'react';
import Button from '@mui/joy/Button';
// import Button from '@mui/material/Button';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import "./vote.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const [firstName, setFirstName]  = React.useState("");
  const [lastName, setLastName]  = React.useState("");
  const [email, setEmail]  = React.useState("");
  const [companyName, setCompanyName]  = React.useState("");
  const [companyURL, setCompanyURL]  = React.useState("");
  const [phone, setPhone]  = React.useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     companyName,
  //     companyURL,
  //     phone
  //   }

  //   console.log(formData);

  // };



 const handleClick = () =>{
    window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")

  }

  return (

 <div className="content-center text-center body-font margin-bottom ">

      {/* <Typography variant="h1" className="center-div-content flex-display font-28"> We could use your help !! </Typography> */}
      <h1 className="center-div-content flex-display font-36"> We could use your help !! </h1>


      {/* <Typography variant="h4" className="center-div-content flex-display color-black">Please vote for our designs in the Tucson Casita Model Plan Competition</Typography> */}
      <h2 className="center-div-content color-black">Please vote for <u> our designs</u> in the Tucson Casita Model Plan Competition</h2>

      
      <Button variant="contained bg-color vote-btn" onClick={handleClick} >Vote for L-Casita and I-Casita Now!</Button>      

      <h3 className="bold-font"> (Select our designs from the drop down menus) </h3>

      <h3 className="bold-font font-28 margin-18"> Our Designs</h3>

      <table className="full-width"  style={{width : "100%"}}>

      <tr className="full-width">
      <td className="center-div-content text-center">
        <img className="image-dimesion-L-Casita" src='artifacts/lcasita.jpg' alt="L-Casita" />
      </td>
        <td className="center-div-content text-center">
        <img className="image-dimesion" src="artifacts/icasita.jpg" alt="I-Casita" />
        </td>
      </tr>
      <tr className="full-width">
      <td className="center-div-content text-center casita">
          <a target="_blank" href="https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/images/adu/survey/submittals/60-the-_l_-casita.pdf">"L" Casita</a>
        </td>
        <td className="center-div-content text-center casita">
          <a target='_blank' href="https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/images/adu/survey/submittals/64-the-_i_-casita.pdf">"I" Casita</a>
        </td>
      </tr>

      </table>

    <div className="text-center margin-top">
      <a href="https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting" target="_blank">
      <img alt="tucson" src="/artifacts/tucson.jpg" className="tucson-img" />
      </a>
    </div>
    {/* <div className="text-center">
      Casita Model Plan Design Competition <br />
      Public Vote Open NOW OPEN
    </div> */}
          {/* // feedback form */}
    {/* <h2 className="bold-font center-heading text-center"> Help us make these Designs better</h2>
    <form onSubmit={handleSubmit}>
    <FormControl className="bg-color padding-20 margin-bottom" >

    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
      <TextField
        className='bg-color-white'
        value={firstName}
        onChange = {(e) => {
          // console.log(e.target.value)
          setFirstName(e.target.value)
        }}
        id="name"
        label="First Name"

        />
      <TextField
        className='bg-color-white'
        value={lastName}
        onChange = {(e) => {
          // console.log(e.target.value)
          setLastName(e.target.value)
        }}
        id="name"
        label="Last Name"

        />
    </Box>
    

    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
    <TextField
        className='bg-color-white'
        value={phone}
        onChange = {(e) => {
          // console.log(e.target.value)
          setPhone(e.target.value)
        }}
        id="phone"
        label="Phone Number"
      />

    <TextField
        className='bg-color-white'
        
        value={email}
        onChange = {(e) => {
          // console.log(e.target.value)
          setEmail(e.target.value)
        }}

        id="email"
        label="Email address"
      />
    </Box>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >

    <TextField
        className='bg-color-white'
        // value={formData.companyName}
        // onChange={handleChange}
        value={companyName}
        onChange = {(e) => {
          // console.log(e.target.value)
          setCompanyName(e.target.value)
        }}

        id="company"
        label="Company Name"
      />

    <TextField
        className='bg-color-white'
        // value={formData.companyUrl}
        // onChange={handleChange}
        value={companyURL}
        onChange = {(e) => {
          // console.log(e.target.value)
          setCompanyURL(e.target.value)
        }}

        id="website"
        label="Website URL"
      />
    </Box>
    <Box>
    <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>      

    </Box>
    </FormControl>
    </form> */}

    {/* <h2 className="bold-font center-heading text-center"><a target="_blank" href="https://infiniteoptions.com/">Continue to Infinite Options website</a></h2> */}

    </div>
        
  );
}
