import React, { Component } from "react";
import FloatingMenuBar from "./components/FloatingMenuBar";
import Map from "./components/Map";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FloatingMenuBar />
        <Map />
      </div>
    );
  }
}

