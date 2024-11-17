import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Input,
  Progress,
  Card,
  CardHeader,
  CardBody,
  Tooltip,
  Collapse,
} from "reactstrap";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowLeft,
  FaArrowRight,
  FaQuestionCircle,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { InterviewQuestion } from "api";
import WarningAlert from "./WarningAlert";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { Navigate, useNavigate } from "react-router-dom";
import { SubmitAnswer } from "api";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  // Initialize SpeechRecognition API (Browser-specific)
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Keep the microphone listening continuously
  recognition.lang = "en-US"; // Set language to English
  recognition.interimResults = true; // Allow intermediate results while speaking

  // Function to handle the start of speech recognition
  const startSpeechToText = () => {
    recognition.start();
  };

  // This function will be triggered whenever speech recognition results are available
  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      const updatedAnswers = [...answers];
      updatedAnswers[currentIndex] = transcript; // Update the answer for the current question
      setAnswers(updatedAnswers); // Directly update the answer in real-time
    };

    // Stop recognition when it's complete
    recognition.onend = () => {
      // Optionally restart recognition when it stops
      recognition.start();
    };
  }, [currentIndex, answers]);

  useEffect(() => {
    const interviewUser = JSON.parse(localStorage.getItem("inertviewuser"));
    setId(interviewUser.interview_id);
    setEmail(interviewUser.email);
    if (interviewUser) {
      GetQuestion(interviewUser);
    } else {
      setLoading(false);
    }

    // Timer countdown logic
    if (isTimerRunning) {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerInterval);
            setIsTimerRunning(false);
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [isTimerRunning]);

  const GetQuestion = async (data) => {
    try {
      const response = await InterviewQuestion(data);
      setQuestions(response.questions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  // Go to the next question
  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Go to the previous question
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser?.uid) {
      console.error("User not found in localStorage");
      setLoading(false);
      return;
    }

    const response = await SubmitAnswer(
      questions.map((question, index) => ({
        questionId: question.id,
        answer: answers[index] || "",
      })),
      storedUser.email
    );

    if (response.message === "Answers submitted successfully!") {
      setAnswers([]);
      setCurrentIndex(0);
      navigate("/pending-page");
    } else {
      console.error("Error:", response);
    }

    setLoading(false);
  };

  // Convert seconds into MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Check if the current answer is empty or not
  const isAnswerValid = (index) => {
    return answers[index] && answers[index].trim().length > 0;
  };

  return (
    <>
      <DemoNavbar />
      <main>
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
            <WarningAlert />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {questions.length > 0 ? (
                  <form onSubmit={handleSubmit}>
                    <Row className="mt-4">
                      <Col xs="12" md="4">
                        <h3 className="text-center bg-white rounded text-primary mb-3">
                          Interview Questions <br />
                          <span style={{ fontSize: "16px" }}>
                            <strong>ID: </strong>{id} <br />
                            <strong>Mail: </strong>{email}
                          </span>
                        </h3>
                      </Col>
                      <Col xs="12" md="8">
                        <div className="w-100 text-center mb-4 bg-white rounded">
                          <h5 className="text-primary">Time Remaining</h5>
                          <h3 className="text-primary">
                            {formatTime(timeRemaining)}
                          </h3>
                          <Progress
                            color="primary"
                            className="border border-white bg-white"
                            value={(timeRemaining / 1800) * 100}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Left Side Stepper */}
                      <Col xs="12" md="4" className="mb-4">
                        <div className="d-flex flex-column align-items-center">
                          {questions.map((question, index) => (
                            <Button
                              key={question.id}
                              color={
                                isAnswerValid(index)
                                  ? index === currentIndex
                                    ? "primary"
                                    : "secondary"
                                  : "danger"
                              }
                              className="mb-2 w-100"
                              onClick={() => setCurrentIndex(index)}
                            >
                              Question {index + 1}
                            </Button>
                          ))}
                        </div>
                      </Col>

                      {/* Right Side Countdown Timer */}
                      <Col
                        xs="12"
                        md="8"
                        className="d-flex flex-column align-items-center"
                      >
                        <Card className="mb-4 border-light shadow-lg w-100">
                          <CardHeader className="bg-dark text-white d-flex justify-content-between">
                            <h5 className="text-white">
                              {questions[currentIndex].question_text}
                            </h5>
                            <div>
                              {/* Tooltip for additional help */}
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
                                  Need help with this question? Reach out to
                                  your mentor.
                                </Tooltip>
                              </span>
                            </div>
                          </CardHeader>
                          {/* Collapsible answer section */}
                          <Collapse isOpen={open === currentIndex}>
                            <CardBody className="bg-light text-primary rounded p-3">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    questions[currentIndex].answer.answer_text,
                                }}
                              />
                            </CardBody>
                          </Collapse>
                        </Card>

                        {/* Input area for the answer */}
                        <Row className="mt-3">
                          <Col>
                            <Input
                              type="textarea"
                              value={answers[currentIndex] || ""}
                              onChange={handleAnswerChange}
                              placeholder="Write your answer here..."
                              className={`border-0 shadow-lg ${
                                isAnswerValid(currentIndex)
                                  ? ""
                                  : "border-danger"
                              }`}
                              rows="4"
                              cols="100"
                              style={{ resize: "none" }}
                            />
                          </Col>
                        </Row>

                        {/* Speech-to-Text button */}
                        <div className="mt-3 d-flex justify-content-center w-100">
                          <Button
                            color="info"
                            onClick={startSpeechToText}
                            className="mr-3"
                          >
                            <FaMicrophoneAlt /> Start Speaking
                          </Button>
                        </div>

                        {/* Navigation buttons */}
                        <div className="mt-3 d-flex justify-content-between w-100">
                          {currentIndex > 0 && (
                            <Button color="secondary" onClick={goToPrevious}>
                              <FaArrowLeft /> Previous
                            </Button>
                          )}

                          {/* Check if it's the last question to show the Submit button */}
                          {currentIndex < questions.length - 1 && (
                            <Button color="primary" onClick={goToNext}>
                              Next <FaArrowRight />
                            </Button>
                          )}

                          {/* Show Submit button if it's the last question */}
                          {currentIndex === questions.length - 1 && (
                            <Button color="success" type="submit">
                              Submit <FaArrowRight />
                            </Button>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </form>
                ) : (
                  <p>No questions available</p>
                )}
              </>
            )}
          </Container>
        </section>
      </main>
    </>
  );
};

export default QuestionPage;
