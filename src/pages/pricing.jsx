import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";


const  pricing =  ()  =>{
    return (
      <>
        <div className="container-fluid contain">
          <Sidebar />
          <Topbar />
          <div
            id="pricing-table"
            className="clear"
            style={{ paddingLeft: "10%" }}
          >
            <div className="plan">
              <h3>
                Free<span>$00.0</span>
              </h3>

              <ul>
                <li>
                  <b>5GB</b> Disk Space
                </li>
                <li>
                  <b>50GB</b> Monthly Bandwidth
                </li>
                <li>
                  <b>10</b> Email Accounts
                </li>
                <li>
                  <b>Unlimited</b> subdomains
                </li>
              </ul>
              <button
                className="signup"
                onClick={() => (window.location.href = "")}
              >
                Get Started
              </button>
            </div>
            <div className="plan bg-success" id="most-popular">
              <h3>
                Professional<span>$9.99</span>
              </h3>

              <ul className="text-light">
                <li>
                  <b>3GB</b> Disk Space
                </li>
                <li>
                  <b>25GB</b> Monthly Bandwidth
                </li>
                <li>
                  <b>5</b> Email Accounts
                </li>
                <li>
                  <b>Unlimited</b> subdomains
                </li>
              </ul>
              <button
                className="p-1  text-success fz-2 hove-new"
                onClick={() => (window.location.href = "")}
              >
                Get Started
              </button>
            </div>
            <div className="plan">
              <h3>
                Enterprise <span>$14.99</span>
              </h3>

              <ul>
                <li>
                  <b>1GB</b> Disk Space
                </li>
                <li>
                  <b>10GB</b> Monthly Bandwidth
                </li>
                <li>
                  <b>2</b> Email Accounts
                </li>
                <li>
                  <b>Unlimited</b> subdomains
                </li>
              </ul>
              <button
                className="signup"
                onClick={() => (window.location.href = "")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </>
    );
    }
    export default pricing;