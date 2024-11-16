import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import heroAnimation from "assets/animations/hero.json"; // Add a relevant Lottie animation file
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Landing.css"; // Create and style CSS classes

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // GSAP Animations
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

  return (
    <>
      <DemoNavbar />
      <main>
        {/* Hero Section with Lottie */}
        <section className="hero-section">
          <Container className="text-center" style={{ background:"transparent" }}>
            <Row className="align-items-center">
              <Col lg="6" className="text-left">
                <h1 className="display-3 text-white font-weight-bold">
                  Redefine Your Future with AI
                </h1>
                <p className="lead text-white mt-3 mb-5">
                  Experience advanced AI-driven mock interviews tailored just for you. Get real-time feedback and elevate your career.
                </p>
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => navigate("/dashboard-page")}
                >
                  Get Started Now
                </Button>
              </Col>
              <Col lg="6">
                <Lottie options={defaultOptions} height={400} width={400} />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section with GSAP Animations */}
        <section className="section-light bg-primary features-section">
          <Container>
            <Row>
              <Col md="4" className="fade-in">
                <h3>AI-Powered Interviews</h3>
                <p>
                  Leverage advanced AI to create tailored mock interviews and prepare for success.
                </p>
              </Col>
              <Col md="4" className="fade-in">
                <h3>Real-Time Feedback</h3>
                <p>
                  Receive actionable insights immediately to continuously improve your responses.
                </p>
              </Col>
              <Col md="4" className="fade-in">
                <h3>Track Your Growth</h3>
                <p>
                  Monitor your progress with powerful analytics and achieve excellence.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Parallax Testimonials Section */}
        <section className="hero-section text-white">
          <Container>
            <h2 className="text-center">What Our Users Say</h2>
            <Row className="text-center">
              <Col md="4">
                <blockquote>
                  "QuadAssess helped me land my dream job! The feedback is unmatched."
                  <footer>- John Doe</footer>
                </blockquote>
              </Col>
              <Col md="4">
                <blockquote>
                  "AI-driven insights made my preparation effortless and effective."
                  <footer>- Jane Smith</footer>
                </blockquote>
              </Col>
              <Col md="4">
                <blockquote>
                  "Real-time feedback and analytics helped me track my growth effectively."
                  <footer>- David Lee</footer>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="call-to-action text-center">
          <Container>
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of professionals advancing their careers with QuadAssess.</p>
            <Button
              color="success"
              size="lg"
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
