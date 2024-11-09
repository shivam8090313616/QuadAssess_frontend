import React from "react";
import { Container, Row, Col, Button, CardBody, CardTitle, CardText } from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter";
import DemoNavbar from "components/Navbars/DemoNavbar"; // Assuming this component exists
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// Landing page for QuadAssess
function Landing() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      <DemoNavbar />
      <main>
        {/* Hero Section */}
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
          <Container className="text-center pt-lg-md pb-100">
            <Row className="align-items-center justify-content-center">
              <Col lg="8" md="10">
                <h1 className="display-3 text-white font-weight-bold animate__animated animate__fadeIn">
                  Transform Your Career with QuadAssess
                  <br />
                  AI-Powered Interview Preparation
                </h1>
                <p className="lead text-white mt-3 mb-5 animate__animated animate__fadeIn animate__delay-1s">
                  Unlock your career potential by practicing interviews with real-time feedback. Tailored questions for your role and expertise.
                </p>
                <Button
                  color="primary"
                  size="lg"
                  className="btn-lg w-100 animate__animated animate__fadeIn animate__delay-2s"
                  onClick={() => navigate("/dashboard-page")} // Use navigate for routing
                >
                  More Exploring Now
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features-section" className="section section-light bg-light">
          <Container>
            <Row className="text-center">
              <Col md="4">
                <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1s">
                  Personalized Interview Experience
                </h3>
                <p className="lead animate__animated animate__fadeIn animate__delay-1.2s">
                  Take AI-powered, personalized mock interviews based on your role and expertise level (Fresher, Intermediate, Expert).
                </p>
              </Col>
              <Col md="4">
                <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1.4s">
                  Instant Feedback
                </h3>
                <p className="lead animate__animated animate__fadeIn animate__delay-1.6s">
                  Get instant, actionable feedback after every answer. AI evaluates your performance and helps you improve.
                </p>
              </Col>
              <Col md="4">
                <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1.8s">
                  Track Your Progress
                </h3>
                <p className="lead animate__animated animate__fadeIn animate__delay-2s">
                  Monitor your progress with real-time performance tracking and receive certificates when you excel.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="section section-default bg-primary text-white">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2 className="display-3 animate__animated animate__fadeIn animate__delay-0.3s">
                  Success Stories
                </h2>
                <p className="lead animate__animated animate__fadeIn animate__delay-0.5s">
                  Hear from our users who have successfully landed their dream jobs using QuadAssess for interview preparation.
                </p>
                <Row className="text-left">
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.5s">
                      <CardBody>
                        <CardTitle tag="h5">John Doe</CardTitle>
                        <CardText>
                          "Thanks to QuadAssess, I aced my interviews! The real-time feedback and tailored questions helped me feel prepared."
                        </CardText>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.7s">
                      <CardBody>
                        <CardTitle tag="h5">Jane Smith</CardTitle>
                        <CardText>
                          "The personalized mock interviews helped me tackle even the toughest interview questions with confidence."
                        </CardText>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.9s">
                      <CardBody>
                        <CardTitle tag="h5">David Lee</CardTitle>
                        <CardText>
                          "The feedback and tracking system made it easy to see where I needed to improve, and it worked wonders!"
                        </CardText>
                      </CardBody>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How it Works Section */}
        <section className="section section-light bg-light">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h3 className="display-4 animate__animated animate__fadeIn animate__delay-0.5s">
                  How QuadAssess Works
                </h3>
                <p className="lead animate__animated animate__fadeIn animate__delay-0.7s">
                  QuadAssess empowers you to practice and excel in interviews using AI that adapts to your experience level. Here’s how:
                </p>
                <Row className="text-left">
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.5s">
                      <CardBody>
                        <CardTitle tag="h5">Step 1: Choose Your Role</CardTitle>
                        <CardText>Select your desired role, department, and expertise level (Fresher, Intermediate, or Expert).</CardText>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.7s">
                      <CardBody>
                        <CardTitle tag="h5">Step 2: Take Mock Interviews</CardTitle>
                        <CardText>Start practicing with AI-driven mock interviews designed for your experience and role.</CardText>
                      </CardBody>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="shadow-lg border-0 animate__animated animate__fadeIn animate__delay-0.9s">
                      <CardBody>
                        <CardTitle tag="h5">Step 3: Get Instant Feedback</CardTitle>
                        <CardText>Receive detailed feedback on your answers, improve your performance, and track your progress.</CardText>
                      </CardBody>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer Section */}
        <SimpleFooter />
      </main>
    </>
  );
}

export default Landing;
