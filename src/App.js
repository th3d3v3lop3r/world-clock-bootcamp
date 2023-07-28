import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  // tick() {
  //   this.setState({
  //     date: new Date(),
  //   });
  // }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>{this.state.date.toLocaleTimeString()}</p> */}
          <Clock timeZone="Asia/Singapore" />
        </header>
      </div>
    );
  }
}

export default App;
