import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
 
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            {props.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <i className="nav-link active" aria-current="page">
                  &#8594; Home
                </i>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={props.mode === "dark"?"flexSwitchCheckChecked":"flexSwitchCheck"}
                onClick={props.toggleMode}
                
                
              />
              
              <label className="form-check-label" htmlFor={props.mode === "dark"?"flexSwitchCheckChecked":"flexSwitchCheck"}>
                {localStorage.getItem("mode") !== "dark"?"Light" :"Dark"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
NavBar.defaultProps = {
  title: "TextUtils",
  mode: "light",
};
