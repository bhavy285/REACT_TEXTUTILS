import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let light = "Light";
  // document.body.style.backgroundColor = 'grey'

  let dark = "Dark";
  return (
    <nav style={{
      fontFamily: "cursive",
    }}
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div
          className={`collapse navbar-collapse text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            

            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              } my-2 mx-1`}
            >
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.tooglemode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? light : dark}Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
