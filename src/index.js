import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Landing from "views/main/Landing";
import Login from "views/auth/Login";
import Profile from "views/auth/Profile";
import Register from "views/auth/Register";
import Dashboard from "views/main/Dashboard";
import NotFoundPage from "views/404/NotFoundPage";
import InterviewPage from "views/InterviewPage/Interview1";
import QuestionPage from "views/InterviewPage/Interview2";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import Pending from "views/InterviewPage/Pending";
import InterviewUserPage from "views/InterviewPage/admin/AnswerSheet";
import AnswersheetCheck from "views/InterviewPage/admin/AnswerSheet2";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login-page" element={<Login />} />
      <Route path="/register-page" element={<Register />} />
      //protected routes which are not working if user can't login
      <Route
        path="/"
        element={
          <ProtectedRoute>
            {" "}
            <Landing />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile-page"
        element={
          <ProtectedRoute>
            {" "}
            <Profile />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard-page"
        element={
          <ProtectedRoute>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview-page-1"
        element={
          <ProtectedRoute>
            {" "}
            <InterviewPage />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview-page-2"
        element={
          <ProtectedRoute>
            <QuestionPage />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/pending-page"
        element={
          <ProtectedRoute>
            <Pending />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/Interviewuser-page"
        element={
          <ProtectedRoute>
            <InterviewUserPage />{" "}
          </ProtectedRoute>
        }
      />
     <Route
  path="/answersheet/:email" // Use /:email instead of :email
  element={
    <ProtectedRoute>
      <AnswersheetCheck />
    </ProtectedRoute>
  }
/>
      <Route path="/Not-Found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/Not-Found" replace />} />
    </Routes>
  </BrowserRouter>
);
