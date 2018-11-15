import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import HelpSupport from "./helpSupport/HelpSupport";
import Product from "./order/product/Product";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    burgerIsActive: false
  };
  render() {
    return (
      <div>
        <Header burgerIsActive={this.state.burgerIsActive} />
        {this.state.burgerIsActive ? (
          ""
        ) : (
          <React.Fragment>
            <Table />
            <HelpSupport />
            <Product />
            <div className="section">
              <div className="hero">
                <div class="hero-body">
                  <div class="container">
                    <h1 class="title">404</h1>
                    <h2 class="subtitle">
                      The page you are looking for is missing.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
