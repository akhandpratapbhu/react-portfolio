import React, { Component } from 'react'
import { Nav,Navbar} from 'react-bootstrap';
export default class NavbarReact extends Component {
    render() {
        return (
            <>
              <div className="container">
                <Navbar  expand="lg" className="Na">
            
  <Navbar.Brand href="/" style={{ maxHeight: '100px' }}>PORTFOLIO </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ms-auto my-2 my-lg-0"
      style={{ fontSize: '55px' }}
      navbarScroll
    >
        <li className="nav-item">
        <Nav.Link href="home">Home</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link href="service">Services</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link href="about">About</Nav.Link>
        </li>
        <li className="nav-item">
      <Nav.Link href="Contact">Contact</Nav.Link>
     </li>
      
    </Nav>
    
    <form className="d-flex">
      
      <button class=" btn-style" type="submit" >Sign Up</button>
      <button class="btn-btn-style" type="submit">Sign in</button>

    </form>
    
  </Navbar.Collapse>
</Navbar>
            </div>
            </>
        )
    }
}
