import { Component } from "react"
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap"


interface navBarProps {

}

class MyNavBar extends Component{
  

    render(){
        return(
        <>
  <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
    )
    }


    
}

export default MyNavBar