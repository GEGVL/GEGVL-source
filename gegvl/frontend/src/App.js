import React, { Component } from "react";
import FloatingMenuBar from "./components/FloatingMenuBar";
import LoadingIndicator from "./components/LoadingIndicator";
import Map from "./components/Map";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FloatingMenuBar />
        <LoadingIndicator text="Loading GEGVL..." />
      </div>
    );
  }
}

