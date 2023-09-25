import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Vediomodal from '../components/vediomodal';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

const  Demo =  ()  =>{
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

    return (
      <>
        <div className="container-fluid contain" >
          <Sidebar />
          <Topbar />
          <Row md={12} lg={2} className="roww">
            <Col>
              <Card bg="transparent" border="0" className="w-100 h-100 cr">
                <Card.Body>
                  <Card.Subtitle
                    className="mb-2 text-dark"
                    style={{ fontFamily: "Helvetica Neue" }}
                  >
                    Strategy, UI/UX.{"\u00A0\u00A0\u00A0"}{" "}
                    {"\u00A0\u00A0\u00A0"} June 6, 2023
                  </Card.Subtitle>
                  <Card.Title>
                    <h1
                      style={{
                        fontFamily: "Calibri",
                        fontWeight: "bolder",
                        fontSize: "65px",
                        lineHeight: "1.2",
                      }}
                    >
                      Watch Demo
                    </h1>
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Calibri",
                      fontSize: "20px",
                      lineHeight: "1.5",
                      marginBottom: "1rem",
                    }}
                  >
                    We’ve created a unique visual system and strategy across the
                    wide Existing spectrum of visible mobile applications…
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Link className="Link2" to="/demo">
                      Get Your INO Reporter{" "}
                      <span style={{ fontSize: "25px" }}>→</span>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                bg="transparent"
                border="0"
                className="w-100 h-100"
                style={{ paddingTop: "10%" }}
              >
                <Card.Title className="icon1">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    style={{
                      paddingLeft: "4%",
                      color: "white",
                      fontSize: "60px",
                    }}
                    className="btn"
                    onClick={handleOpenModal}
                  >
                    <Vediomodal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                    />
                  </FontAwesomeIcon>
                </Card.Title>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
    }
    export default Demo;