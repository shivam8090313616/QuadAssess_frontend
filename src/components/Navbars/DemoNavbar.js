import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              {/* Navbar Brand with logo and text */}
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <i className="ni ni-hat-3" style={{ fontSize: "2rem" }} />
                <span className="ml-2 font-weight-bold" style={{ fontSize: "24px" }}>
                  QuadAssess
                </span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <span className="font-weight-bold" style={{ fontSize: "24px" }}>
                          QuadAssess
                        </span>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                {/* Nav items */}
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                 
                  {/* Add a section for educational resources */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-book-bookmark" style={{ fontSize: "2rem" }} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/tutorials" tag={Link}>
                        Tutorials
                      </DropdownItem>
                      <DropdownItem to="/interview-tips" tag={Link}>
                        Interview Tips
                      </DropdownItem>
                      <DropdownItem to="/courses" tag={Link}>
                        Courses
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* Hamburger menu for mobile */}
                  <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                      <i className="ni ni-settings-gear-65" style={{ fontSize: "2rem" }} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem to="/profile-page" tag={Link}>
                        <i className="ni ni-single-02 mr-2" />
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        <i className="ni ni-key-25 mr-2" />
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        <i className="ni ni-circle-08 mr-2" />
                        Register
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        <i className="ni ni-key-25 mr-2" />
                        Logout
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem to="/more" tag={Link}>
                        <i className="ni ni-archive-2 mr-2" />
                        More Options
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
