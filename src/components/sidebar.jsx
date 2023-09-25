import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import Chatbot from "./Chatbot";
const Sidebar = () => {
  return (
    <Row className="Side" style={{ float: "right", height: "100%" }}>
      <Col md={2} order={1}>
        <Link className="Link btn-hover" to="/">
          <div
            className="btn  card bg-dark  rounded-0  "
            style={{
              width: "12rem",
              opacity: "0.6",
              height: "126px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <h5
                className="card-title text-light"
                style={{ visibility: "hidden" }}
              >
                .
              </h5>
              <h5 className="card-text text-light">Home</h5>
            </div>
          </div>
        </Link>
        <Link className="Link btn-hover" to="/demo">
          <div
            className="btn btn-hover card bg-dark rounded-0  "
            style={{
              width: "12rem",
              opacity: "0.6",
              height: "125px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <h5
                className="card-title text-light"
                style={{ visibility: "hidden" }}
              >
                1
              </h5>
              <h5 className="card-text text-light">Demo</h5>
            </div>
          </div>
        </Link>
        <Link className="Link btn-hover" to="/contact">
          <div
            className="btn  card bg-dark rounded-0 "
            style={{
              width: "12rem",
              opacity: "0.6",
              height: "123px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <h5
                className="card-title text-light"
                style={{ visibility: "hidden" }}
              >
                1
              </h5>
              <h5 className="card-text text-light">Contact</h5>
            </div>
          </div>
        </Link>
        <Link className="Link btn-hover" to="/features">
          <div
            className="btn  card  bg-dark  rounded-0"
            style={{
              width: "12rem",
              opacity: "0.6",
              height: "124px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <h5
                className="card-title text-light"
                style={{ visibility: "hidden" }}
              >
                1
              </h5>
              <h5 className="card-text text-light">Features</h5>
            </div>
          </div>
        </Link>
        <Link className="Link btn-hover" to="/pricing">
          <div
            className="btn   card bg-dark  rounded-0"
            style={{
              width: "12rem",
              opacity: "0.6",
              height: "123px",
              border: "1px solid black",
            }}
          >
            <div className=" card-body">
              <h5
                className="card-title text-light"
                style={{ visibility: "hidden" }}
              >
                1
              </h5>
              <h5 className="card-text text-light">Pricing</h5>
            </div>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Sidebar;
