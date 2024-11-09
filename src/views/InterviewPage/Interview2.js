import React, { useState, useEffect, useRef } from "react";
import { Container, Collapse, Card, CardHeader, CardBody, Button, Row, Col, Input, Tooltip } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import { InterviewQuestion } from "api"; // Assuming InterviewQuestion is exported from "api"
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowLeft, FaArrowRight, FaArrowUp, FaQuestionCircle } from "react-icons/fa"; // Import icons for navigation

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]); // State to store fetched questions
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current question index
  const [answers, setAnswers] = useState([]); // State to track student's answers for each question
  const [open, setOpen] = useState(null); // State to track which answer is open for the accordion
  const [tooltipOpen, setTooltipOpen] = useState(false); // State for tooltips
  const mainRef = useRef(null); // Create a ref for the main element

  useEffect(() => {
    const interviewUser = JSON.parse(localStorage.getItem("inertviewuser"));
    if (interviewUser) {
      GetQuestion(interviewUser);  // Fetch questions using the stored user data
    } else {
      setLoading(false); // No user data found, stop loading
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to fetch interview questions based on the user data
  const GetQuestion = async (data) => {
    try {
      const response = await InterviewQuestion(data); // API call to fetch questions
      setQuestions(response.questions);
      setLoading(false); // Set loading to false once the data is fetched
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Function to handle answer change in the textarea
  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  // Function to navigate to the next question
  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next question
    }
  };

  // Function to navigate to the previous question
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous question
    }
  };

  // Function to toggle the accordion for showing/hiding answers
  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index); // Toggle open state for the accordion item
  };

  // Tooltip toggle for help icon
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <section className="section section-lg section-shaped bg-gradient-primary">
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
            <h1 className="display-4 mb-5">Interview Questions</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {questions.length > 0 ? (
                  <div>
                    <Card className="mb-4 border-light shadow-lg">
                      <CardHeader className="bg-dark text-white d-flex justify-content-between">
                        <h5 className="text-white">{questions[currentIndex].question_text}</h5>
                        <div>
                          <span>
                            <FaQuestionCircle
                              id="tooltip-help"
                              className="text-info ml-2"
                              size="1.5em"
                            />
                            <Tooltip
                              placement="top"
                              isOpen={tooltipOpen}
                              target="tooltip-help"
                              toggle={toggleTooltip}
                            >
                              Need help with this question? Reach out to your mentor.
                            </Tooltip>
                          </span>
                          <span>
                            <Button
                              color="info"
                              onClick={() => toggleAnswer(currentIndex)} // Toggle the answer
                              className="w-100 mt-2"
                            >
                              {open === currentIndex ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
                            </Button>
                          </span>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={open === currentIndex}>
                        <CardBody className="bg-light text-primary rounded p-3">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: questions[currentIndex].answer.answer_text,
                            }}
                          />
                        </CardBody>
                      </Collapse>
                    </Card>

                    {/* Textarea for student's answer */}
                    <Row className="mt-3">
                      <Col>
                        <Input
                          type="textarea"
                          value={answers[currentIndex] || ""}
                          onChange={handleAnswerChange}
                          placeholder="Write your answer here..."
                          className="border-0 shadow-lg"
                          rows="4"
                          style={{ resize: "none" }}
                        />
                      </Col>
                    </Row>

                    {/* Stepper Buttons */}
                    <Row className="mt-3">
                      <Col className="d-flex justify-content-between">
                        <Button
                          color="secondary"
                          onClick={goToPrevious}
                          disabled={currentIndex === 0} // Disable when it's the first question
                          className="w-45"
                        >
                          <FaArrowLeft /> Previous
                        </Button>
                        <Button
                          color="primary"
                          onClick={goToNext}
                          disabled={currentIndex === questions.length - 1} // Disable when it's the last question
                          className="w-45"
                        >
                          Next <FaArrowRight />
                        </Button>
                      </Col>
                    </Row>

                    {/* Skip Button */}
                    <Row className="mt-2">
                      <Col className="text-center">
                        <Button
                          color="warning"
                          onClick={goToNext} // Skip to next question without answering
                          className="w-50"
                        >
                          Skip Question
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <p>No questions found.</p>
                )}
              </>
            )}
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default QuestionPage;
