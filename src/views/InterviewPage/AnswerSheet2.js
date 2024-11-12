import { IneterviewUserAnserList, CreateReport } from "api";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Container, Modal } from "reactstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaBookOpen, FaTimes } from "react-icons/fa";

const SendEmailPage = () => {
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const { email } = useParams();
  const [data, setData] = useState([]);
  const [marks, setMarks] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [reportData, setReportData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await IneterviewUserAnserList(email);
        setData(Array.isArray(response.users) ? response.users : []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set to an empty array if there's an error
      }
    };

    fetchData();
  }, [email]);

  // Handle mark changes for each question
  const handleMarkChange = (question, value) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [question]: value,
    }));
  };

  // Calculate total and percentage, and create a report
  const calculateResults = async () => {
    let total = 0;
    let correctAnswers = 0;

    data.forEach((item) => {
      const mark = parseInt(marks[item.question], 10) || 0;
      total += mark;
      if (mark > 0) correctAnswers++;
    });

    const incorrectAnswers = data.length - correctAnswers;
    const percentage = (total / (data.length * 5)) * 100;
    setTotalMarks(total);
    setPercentage(percentage);

    // Create report data
    const newReportData = {
      email: email,
      score: total,
      correct_answers: correctAnswers,
      incorrect_answers: incorrectAnswers,
    };

    setReportData(newReportData); // Store report data in state

    try {
      await CreateReport(newReportData); // Send report data to API
    } catch (error) {
      console.error("Error creating report:", error);
    }

    setShowModal(true);
  };

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <section className="section section-lg section-shaped bg-gradient-info">
          <Container>
            <div className="card mb-4 p-3 shadow-sm">
              {/* Ensure data is an array before mapping */}
              {Array.isArray(data) && data.map((item, index) => (
                <Card className="mb-3" key={index}>
                  <div className="card-header">
                    <strong>Question:</strong> {item.question}
                  </div>
                  <div className="card-body">
                    <p><strong>User Answer:</strong> {item.User_answer}</p>
                    <p><strong>Corrected Answer:</strong> {item.corrected_answer}</p>
                    <Form>
                      <label htmlFor={`marksInput-${index}`}>Enter Marks (0-5)</label>
                      <input
                        type="number"
                        id={`marksInput-${index}`}
                        min="0"
                        max="5"
                        value={marks[item.question] || ""}
                        onChange={(e) => handleMarkChange(item.question, e.target.value)}
                        className="form-control mt-2"
                      />
                    </Form>
                  </div>
                </Card>
              ))}
            </div>

            {/* Button to submit marks and create report */}
            <Button color="primary" className="mt-3 w-100" onClick={calculateResults}>
              Submit Marks & Create Report
            </Button>

            {/* Modal to display results and finalize report */}
            <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
              <div className="modal-header">
                <h5 className="modal-title">Report Summary</h5>
                <button className="btn btn-sm rounded btn-danger" onClick={() => setShowModal(false)} ><FaTimes/></button>
              </div>
              <div className="modal-body">
                <p><strong>Total Marks:</strong> {totalMarks}</p>
                <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
                {reportData && ( // Check if reportData exists before displaying
                  <>
                    <p><strong>Correct Answers:</strong> {reportData.correct_answers}</p>
                    <p><strong>Incorrect Answers:</strong> {reportData.incorrect_answers}</p>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <Button color="success" onClick={() => navigate("/Interviewuser-page")}>
                  <FaBookOpen className="mr-2" /> Another Sheet
                </Button>
              </div>
            </Modal>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SendEmailPage;
