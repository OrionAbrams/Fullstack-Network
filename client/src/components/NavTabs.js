import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBtn } from "mdbreact";

function NavTabs() {
  return (
    <nav className="navbar fixed-top bg-dark navbar-dark navbar-expand my-nav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            <MDBBtn color="primary" >Fullstack</MDBBtn>       </Link>
        </li>
        <li className="nav-item">
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Lessons
      </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">React Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/1">Lesson 1 - State</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/2">Lesson 2 - Props</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/3">Lesson 3 - Forms</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">Mongo Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/4">Lesson 4 - Create</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/5">Lesson 5 - Delete</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/6">Lesson 6 - Update</Link></li>
                  </ul>
                </li>
              </ul>
            </MDBDropdownMenu>
          </MDBDropdown>
        </li>
      </ul>
      <ul className="navbar-nav navbar-right ml-auto">
        <li>
          <Link
            to="/profile"
            className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
          >
            <MDBBtn color="primary" >Profile</MDBBtn>
          </Link>
        </li>
        <li>
          <div className="nav-item g-signin2" data-onsuccess="onSignIn"></div>
        </li>
        <li className="nav-item active">
          <Link to="/SignUp" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
            SignUp
        </Link>
        </li>
        <li className="nav-item active">
          <Link to="/Login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            Login
        </Link>
        </li>
      </ul>


    </nav>
  );
}

export default NavTabs;
