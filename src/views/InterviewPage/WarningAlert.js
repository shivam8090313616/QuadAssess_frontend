import React, { useEffect, useState } from "react";
import { FaBan, FaClock, FaExclamationTriangle, FaInfoCircle, FaQuestion, FaSkullCrossbones } from "react-icons/fa";
import { Button } from "reactstrap";

const WarningAlert = () => {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Button styling configuration
  const buttonStyle = {
    fontSize: "18px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    padding: "10px",
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  // Message content
  const alerts = [
    {
      icon: <FaExclamationTriangle />,
      message: "Warning: Do not reload the page or switch tabs during the interview!",
      color: "red",
    },
    {
      icon: <FaClock />,
      message: `Remaining Time: ${timeRemaining} minutes. Please focus and avoid exiting.`,
      color: "red",
    },
    {
      icon: <FaSkullCrossbones />,
      message: "Avoid refreshing or you may lose your progress.",
      color: "red",
    },
    {
      icon: <FaQuestion />,
      message: "Ensure stable internet to avoid interruptions.",
      color: "red",
    },
  ];

  return (
    <div className="warning-alert bg-danger text-white text-center p-1">
      <div
        className="alert-content"
        style={{
          display: "inline-flex",
          animation: "scrollLeft 25s linear infinite", // Slowed down for smooth scrolling
        }}
      >
        {alerts.map((alert, index) => (
          <AlertMessage
            key={index}
            icon={alert.icon}
            message={alert.message}
            buttonStyle={buttonStyle}
            color={alert.color}
          />
        ))}
      </div>

      <style>
        {`
          .warning-alert {
            font-weight: bold;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            white-space: nowrap;
            position: relative;
          }

          .alert-content span {
            padding-right: 30px;
            display: flex;
            align-items: center;
          }

          @keyframes scrollLeft {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

// Alert message component
const AlertMessage = ({ icon, message, buttonStyle, color }) => (
  <span className="px-4 d-flex align-items-center">
    <Button
      color="light"
      style={{
        ...buttonStyle,
        color: color === "red" ? "red" : "white",
      }}
      className="mr-2 btn btn-sm p-0"
    >
      {icon}
    </Button>
    <span>{message}</span>
  </span>
);

export default WarningAlert;
