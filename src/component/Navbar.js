import React from "react";
import propTypes from "prop-types";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.value}
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
            <input type="checkbox"
            onClick={props.toggle} className="btn-check" id="btn-check-outlined" autoComplete="off"/>
            <label className={`btn btn-outline-${(props.mode==="light")?"dark":"light"}`}htmlFor="btn-check-outlined">{(props.mode==="light")?"dark":"light"}</label>
            </div>&nbsp;&nbsp;&nbsp;
            <form className="d-flex">
              <input
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "black",
                  color: props.mode === "light" ? "black" : "white",
                }}
                className={`form-control form-control${props.mode} me-2`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-${(props.mode==='light')?'dark':'light'}`} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className={`${props.mode} alert alert-warning `}></div>
    </div>
  );
}
Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.number,
};