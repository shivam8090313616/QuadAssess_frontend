import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"; // Ensure you are using React Router for navigation
import DemoNavbar from "components/Navbars/DemoNavbar"; // Import your Navbar component
import SimpleFooter from "components/Footers/SimpleFooter"; // Import your Footer component

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <DemoNavbar />
        <main>
          {/* 404 Error Section */}
          <section className="section section-lg section-shaped bg-gradient-blue">
            <div className="shape shape-style-1">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container
              style={{
                minHeight: "50vh", 
                display: "flex",   
                justifyContent: "center",
                alignItems: "center", 
              }}
            >
              <Row className="justify-content-center">
                <Col lg="8" className="text-center">
                  <h1 className="display-1 font-weight-bold mb-3 text-white">404</h1>
                  <h2 className="display-4 mb-4 text-white">Oops! Page Not Found</h2>
                  <p className="lead mb-4 text-white">
                    It seems that the page you're looking for doesn't exist. You can go back to the homepage or explore other sections of the site.
                  </p>
                  <Button color="primary" size="lg" tag={Link} to="/">
                    Go Back to Homepage
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default NotFoundPage;
