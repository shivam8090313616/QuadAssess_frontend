import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import loginAnimation from "assets/animations/login-animation.json";
import bgAnimation from "assets/animations/background.json";
import welcomeAnimation from "assets/animations/welcome.json";
import { loginUser } from "api";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // for loading state

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 6000); // Delay form reveal
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading animation
    const { email, password } = formData;

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      toast.success("Successfully logged in!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false); // Stop loading animation
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const bgLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: bgAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const welcomeLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <main>
      <ToastContainer />
      {/* Background Animation */}
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

      <section className="section section-shaped section-lg">
        <Container>
          <Row className="justify-content-center align-items-center">
            {/* Show Lottie Animation or Form Based on `showForm` */}
            {!showForm ? (
              <Col lg="7" className="text-center p-0">
                <Lottie options={lottieOptions} height={650} width={700} />
              </Col>
            ) : (
              <Col lg="7" className="animated-form" style={{ paddingTop: "100px" }}>
                <Card className="bg-secondary shadow border-0" style={{ borderRadius: "15px" }}>
                  <CardHeader className="bg-white text-center" style={{ borderRadius: "15px" }}>
                    <Lottie options={welcomeLottieOptions} height={100} width={300} />
                    <p className="text-primary mt-2">Please log in to continue</p>
                  </CardHeader>

                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={onSubmit}>
                      {/* Email Field */}
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Password Field */}
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Submit Button */}
                      <div className="text-center">
                        <Button
                          color="primary"
                          type="submit"
                          disabled={isLoading}
                          style={{
                            background: "#1f4e8b",
                            borderRadius: "30px",
                            padding: "10px 50px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {isLoading ? <span className="spinner-border spinner-border-sm"></span> : "Log In"}
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Login;
