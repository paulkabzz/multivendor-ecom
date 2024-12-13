import React from "react";
import Login from "../components/Login/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Footer/Footer";

const LoginPage = () => {
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
      <div className="w-full height-screen bg-gray-50">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
