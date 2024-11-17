import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer pt-5 pb-3" style={{ background:"#212b3b" }}>
          <Container>
            <Row className="row-grid align-items-center mb-4">
              <Col lg="6">
                <h3 className="text-light font-weight-light mb-2">
                  Thank you for being part of our learning community!
                </h3>
                <span style={{ fontWeight:"bold" }} className="text-secondary">--------------------------------------------------</span>
                <h4 className="mb-0 font-weight-light text-light">
                  Stay connected and keep building your skills.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="primary"
                  href="https://github.com"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              </Col>
            </Row>
            <hr className="border border-top border-light" />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a  target="_blank">
                    QuadAssess
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end text-white">
                  <NavItem>
                    <NavLink
                      target="_blank"
                      
                    >
                      QuadAssess
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      {/* MIT License */}
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
