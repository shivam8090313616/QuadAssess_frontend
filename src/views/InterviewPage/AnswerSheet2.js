import { IneterviewUserAnserList, CreateReport } from "api";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { useEffect, useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Progress,
  InputGroup,
  InputGroupText,
  CardHeader,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FaBookOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const SendEmailPage = () => {
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const { email } = useParams();
  const [data, setData] = useState([]);
  const [marks, setMarks] = useState({});
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await IneterviewUserAnserList(email);
        setData(Array.isArray(response.users) ? response.users : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, [email]);

  const handleMarkChange = (question, value) => {
    const mark = parseInt(value, 10) || 0;

    setMarks((prevMarks) => ({ ...prevMarks, [question]: mark }));
    let newTotal = 0;
    let newCorrectAnswers = 0;

    data.forEach((item) => {
      const questionMark = parseInt(marks[item.question] || 0, 10);
      newTotal += questionMark;
      if (questionMark > 0) newCorrectAnswers++;
    });

    const newIncorrectAnswers = data.length - newCorrectAnswers;
    const newPercentage = (newTotal / (data.length * 5)) * 100;

    setTotalMarks(newTotal);
    setPercentage(newPercentage);
    setCorrectAnswers(newCorrectAnswers);
    setIncorrectAnswers(newIncorrectAnswers);
  };
  const saveReport = async () => {
    const reportData = {
      email: email,
      score: totalMarks,
      correct_answers: correctAnswers,
      incorrect_answers: incorrectAnswers,
    };

    try {
      await CreateReport(reportData);
    } catch (error) {
      console.error("Error creating report:", error);
    }
  };
  const correctIncorrectData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Answers",
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderColor: ["#388E3C", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  const marksDataChart = {
    labels: data.map((_, index) => `Q${index + 1}`),
    datasets: [
      {
        label: "Marks per Question",
        data: data.map((item) => marks[item.question] || 0),
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef} className="bg-light">
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
          <Container className="py-5">
            <Card className="text-primary">
              <CardHeader>
                <strong>{email}'s Answer Sheet</strong>
              </CardHeader>
            </Card>
            <div className="card shadow-sm border-0 rounded-3 p-4 bg-white">
              {Array.isArray(data) &&
                data.map((item, index) => (
                  <Card className="mb-4 shadow-sm border-light" key={index}>
                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                      <h5 className="m-0">
                        <strong className="text-white">
                          Question {index + 1}
                        </strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <Row>
                        <Col md="6">
                          <p className="mb-1 text-warning">
                            <strong>User Answer: </strong>
                            <span className="text-dark">
                              {item.User_answer}
                            </span>
                          </p>
                          <p className="mb-1 text-success">
                            <strong className="">Correct Answer: </strong>
                            <span className="text-dark">
                              {item.corrected_answer}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Form>
                        <InputGroup className="mt-3">
                          <InputGroupText>Marks (0-5)</InputGroupText>
                          <input
                            type="number"
                            min="0"
                            max="5"
                            value={marks[item.question] || ""}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value >= 0 && value <= 5) {
                                handleMarkChange(item.question, value);
                              } else {
                                e.preventDefault();
                              }
                            }}
                            className="form-control pl-3"
                            step="1"
                          />
                        </InputGroup>
                      </Form>
                    </div>
                  </Card>
                ))}
            </div>

            <Card className="text-primary mt-4">
              <CardHeader>{email}'s Answer Chart</CardHeader>
            </Card>
            <div className="card shadow-sm border-0 rounded-3 p-4 bg-white mb-4">
              <Row className="text-center align-items-center">
                <Col md="4">
                  <h5>Total Marks</h5>
                  <div className="display-4 text-primary">
                    {totalMarks} / 50
                  </div>
                </Col>
                <Col md="4">
                  <h5>Percentage</h5>
                  <div className="position-relative d-flex justify-content-center align-items-center">
                    <div
                      className="circular-progress"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <Progress
                        value={percentage}
                        color="success"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          clipPath: "circle(50% at 50% 50%)",
                        }}
                      />
                    </div>
                    <span className="position-absolute text-dark font-weight-bold">
                      {percentage.toFixed(2)}%
                    </span>
                  </div>
                </Col>
                <Col md="4">
                  <h5>Correct / Incorrect</h5>
                  <Bar
                    data={correctIncorrectData}
                    options={{
                      responsive: true,
                      plugins: { legend: { position: "top" } },
                    }}
                  />
                </Col>
              </Row>
              <h5>Marks per Question</h5>
              <Bar
                data={marksDataChart}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: "top" } },
                }}
                style={{ maxHeight: "300px" }}
              />{" "}
            </div>

            <Button
              color="success"
              className="mt-0 w-100 py-3 text-uppercase font-weight-bold shadow-sm"
              onClick={saveReport}
            >
              Save Report
            </Button>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SendEmailPage;
