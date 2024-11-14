import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import { IneterviewUserList } from "api"; // Adjust path as needed
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import {
  FaCheck,
  FaCodeBranch,
  FaHatCowboy,
  FaIdCard,
  FaLayerGroup,
  FaMarsStroke,
  FaMarsStrokeH,
  FaPenNib,
  FaStar,
  FaStarHalf,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";

function InterviewUserPage() {
  const [name, setName] = useState(""); // State for name filter
  const [email, setEmail] = useState(""); // State for email filter
  const [interviewUsers, setInterviewUsers] = useState([]); // State for the list of interview users
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [usersPerPage] = useState(5); // Number of users per page
  const mainRef = useRef(null); // Creating ref using useRef()
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Fetch interview users based on filters (name and email)
  const fetchInterviewUserList = async () => {
    try {
      const data = await IneterviewUserList(name, email); // Fetch data from API
      setInterviewUsers(data.users); // Assuming API returns an object with 'users' array
    } catch (error) {
      console.error("Error fetching interview users:", error);
    }
  };

  // Fetch data when component mounts or filters change
  useEffect(() => {
    fetchInterviewUserList();
  }, [name, email]);

  // Pagination logic: slice the users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = interviewUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Redirect to email page (you can modify this link or logic as needed)
  const handleEmailRedirect = (email) => {
    navigate(`/answersheet/${email}`); // Use /${email} instead of ?email=
  };

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-white"><strong>Interview User List</strong></h2>
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Filter by Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="filter-input form-control me-2 mr-3"
                  style={{ maxWidth: "200px" }}
                />
                <input
                  type="email"
                  placeholder="Filter by Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="filter-input form-control"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            </div>

            {/* Table to display user list */}
            <Table hover responsive className="bg-white text-dark">
              <thead className="table-header">
                <tr className="">
                  <th>
                    <span className="badge badge-primary p-2">
                      <FaIdCard className="text-white mr-2" />
                      Interview Id
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-primary p-2">
                      <FaLayerGroup className="text-white mr-2" />
                      Level
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-primary p-2">
                      <FaHatCowboy className="text-white mr-2" /> Role
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-primary p-2">
                      <FaCodeBranch className="text-white mr-2" />
                      Skills
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-warning p-2">
                      <FaStar className="text-white" />
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-success p-2">
                      <FaCheck className="text-white" />
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-danger p-2">
                      <FaTimes className="text-white" />
                    </span>
                  </th>
                  <th>
                    <span className="badge badge-primary p-2">
                      <FaPenNib className="text-white mr-2" />
                      Action
                    </span>
                  </th>{" "}
                  {/* New Action Column */}
                </tr>
              </thead>
              <tbody>
                {currentUsers.length > 0 ? (
                  currentUsers.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {user.interview_id}
                        <br />{" "}
                        <span className="badge badge-info">{user.email}</span>
                      </td>
                      <td>
                        {user.experienceLevel == "2" && "Intermediate"}{" "}
                        {user.experienceLevel == "1" && "Fresher"}
                        {user.experienceLevel == "3" && "Expert"}
                      </td>
                      <td>{user.role}</td>
                      <td>{JSON.parse(user.skills).join(", ")}</td>{" "}
                      {/* Display skills */}
                      <td>{user.score}</td>
                      <td>{user.correct_answers}</td>
                      <td>{user.incorrect_answers}</td>
                      <td>
                        <button
                          className="btn btn-sm bg-primary text-white"
                          onClick={() => handleEmailRedirect(user.email)}
                        >
                          Sheet
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No users found</td>{" "}
                    {/* Adjust colspan for 10 columns */}
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Pagination Component */}
            <Pagination>
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink
                  previous
                  onClick={() => paginate(currentPage - 1)}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => paginate(currentPage)}>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem
                disabled={currentPage * usersPerPage >= interviewUsers.length}
              >
                <PaginationLink
                  next
                  onClick={() => paginate(currentPage + 1)}
                />
              </PaginationItem>
            </Pagination>
          </Container>
        </section>
      </main>
      <SimpleFooter />
      <style jsx>{`
        .table-header {
          background-color: #f8f9fa;
          font-weight: bold;
        }

        .filter-input {
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }

        .pagination .page-item {
          margin: 0 5px;
        }

        .pagination .page-link {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }

        .pagination .page-link:hover {
          background-color: #007bff;
          color: white;
        }
        .btn {
          padding: 0.4rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.375rem;
        }
      `}</style>
    </>
  );
}

export default InterviewUserPage;
