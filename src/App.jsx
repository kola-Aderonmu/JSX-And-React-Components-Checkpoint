import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Name from "./components/name/Name";
import Description from "./components/description/Description";
import { Price } from "./components/price/Price";
import Image from "./components/images/Image";
import {
  Card,
  Container,
  Row,
  Col,
  NavItem,
  CardHeader,
} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CardItem from "./components/card/Card";
// import NavigationBar from "./components/navigation/NavigationBar";
import product from "./product";
let firstName = prompt("Please enter your first name here").trim();
const App = () => {
  /* ---- Declaration of a named varibale */

  return (
    <>
      <div className="mother" style={{ backgroundColor: "#e0ffff" }}>
        {/* Main Content */}
        <Container className="mt-4">
          <Row>
            <Col>
              <Card className="jkl-qw" style={{ borderRadius: "50px" }}>
                {/* Components been added into card in order of which they are to appear on the browser */}

                <Card.Body
                  style={{
                    borderRadius: "50px",
                    boxShadow: "10 14px 58px rgba(0, 2, 2, 0.1",
                    display: "grid",
                  }}
                >
                  {/*---for the image section*/}
                  <Image />
                  {/* ---for the title section*/}
                  <Name />
                  {/*---for the price section*/}
                  <Price />
                  <div className="kk-l">
                    <Description /> {/* ---for the object description section*/}
                  </div>
                </Card.Body>
              </Card>
              <div
                className="mt-4 text-center"
                style={{
                  fontSize: "2rem",
                  fontFamily: "Calibri",
                  fontWeight: "600",
                  letterSpacing: "4px",
                }}
              >
                {/* Section for the prompting */}
                <p>{`Hello, ${firstName ? firstName : "there!"}!`}</p>
                {firstName && (
                  <img
                    src="https://th.bing.com/th/id/R.c5c4c5e6d4ed2781e226d47b73e362f6?rik=M7P4XsH4vfNc%2bA&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpc5re7y9i.gif&ehk=aotoZ%2bmvXP2Rla%2fwPTJkgPPCW5%2bhVJNEzAMMrIvY3cQ%3d&risl=&pid=ImgRaw&r=0"
                    alt="Profile"
                    style={{ width: "350px", borderRadius: "20%" }}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
