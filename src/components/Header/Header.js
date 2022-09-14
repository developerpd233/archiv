import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/Logo.png'
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BiShoppingBag } from "@react-icons/all-files/bi/BiShoppingBag";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import './Header.css'

// GiHamburgerMenu  BsHandbag  AiOutlineUser
const Header = () => {
  
  return (
    <>
    
     <Navbar style={{backgroundColor:'black'}} >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-bs-controls="basic-navbar-nav" />

        <Navbar.Collapse  className="justify-content-between" id="basic-navbar-nav"> */}
        <Navbar.Brand className='text-white '><GiHamburgerMenu size={25}/></Navbar.Brand>
        <Navbar.Brand href="#home"><img src={logo} className='img-fluid ' /></Navbar.Brand>
          <Nav className=''>
         
            <Nav.Link className='text-white' href="#home" ><AiOutlineSearch size={22}/></Nav.Link>
            <Nav.Link className='text-white'  href="#link"><BiShoppingBag size={22}/></Nav.Link>
           <Nav.Link className='text-white' ><AiOutlineUser size={22}/></Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    <Navbar variant="dark" expand="lg"  style={{backgroundColor:'black'}}>

        <Container>
        <Navbar.Toggle className='tog' aria-bs-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="justify-content-md-center" id="basic-navbar-nav"> 
          <Nav>
            <Nav.Link href="#home" style={{paddingRight: '32px',color:'white'}}>DESIGNERS</Nav.Link>
            <Nav.Link href="#features" style={{paddingRight: '32px',color:'white'}}>TOPS</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>BOTTOMS</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>ACCESSORIES</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>BOTTOMS</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>JACKETS</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>HATS</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight: '32px',color:'white'}}>TEES</Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
  )
}
export default Header;