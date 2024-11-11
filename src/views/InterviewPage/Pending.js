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

import { FaArrowRight, FaRegClock, FaClipboardList } from "react-icons/fa";

class Pending extends React.Component {
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
              <Row className="text-center">
                {/* Center the content with sm="8" and mx-auto */}
                <Col sm="8" className="mx-auto">
                  <h2 className="display-3 font-weight-bold mb-4 text-white">
                    Your Interview Submission is Pending
                  </h2>
                  <p className="lead text-muted mb-5 text-white">
                    Your interview submission is currently pending. Please
                    check back after some time to see the status of your
                    submission.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      color="primary"
                      size="lg"
                      href="/dashboard-page"
                      className="mr-4"
                    >
                      Go to Dashboard
                    </Button>
                    <Button
                      color="info"
                      size="lg"
                      href="/courses-page"
                    >
                      Explore Courses <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Pending Instructions Section */}
          <section className="section section-light bg-light py-5">
            <Container>
              <Row className="text-center">
                <Col xs="12">
                  <h2 className="text-warning font-weight-bold mb-4">
                    Pending Submission Instructions
                  </h2>
                  <p className="lead text-primary-muted mb-5">
                    Here are some instructions for your interview submission:
                  </p>
                </Col>
              </Row>
              <Row>
                {/* Pending Instruction Card */}
                <Col md="6" lg="6" className="mb-4">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaRegClock className="fa-3x text-warning" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold text-warning"
                          >
                            Wait for Processing
                          </CardTitle>
                          <CardText >
                            Your interview submission is in the process of
                            being reviewed. Please wait a moment.
                          </CardText>
                          <Button
                            color="warning"
                            block
                            // href="/dashboard-page"
                          >
                            Pending Status <FaArrowRight className="ml-2" />
                          </Button>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>

                {/* Dashboard Link Card */}
                <Col md="6" lg="6" className="mb-4">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <Row>
                      <Col
                        md="3"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaClipboardList className="fa-3x text-primary" />
                      </Col>
                      <Col md="9">
                        <CardBody>
                          <CardTitle
                            tag="h5"
                            className="text-uppercase font-weight-bold text-primary"
                          >
                            Visit Dashboard
                          </CardTitle>
                          <CardText>
                            You can always check the status of your submission
                            on your dashboard.
                          </CardText>
                          <Button
                            color="primary"
                            block
                            href="/dashboard-page"
                          >
                            Go to Dashboard <FaArrowRight className="ml-2" />
                          </Button>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
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

export default Pending;
