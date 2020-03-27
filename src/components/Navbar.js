import React, {Component} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class NavbarResp extends Component {
    state = {
        isOpen: false
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false})
    }
    render() {
        return (
            <div>
                {/* id="collasible-nav-dropdown" */}
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">What to Wear</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#daily-inspiration">Daily Inspiration</Nav.Link>
          <Nav.Link href="#bestSellers">BestSellers</Nav.Link>
          <NavDropdown class="my-dropdown-toggle" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose} show={this.state.isOpen} title="Women" >
            <NavDropdown.Item href="#action/3.1">Only Action Item</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Shopping bag ( 0 )</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            SigIn
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>  
            </div>
        )
    }
}

export default NavbarResp


