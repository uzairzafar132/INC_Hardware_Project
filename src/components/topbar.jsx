import React from 'react';
import { Navbar,  Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const  topbar =  ()  =>{
return<>

<Navbar className='navbar' bg="transparent" text="dark" expand="lg" style={{maxWidth:'85%',paddingLeft:'2%'}}>
  <Container>
 <b> <Navbar.Brand >INO <br></br>Reporter</Navbar.Brand></b>
 <Button className='ml-auto bg-dark text-light btn-hover '>
  <Link className='Link text-light' to="/login">Login</Link>
  </Button>

   
  </Container>
</Navbar>

</>
}
export default topbar;