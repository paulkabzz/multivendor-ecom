import React, { useEffect } from "react";
import SignUp from "../components/SignUp/SignUp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Footer/Footer";

const SignUpPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Removed useEffect array dependecy... if error, add it back
  useEffect(() => {
    if (isAuthenticated === true || isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
