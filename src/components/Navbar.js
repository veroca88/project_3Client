import React from "react";
import { Navbar, Nav, Table } from "react-bootstrap";
import { AuthContext } from "./context/Authentication";

export default function NavbarPage() {
  return (
    <AuthContext.Consumer>
      {context => {
        const { isLoggedIn } = context.state;
        console.log(`current user ================`, context.state.currentUser)
        return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
      <img className="logo-brand" src="green.png" alt="logo brand"></img>
      <Navbar.Brand className="brand" href="/">
        Ecommerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Daily Inspiration</Nav.Link>
          <div className="dropdown">
            <Nav.Link href="/products">Products</Nav.Link>
            {/* <div className="dropdown-content">
              <a href="#"> New Arrivals </a>
              <a href="#"> Offers </a>
              <a href="#"> Trending Now </a>
              <a href="#"> Shop by Category </a>
              <a href="#"> Save the Planet </a>
            </div> */}
          </div>
          {/* <div className="dropdown">
            <Nav.Link>BestSellers</Nav.Link>
            <div className="dropdown-content">
              <a href="#"> January </a>
              <a href="#"> February </a>
              <a href="#"> March </a>
            </div>
          </div> */}
        </Nav>
        <Nav>
        {isLoggedIn ? (
            <>
          <Nav.Link onClick={context.handleLogout}>Logout</Nav.Link>
          <Nav.Link href="/profile">My account </Nav.Link>
            </>
          ) : (
            <>   
          <div className="dropdown">
            <Nav.Link>Sign In</Nav.Link>
            <div className="dropdown-content">
              <Nav.Link href="/login">Login</Nav.Link>
              <a href="/login"> My account </a>
              <a className="small-notification" href="/signup">
                Not a member yet? Join here
              </a>
            </div>
          </div>
          </>            
          )}
          <div className="dropdown">
            <Nav.Link>Shopping Bag (0)</Nav.Link>
            <div className="dropdown-content">
              <Table className="list-items" size="sm">
                <tbody>
                  <tr>
                    <td colSpan="2" id="shop-bag">
                      Your shopping bag is empty
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="name-display">Order value:</td>
                    <td className="value-display">$0.00</td>
                  </tr>
                  <tr>
                    <td className="name-display">Total: </td>
                    <td className="value-display">$0.0</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        )
      }}
    </AuthContext.Consumer>
  );
}
