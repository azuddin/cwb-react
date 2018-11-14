import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import HelpSupport from "./helpSupport/HelpSupport";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Table /> */}

        <HelpSupport />
      </div>
    );
  }
}

export default App;
