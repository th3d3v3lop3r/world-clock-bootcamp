import React from "react";
import "./App.css";
import Clock from "./Clock.js";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/800px-Flag_of_Singapore.svg.png"
                  alt="Singapore Flag"
                />
                <Clock timeZone="Asia/Singapore" />
              </Col>
              <Col>
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/800px-Flag_of_New_York.svg.png"
                  alt="New York Flag"
                />
                <Clock timeZone="America/New_York" />
              </Col>
              <Col>
                <img
                  className="Flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_the_City_of_London.svg/500px-Flag_of_the_City_of_London.svg.png"
                  alt="London Flag"
                />
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
