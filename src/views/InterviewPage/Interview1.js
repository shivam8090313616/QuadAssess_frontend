import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaClock,
  FaRegGrinStars,
  FaTimes,
} from "react-icons/fa";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { InterviewUserSubmit } from "api";

const InterviewPage = () => {
  const [step, setStep] = useState(1); // State to control the step flow
  const [timer, setTimer] = useState(5); // Timer state to countdown from 5
  const [modal, setModal] = useState(false); // Modal state for controlling visibility
  const navigate = useNavigate(); // For page navigation

  // Function to move to the next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  // Timer logic using useEffect to properly update the timer
  useEffect(() => {
    let interval;
    if (modal && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            setModal(false); // Close modal after countdown ends
            navigate("/interview-page-2"); // Redirect to the next page
          }
          return prevTimer - 1; // Decrease timer value
        });
      }, 1000); // Decrease timer every second
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [modal, timer, navigate]); // Run this effect whenever modal or timer changes

  // Function to start the timer when the "Start Timer for Interview" button is clicked
  const startTimer = (e) => {
    setModal(true); // Show the modal
    setTimer(5); // Reset timer to 5 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure all required fields are filled
    if (formData.name && formData.email && formData.role && formData.skills.length > 0) {
      const response = await InterviewUserSubmit(formData);
  
      if (response) {
        console.log("Form submitted:", response);
        localStorage.setItem('inertviewuser', JSON.stringify(response.user));
        nextStep(); 
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
  };
  

  const [skillInput, setSkillInput] = useState(""); 

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  // Add skill to the list
  const addSkill = () => {
    if (skillInput && !formData.skills.includes(skillInput)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput],
      });
      setSkillInput(""); // Clear input after adding the skill
    }
  };

  // Remove skill from the list
  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skills: [],
    experienceLevel: "Beginner",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <Container>
            <div className="text-center text-white mb-5">
              <h2 className="display-3 font-weight-bold">
                Prepare for Your Interview
              </h2>
              <p className="lead">
                Guided steps to help you succeed in your interview
              </p>
            </div>

            {/* Step 1: Introduction */}
            {step === 1 && (
              <Row className="justify-content-center">
                <Col md="8" lg="9" xl="9">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <CardBody className="p-5">
                      <div className="text-center mb-4">
                        <FaChalkboardTeacher size={50} color="#f56d33" />
                      </div>
                      <CardTitle tag="h3" className="font-weight-bold mb-3">
                        Welcome to Your Interview
                      </CardTitle>
                      <CardText className="lead mb-4">
                        Welcome to your interview preparation guide! This page
                        will guide you through different aspects of preparing
                        for your upcoming interview. Let’s get started!
                      </CardText>
                      <CardText className="mb-4">
                        <strong>Instructions:</strong> Be calm and composed.
                        Remember to stay confident during your responses. Ensure
                        your environment is quiet and free from distractions.
                        Dress professionally, even if it's a virtual interview.
                      </CardText>
                      <Button color="primary" onClick={nextStep} block>
                        Proceed to Vocabulary Preparation
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Step 2: Vocabulary Preparation */}
            {step === 2 && (
              <Row className="justify-content-center">
                <Col md="8" lg="9" xl="9">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <CardBody className="p-5">
                      <div className="text-center mb-4">
                        <FaClipboardList size={50} color="#f56d33" />
                      </div>
                      <CardTitle tag="h3" className="font-weight-bold mb-3">
                        Vocabulary Preparation
                      </CardTitle>
                      <CardText className="lead mb-4">
                        In this section, we’ll go over some important terms and
                        concepts that you’ll encounter during the interview.
                        Having a strong understanding of these terms will help
                        you respond confidently.
                      </CardText>
                      <ul className="list-unstyled">
                        <li>
                          <strong>Technical Skills:</strong> The specific
                          knowledge required for the job.
                        </li>
                        <li>
                          <strong>Behavioral Questions:</strong> Questions about
                          past situations and actions.
                        </li>
                        <li>
                          <strong>Soft Skills:</strong> Communication, teamwork,
                          leadership, etc.
                        </li>
                        <li>
                          <strong>Leadership Qualities:</strong> Traits like
                          decision-making, motivating teams, etc.
                        </li>
                        <li>
                          <strong>Problem-Solving:</strong> Ability to find
                          solutions to challenges.
                        </li>
                        <li>
                          <strong>STAR Method:</strong> A structured approach to
                          answering behavioral questions.
                        </li>
                      </ul>
                      <CardText className="mb-4">
                        <strong>How to Speak/Type Your Answers:</strong> Be
                        concise but clear. Avoid speaking too fast or too slow.
                        For typed answers, make sure to proofread for clarity
                        and grammar.
                      </CardText>
                      <div className="d-flex justify-content-between">
                        <Button color="secondary" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button color="primary" onClick={nextStep} block>
                          Proceed to Time Management Tips
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Step 3: Time Management Instructions */}
            {step === 3 && (
              <Row className="justify-content-center">
                <Col md="8" lg="9" xl="9">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <CardBody className="p-5">
                      <div className="text-center mb-4">
                        <FaClock size={50} color="#f56d33" />
                      </div>
                      <CardTitle tag="h3" className="font-weight-bold mb-3">
                        Time Management for Your Interview
                      </CardTitle>
                      <CardText className="lead mb-4">
                        Effective time management is essential to performing
                        well during the interview. Here are some tips:
                      </CardText>
                      <ul className="list-unstyled">
                        <li>
                          <strong>Understand the Question:</strong> Take a
                          moment to understand before answering.
                        </li>
                        <li>
                          <strong>Don’t Rush:</strong> Focus on providing
                          quality answers.
                        </li>
                        <li>
                          <strong>Keep Answers Concise:</strong> Avoid
                          over-explaining, stick to the core of your experience.
                        </li>
                        <li>
                          <strong>Prioritize Difficult Questions:</strong> Move
                          on and revisit tough questions later.
                        </li>
                        <li>
                          <strong>Be Mindful of Time Limits:</strong> Use a
                          timer to stay on track.
                        </li>
                        <li>
                          <strong>Answering Behavioral Questions:</strong> Use
                          the STAR method for structured answers.
                        </li>
                      </ul>
                      <div className="d-flex justify-content-between">
                        <Button color="secondary" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button color="primary" onClick={nextStep} block>
                          Proceed to Interview Timer
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Step 4: Interview Preparation Form */}
            {step === 4 && (
              <Row className="justify-content-center">
                <Col md="8" lg="9" xl="9">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <CardBody className="p-5">
                      <Form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="form-control-lg"
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="form-control-lg"
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label for="role">Role</Label>
                          <Input
                            type="text"
                            name="role"
                            id="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="Enter your role"
                            className="form-control-lg"
                            required
                          />
                        </FormGroup>

                        {/* Skills Section */}
                        <FormGroup>
                          <Label for="skills">Skills</Label>
                          <div className="d-flex align-items-center">
                            <Input
                              type="text"
                              id="skillInput"
                              value={skillInput}
                              onChange={handleSkillInputChange}
                              placeholder="Type a skill"
                              className="mr-2"
                              style={{ flex: 1 }}
                            />
                            <Button
                              type="button"
                              onClick={addSkill}
                              disabled={!skillInput}
                              color="primary"
                              className="ml-2"
                            >
                              Add Skill
                            </Button>
                          </div>
                          <ul className="p-0 m-0 d-flex flex-wrap">
                            {formData.skills.map((skill, index) => (
                              <li
                                key={index}
                                className="list-inline-item d-flex align-items-center m-2 border border-1 bg-primary pr-2"
                              >
                                {/* Skill Button (Green) */}
                                <Button className="btn btn-success btn-md">
                                  {skill}
                                </Button>

                                {/* Remove Button (Red Cross Icon) */}
                                <button
                                  type="button"
                                  onClick={() => removeSkill(skill)}
                                  className="btn btn-md btn-danger rounded-circle d-flex align-items-center justify-content-center p-2"
                                  style={{ width: "30px", height: "30px" }} // Adjust size of the button for the cross icon
                                >
                                  <FaTimes
                                    className="text-white"
                                    style={{ fontSize: "16px" }}
                                  />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </FormGroup>

                        {/* Experience Level */}
                        <FormGroup>
                          <Label for="experienceLevel">Experience Level</Label>
                          <Input
                            type="select"
                            name="experienceLevel"
                            id="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={handleInputChange}
                            className="form-control-lg"
                          >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                          </Input>
                        </FormGroup>

                        <Button type="submit" color="primary" block size="lg">
                          Start Interview
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Step 5: Interview Completion Message */}
            {step === 5 && (
              <Row className="justify-content-center">
                <Col md="8" lg="9" xl="9">
                  <Card className="shadow-lg border-0 rounded-lg">
                    <CardBody className="p-5">
                      <div className="text-center mb-4">
                        <FaRegGrinStars size={50} color="#f56d33" />
                      </div>
                      <CardTitle tag="h3" className="font-weight-bold mb-3">
                        Congratulations!
                      </CardTitle>
                      <CardText className="lead mb-4">
                        You've successfully completed your interview
                        preparation. You are now ready to face your interview
                        with confidence!
                      </CardText>
                      <Button color="primary" block onClick={startTimer}>
                        Start Interview Timer
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      </main>

      {/* Modal for Countdown Timer */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Interview Starting Soon</ModalHeader>
        <ModalBody>
          Your interview will begin in <strong>{timer}</strong> seconds.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

      <SimpleFooter />
      <ToastContainer />
    </>
  );
};

export default InterviewPage;
