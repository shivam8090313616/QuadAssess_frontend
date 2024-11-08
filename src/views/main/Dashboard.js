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
import DemoNavbar from "components/Navbars/DemoNavbar"; 
import SimpleFooter from "components/Footers/SimpleFooter"; 
import devImg from "../../assets/img/custome/dev.png";
// Import Font Awesome icons
import {
  FaArrowRight,
  FaUser,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

class Dashboard extends React.Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
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
            <Container className="text-white">
              <Row>
                <Col lg="12">
                  <h1 className="display-3 font-weight-bold fade-in text-white">
                    Welcome to Your Dashboard
                  </h1>
                  <p className="lead mt-3 fade-in delay-1s text-danger bg-light p-2 rounded border">
                    Your personalized space for interview preparation, courses,
                    and more. Choose a section to get started.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Start Interview Section */}
          <section className="section section-light bg-light py-5">
            <Container>
              <Row className="text-center">
                <Col xs="12" md="12" lg="12" className="mb-4">
                  <div className="dashboard-card fade-in delay-1s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col md="6" className="d-flex align-items-center">
                          <img
                            src={devImg}
                            alt="Interview"
                            className="img-fluid rounded"
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
                              tag="h5"
                              className="text-uppercase font-weight-bold text-primary"
                            >
                              Take an Interview
                            </CardTitle>
                            <CardText>
                              Test your skills by taking a live interview. Get
                              real-time feedback and improve your performance.
                            </CardText>
                            <Button color="danger" block href="/interview-page-1">
                              Start Interview <FaArrowRight className="ml-2" />
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

          {/* Interview Tips Section */}
          <section className="section section-light bg-light py-5">
            <Container>
              <Row className="text-center">
                <Col xs="12">
                  <h2 className="text-primary font-weight-bold mb-4">
                    Interview Tips
                  </h2>
                  <p className="lead text-muted mb-5">
                    Here are some valuable tips to help you prepare for your
                    interview and impress your future employer!
                  </p>
                </Col>
              </Row>
              <Row>
                {/* Interview Tips Card 1 */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-2s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaUser className="fa-3x text-info" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-info"
                            >
                              Tip #1: Research the Company
                            </CardTitle>
                            <CardText>
                              Learn about the company's mission, values, and
                              recent projects. This will help you tailor your
                              answers.
                            </CardText>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                </Col>

                {/* Interview Tips Card 2 */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-3s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaBookOpen className="fa-3x text-info" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-info"
                            >
                              Tip #2: Practice Behavioral Questions
                            </CardTitle>
                            <CardText>
                              Prepare for common behavioral questions. Use the
                              STAR method to frame your answers.
                            </CardText>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                </Col>

                {/* Interview Tips Card 3 */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-4s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaUser className="fa-3x text-info" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-info"
                            >
                              Tip #3: Dress Professionally
                            </CardTitle>
                            <CardText>
                              First impressions matter. Make sure to dress
                              appropriately for the interview to show you are
                              serious.
                            </CardText>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                </Col>

                {/* Interview Tips Card 4 */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-5s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaChalkboardTeacher className="fa-3x text-info" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-info"
                            >
                              Tip #4: Prepare Questions
                            </CardTitle>
                            <CardText>
                              Prepare thoughtful questions for the interviewer.
                              It shows your interest in the role and company.
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

          {/* More Section */}
          <section className="section section-light bg-light py-5">
            <Container>
              <Row className="text-center">
                <Col xs="12">
                  <h2 className="text-primary font-weight-bold mb-4">More</h2>
                  <p className="lead text-muted mb-5">
                    Explore more options to enhance your interview preparation
                    and career growth.
                  </p>
                </Col>
              </Row>
              <Row>
                {/* More Interviews Card */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-2s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaChalkboardTeacher className="fa-3x text-success" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-success"
                            >
                              More Interviews
                            </CardTitle>
                            <CardText>
                              Practice with more interview sessions to perfect
                              your responses and boost your confidence.
                            </CardText>
                            <Button
                              color="success"
                              block
                              href="/more-interviews"
                            >
                              Start More Interviews{" "}
                              <FaArrowRight className="ml-2" />
                            </Button>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                </Col>

                {/* Explore Courses Card */}
                <Col md="6" lg="6" className="mb-4">
                  <div className="dashboard-card fade-in delay-3s">
                    <Card className="shadow-lg border-0 rounded-lg">
                      <Row>
                        <Col
                          md="3"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <FaBookOpen className="fa-3x text-info" />
                        </Col>
                        <Col md="9">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-uppercase font-weight-bold text-info"
                            >
                              Explore Courses
                            </CardTitle>
                            <CardText>
                              Enhance your skills with targeted courses to
                              prepare for a variety of interview topics.
                            </CardText>
                            <Button color="info" block href="/explore-courses">
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
  }
}

export default Dashboard;
