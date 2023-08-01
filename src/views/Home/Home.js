import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Home from './../../images/logo.png';

function Headingcontent() {
  return (
    <>
      <div className="main-container-img">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 logo-img-grp">
          <img className="home-page-img" src={Home} />     
          <h1 className="rtc-heading">Road To Code</h1>     
          </div>
          <div className="col-md-6 second-container">
              <h1 className="project-heading text-center">ButtonXpert</h1>
              <h4 className="mt-5 description text-center">
                Unleash the Possibilities, <br />
                Get Started Now
              </h4>
              <div class="d-grid gap-2 text-center">
                <Link to="/buttonpage">
                  <button
                    className="btn btn-danger mt-5 main-button fancy-btn"
                    type="button">
                    {" "}
                    Show More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headingcontent;
