import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
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
  Progress,
} from "reactstrap";
import { fetchDesignationsAndPositionsApi } from "api"; 
import axios from "axios"; 
import Select from "react-select"; 

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    account_type: 'Student',
    phone: '',
    address: '',
    designation: '',
    position: '',
    successMessage: "",
    error: null,
  });
  const [designations, setDesignations] = useState([]);
  const [positions, setPositions] = useState([]);

  const fetchDesignationsAndPositions = useCallback(async () => {
    try {
      const response = await fetchDesignationsAndPositionsApi(); 
      if (response) {
        setDesignations(response.designations); 
        setPositions(response.positions); 
      }
    } catch (error) {
      console.error(error);
      setFormData({ ...formData, error: "Failed to fetch designations and positions." });
    }
  }, [formData]); 

  useEffect(() => {
    fetchDesignationsAndPositions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, country, state, account_type, phone, address, designation, position } = formData;
    
    const data = {
      name,
      email,
      password,
      country,
      state,
      account_type,
      phone,
      address,
      designation,
      position,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/admin/interview/create",
        data
      );
      setFormData({ ...formData, successMessage: "Successfully registered! Redirecting to login..." });
      setTimeout(() => {
        navigate("/login-page");
      }, 2000);
      console.log(response)
    } catch (error) {
      console.error("Error registering user:", error);
      setFormData({ ...formData, error: "Registration failed. Please try again." });
    }
  };

  return (
    <main>
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="pt-lg-5 pb-lg-9">
          <Row className="justify-content-center">
            <Col lg="6">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white">
                  <div className="text-muted text-center">
                    <h3>Quad Assess <i className="ni ni-user-run ml-1" style={{fontSize:"16px", fontWeight:"bold"}}/></h3>
                  </div>
                  <Progress value={(currentStep / 3) * 100} />
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form role="form" onSubmit={onSubmit}>
                    {currentStep === 1 && (
                      <>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              name="name"
                              placeholder="Name" 
                              type="text" 
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
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
                      </>
                    )}
                    {currentStep === 2 && (
                      <>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-world" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="country"
                              placeholder="Country"
                              type="text"
                              value={formData.country}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-pin-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="state"
                              placeholder="State"
                              type="text"
                              value={formData.state}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="account_type"
                              placeholder="Account Type"
                              type="text"
                              value={formData.account_type}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                      </>
                    )}
                    {currentStep === 3 && (
                      <>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="phone"
                              placeholder="Phone Number"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-map-big" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="address"
                              placeholder="Address"
                              type="text"
                              value={formData.address}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-map-big" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="designation"
                              placeholder="Designation"
                              type="text"
                              value={formData.designation}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Select
                            name="position"
                            options={positions.map(p => ({ value: p.title, label: p.title }))}
                            placeholder="Select Position"
                            onChange={(selected) => setFormData({ ...formData, position: selected.value })}
                            isClearable
                          />
                        </FormGroup>
                      </>
                    )}
                    <div className="text-center">
                      {currentStep > 1 && (
                        <Button color="default" onClick={prevStep} className="mr-2">
                          Back
                        </Button>
                      )}
                      {currentStep < 3 ? (
                        <Button color="primary" onClick={nextStep}>
                          Next
                        </Button>
                      ) : (
                        <Button color="primary" type="submit">
                          Submit
                        </Button>
                      )}
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Register;
