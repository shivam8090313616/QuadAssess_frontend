import React, { useEffect } from "react";
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
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";
import codingAnimation from "../../assets/animations/coding.json"; // Lottie Animation for Coding
import systemDesignAnimation from "../../assets/animations/system-design.json"; // Lottie Animation for System Design Section
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Landing.css"; // Custom styles
import bgAnimation from "assets/animations/background.json"; // New background animation for technical theme
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

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

  const codingAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const systemDesignAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: systemDesignAnimation,
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
            background: "linear-gradient(165deg, #2d3748, #4a5568)", // Dark theme for developer focus
          }}
        >
          <Lottie options={bgLottieOptions} height="100%" width="100%" />
        </div>
        <section className="hero-section" style={{ paddingTop: "120px" }}>
          <Container className="text-white">
            <Row>
              <Col lg="12">
                <h1 className="display-3 font-weight-bold fade-in text-white">
                  Welcome to Your Developer Interview Hub
                </h1>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Start Coding Interview Section */}
        <section className="hero-section">
          <Container>
            <Row className="text-center">
              <Col xs="12" className="mb-4">
                <div className="fade-in delay-1s">
                  <Card style={{ background: "transparent" }}>
                    <Row>
                      <Col md="6" className="d-flex align-items-center">
                        <Lottie
                          options={codingAnimationOptions}
                          height={400}
                          width={700}
                        />
                      </Col>
                      <Col
                        md="6"
                        style={{
                          minHeight: "50vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CardBody>
                          <CardTitle
                            tag="h3"
                            className="text-uppercase font-weight-bold text-white"
                          >
                            Code Challenge Interview
                          </CardTitle>
                          <CardText className="text-warning">
                            <strong>
                              Solve coding problems and get instant feedback
                              on your algorithmic skills.
                            </strong>
                          </CardText>
                          <Button
                            className="cta-button"
                            block
                            onClick={() => navigate("/interview-page-1")}
                          >
                            Start Coding Challenge <FaArrowRight className="ml-2" />
                          </Button>
                        </CardBody>
                      </Col>
                    </Row>
                    <p className="lead mt-3 fade-in delay-1s text-danger bg-light p-2 rounded border">
                      Your personalized space for coding practice, system
                      design, and more. Get started now!
                    </p>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* System Design Tips Section */}
        <section className="mb-5">
          <Container>
            <Row className="text-center">
              <Col xs="12">
                <h2 className="text-white font-weight-bold mb-4">
                  System Design Tips
                </h2>
                <p className="lead text-white text-muted mb-5">
                  Learn how to design scalable systems and tackle real-world
                  engineering challenges.
                </p>
              </Col>
            </Row>
            <Row>
              {/* System Design Card */}
              <Col md="6" lg="6" className="mb-4">
                <div className="dashboard-card fade-in delay-2s">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaDatabase className="fa-3x" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold"
                          >
                            Tip #1: Understand Database Design
                          </CardTitle>
                          <CardText>
                            Master the concepts of normalization, indexing,
                            and query optimization for better system design.
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              {/* More Tips for System Design */}
              <Col md="6" lg="6" className="mb-4">
                <div className="dashboard-card fade-in delay-3s">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaLaptopCode className="fa-3x" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold"
                          >
                            Tip #2: Learn About Microservices
                          </CardTitle>
                          <CardText>
                            Focus on breaking down large applications into
                            smaller, independently deployable services.
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* More Developer Resources */}
        <section className="py-5">
          <Container>
            <Row className="text-center">
              <Col xs="12">
                <h2 className="text-white font-weight-bold mb-4">More Developer Resources</h2>
                <p className="lead text-white mb-5">
                  Explore more resources to enhance your coding skills and system design knowledge.
                </p>
              </Col>
            </Row>
            <Row>
              {/* More Coding Practice */}
              <Col md="6" lg="6" className="mb-4">
                <div className="dashboard-card fade-in delay-2s">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaCode className="fa-3x" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold"
                          >
                            More Coding Challenges
                          </CardTitle>
                          <CardText>
                            Continue practicing with more algorithmic problems to boost your coding proficiency.
                          </CardText>
                          <Button
                            className="cta-button"
                            block
                            href="/more-coding-challenges"
                          >
                            More Challenges <FaArrowRight className="ml-2" />
                          </Button>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              {/* Explore System Design Courses */}
              <Col md="6" lg="6" className="mb-4">
                <div className="dashboard-card fade-in delay-3s">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaDatabase className="fa-3x" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold"
                          >
                            System Design Courses
                          </CardTitle>
                          <CardText>
                            Deep dive into system design and architecture for large-scale applications.
                          </CardText>
                          <Button
                            className="cta-button"
                            block
                            href="/explore-system-design"
                          >
                            Explore Now <FaArrowRight className="ml-2" />
                          </Button>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Dashboard;
