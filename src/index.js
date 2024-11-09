
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/dashboard-page" exact element={<Dashboard />} />
      <Route path="/interview-page-1" exact element={<InterviewPage />} />
      <Route path="/interview-page-2" exact element={<QuestionPage />} />



      <Route path="/Not-Found" exact element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="Not-Found" replace />} />
    </Routes>
  </BrowserRouter>
);
