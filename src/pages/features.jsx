import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen,faBullseye,  faUniversity } from '@fortawesome/free-solid-svg-icons';
const  features =  ()  =>{
    return (
      <>
         <div className="container-fluid contain" >
        <Sidebar />
        <Topbar />
        <div className="roww1">
          <section
            className="feature-section img-fluid"
            style={{ width: "70%", height: "30%" }}
          >
            <div className="row">
              <div className="col-md-12 text-center heading-main heading-main-white">
                <h2 className="heading">OUR FEATURES</h2>
                <div className="separator">
                  <i class="fa fa-home below-line-about-icon"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 feature-back ">
                <div className="features-div">
                  <FontAwesomeIcon icon={faUniversity} className="icn" />
                  <h2 className="features-heading">
                    <br></br>Interior Expertise
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </p>
                </div>
              </div>
              <div className="col-md-4 feature-back">
                <div className="features-div">
                  <FontAwesomeIcon icon={faBullseye} className="icn" />

                  <h2 className="features-heading">
                    <br></br>Awards Winning
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </p>
                </div>
              </div>

              <div className="col-md-4 feature-back">
                <div className="features-div">
                  <FontAwesomeIcon icon={faBookOpen} className="icn" />
                  <h2 className="features-heading">
                    <br></br>Reasonable Price
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </>
    );
    }
    export default features;