import React from 'react';
import { ContactUsDiv, ContactUsMessage, ContactUsForm, ContactIcon } from './ContactUs.style'
import { textAlign } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import EMSLogo from '../../Utils/Images/EMS-logo.png'
import { FormLogo } from '../Authentication/Register/forms.style';
import EmailIcon from '@mui/icons-material/Email';
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";



const ContactUs = () => {
  const navigate = useNavigate();

  const onMailClick = () => {
    window.location.href = 'mailto:ems.rutvik@gmail.com';
  }

  return (
    <ContactUsDiv>
      <Link to='/'>
        <FormLogo src={EMSLogo} />
      </Link>
      <ContactUsMessage>For Contact or Queries</ContactUsMessage>
      <ContactUsForm>
        Reach Out us at
      </ContactUsForm>
      <ContactIcon>
        <Link to="mailto:ems.rutvik@gmail.com"  style={{textDecoration:"none", color:"black"}}><IoMdMail />  </Link> &nbsp;
       <Link to="https://www.linkedin.com/in/rutvik-raut-961884211/"  style={{textDecoration:"none", color:"black"}}><FaLinkedin /> </Link> &nbsp;
       <Link to="https://twitter.com/Rutvik_Raut_30/"  style={{textDecoration:"none", color:"black"}}><FaXTwitter />  </Link> &nbsp;
       </ContactIcon>
      
      
    </ContactUsDiv>
  )
}


export default ContactUs;