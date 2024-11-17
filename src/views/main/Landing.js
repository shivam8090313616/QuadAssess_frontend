import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import heroAnimation from "assets/animations/hero.json"; // Lottie animation for Hero Section
import bgAnimation from "assets/animations/background.json"; // Animation for Features Section
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaChartLine, FaUsers, FaCogs } from "react-icons/fa"; // React Icons
import "./Landing.css"; // Custom styles

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
      },
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const bgLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: bgAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <>
      <DemoNavbar />
      <main>
        <div
          className="bg-animation"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: "linear-gradient(165deg, #98c1d9, #3d5a80)",
          }}
        >
          <Lottie options={bgLottieOptions} height="100%" width="100%" />
        </div>
        <section className="hero-section" style={{ padding: "130px 0px" }}>
          <Container className="text-center">
            <Row className="align-items-center">
              <Col lg="6" className="text-left fade-in">
                <h1 className="display-3 text-white font-weight-bold">
                  Transform Your Career with AI-Powered Solutions
                </h1>
                <p className="lead text-white mt-3 mb-5">
                  Unlock your potential with real-time AI-driven feedback, mock
                  interviews, and growth tracking. Enhance your skills and
                  advance your career.
                </p>
                <Button
                  color="primary"
                  size="lg"
                  className="cta-button"
                  onClick={() => navigate("/dashboard-page")}
                >
                  Get Started Now
                </Button>
              </Col>
              <Col lg="6">
                <Lottie options={defaultOptions} height={600} width={600} />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section with Animated Icons */}
        <section className="hero-section">
          <Container className="p-5">
            <Row>
              <Col md="6" className="fade-in">
                <Card className="feature-card">
                  <div className="feature-icon">
                    <FaRocket size={50} />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">AI-Powered Mock Interviews</CardTitle>
                    <CardText>
                      Enhance your interview skills with AI-driven mock sessions
                      designed to simulate real-life scenarios.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="fade-in">
                <Card className="feature-card">
                  <div className="feature-icon">
                    <FaChartLine size={50} />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Real-Time Feedback</CardTitle>
                    <CardText>
                      Receive immediate, actionable insights from AI to
                      fine-tune your performance and ace the interview.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="fade-in">
                <Card className="feature-card">
                  <div className="feature-icon">
                    <FaUsers size={50} />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Track Your Growth</CardTitle>
                    <CardText>
                      Visualize your progress over time with detailed analytics
                      and performance tracking to see your improvement.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="fade-in">
                <Card className="feature-card">
                  <div className="feature-icon">
                    <FaCogs size={50} />
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">Customizable Settings</CardTitle>
                    <CardText>
                      Tailor the mock interview experience to your preferences
                      with adjustable difficulty levels and feedback modes.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Parallax Testimonials Section */}
        <section className="testimonials-section hero-section text-white">
          <Card style={{ background: "transparent" }}>
            <Row>
              <Col
                md="8"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  marginBottom: "50px",
                }}
                className="mx-auto"
              >
                <h2 className="text-center text-white">
                  What Our Users Are Saying
                </h2>
                <hr style={{ borderTop: "2px solid white" }} />
                <Row className="text-center">
                  <Col md="4" className="fade-in">
                    <blockquote>
                      "QuadAssess helped me land my dream job! The feedback is
                      unmatched."
                      <footer>- John Doe</footer>
                    </blockquote>
                  </Col>
                  <Col md="4" className="fade-in">
                    <blockquote>
                      "AI-driven insights made my preparation effortless and
                      effective."
                      <footer>- Jane Smith</footer>
                    </blockquote>
                  </Col>
                  <Col md="4" className="fade-in">
                    <blockquote>
                      "Real-time feedback and analytics helped me track my
                      growth effectively."
                      <footer>- David Lee</footer>
                    </blockquote>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action text-center">
          <Container>
            <h2>Ready to Take the Next Step in Your Career?</h2>
            <p>
              Join thousands of professionals advancing their careers with
              AI-powered mock interviews.
            </p>
            <Button
              color="success"
              size="lg"
              className="cta-button"
              onClick={() => navigate("/register")}
            >
              Join Now
            </Button>
          </Container>
        </section>

        {/* Footer */}
        <SimpleFooter />
      </main>
    </>
  );
}

export default Landing;
