import React from "react";

import { Route, Router, Routes } from "react-router-dom";

import RegistrationForm from "../login/RegistrationForm";
import HomePage from "./HomePage";

const MainBody = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default MainBody;
