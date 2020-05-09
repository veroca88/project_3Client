import React from "react";
import { Navbar, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/Authentication";

export default function NavbarPage() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn, currentUser } = context.state;
        console.log('THIS IS SHOPPING BAG', currentUser)
        return (
        <>          
          <Navbar
            id="navbar-logo"
            collapseOnSelect
            expand="lg"
            // bg="light"
            variant="light"
          >
            <Link to="/">
            <img className="logo-brand" src="green.png" alt="logo brand"></img>

            </Link>

            <Navbar.Brand>
              <Link className="logo-brand" to="/">
                Aware
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Navbar>









          <Navbar
            id="navbar"
            collapseOnSelect
            expand="lg"
            // bg="light"
            variant="light"
          >
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/daily-inspiration" className="link-navbar">
                  Daily Inspiration
                </Link>
                <Link className="link-navbar" to="/products">
                  Products
                </Link>
              </Nav>
              <Nav>
                {isLoggedIn ? (
                  <>
                    <Link to="/"
                      className="link-navbar"
                      onClick={context.handleLogout}
                    >
                      Logout
                    </Link>
                    <Link className="link-navbar" to="/profile">
                      My account{" "}
                    </Link>

                    <div className="link-navbar">
                      <Link to={{
                        pathname:`/shopping-bag/${currentUser._Id}`,
                        state: {
                          currentUser: currentUser
                        }
                      }}
                      className="link-navbar">
                        <img src="commerce-and-shopping_24x24.png"></img> ({currentUser.userShoppingCart.items.length})
                      </Link>
                      {/* <div className="dropdown-content">
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
                      </div> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown">
                      <Link to="/signup" className="link-navbar">
                        Sign In
                      </Link>
                      <div className="dropdown-content">
                        <Link className="link-navbar" to="/login">
                          Login
                        </Link>
                        <Link className="link-navbar" to="/login">
                          {" "}
                          My account{" "}
                        </Link>
                        <Link
                          className="small-notification link-navbar"
                          to="/signup"
                        >
                          Not a member yet? Join here
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link to="/shopping-bag" className="link-navbar">
                      <img src="commerce-and-shopping_24x24.png"></img> (0)
                      </Link>
                      {/* <div className="dropdown-content">
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
                      </div> */}
                    </div>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}
