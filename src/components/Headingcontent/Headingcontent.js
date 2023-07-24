import React from "react";
import "./Headingcontent.css";
import {Link} from "react-router-dom";

function Headingcontent() {
  return (
    <>
     <div className="main-container-img">
      <div className="container-fluid">
        <h1 className="text-center project-heading">ButtonXpert</h1>

        <h3 className="mt-5 description text-center">
          Click Here, To Use Beautiful Buttons
        </h3>

        <div class="d-grid gap-2 col-2 mx-auto">

          <Link  to = "/buttonpage">
            <button className="btn btn-dark mt-5 main-button fancy-btn" type="button"> Show More</button>
          </Link>
        </div>
      </div>
     </div>
    </>
  );
}

export default Headingcontent;
