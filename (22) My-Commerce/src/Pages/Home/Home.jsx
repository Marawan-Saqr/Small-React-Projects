import React from "react";
import PageTitle from "../../Components/Page-title/PageTitle.jsx";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h2 className="text-center mt-4">
        <PageTitle title="HOME PAGE" />
      </h2>
      <div className="home-container">
        <div className="content">
          <h2>Welcome to the Home Page!</h2>
          <p>
            Explore our awesome features and get started with amazing
            experiences.
          </p>
          <Link to={"/all-products"} className="btn btn-danger">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
