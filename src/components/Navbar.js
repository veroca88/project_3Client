import React, { Component } from "react";
import { Navbar, Nav, Table } from "react-bootstrap";

class NavbarResp extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div>
        {/* id="collasible-nav-dropdown" */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <img
            className="logo-brand"
            src="logo-brand.png"
            alt="logo brand"
          ></img>
          <Navbar.Brand className="brand" href="/">
            What to Wear
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Daily Inspiration</Nav.Link>
              <div className="dropdown">
                <Nav.Link>Women</Nav.Link>
                <div className="dropdown-content">
                  <a href="#"> New Arrivals </a>
                  <a href="#"> Offers </a>
                  <a href="#"> Trending Now </a>
                  <a href="#"> Shop by Category </a>
                  <a href="#"> Save the Planet </a>
                </div>
              </div>
              <div className="dropdown">
                <Nav.Link>BestSellers</Nav.Link>
                <div className="dropdown-content">
                  <a href="#"> January </a>
                  <a href="#"> February </a>
                  <a href="#"> March </a>
                </div>
              </div>
            </Nav>
            <Nav>
              <div className="dropdown">
                <Nav.Link>Sign In</Nav.Link>
                <div className="dropdown-content">
                  <button className="btn-signin" href="#singin">
                    {" "}
                    Sign in{" "}
                  </button>
                  <a href="#"> My account </a>
                  <a className="small-notification" href="#">
                    {" "}
                    Not a member yet? Join here{" "}
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <Nav.Link>Shopping Bag (0)</Nav.Link>
                <div className="dropdown-content">
                  <Table className="list-items" size="sm">
                    {/* <thead>
                      <tr>
                        <th></th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr>
                        <td id="shop-bag">Your shopping bag is empty</td>
                      </tr>
                      <tr>
                        <td>Order value: $0.0</td>
                      </tr>
                      <tr>
                        <td>Total: $0.0</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarResp;
