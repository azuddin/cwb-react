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
  handleBurgerState = () => {
    const burgerIsActive = this.state.burgerIsActive ? false : true;
    this.setState({ burgerIsActive });
  };
  render() {
    return (
      <div>
        <Header
          burgerIsActive={this.state.burgerIsActive}
          handleBurgerState={this.handleBurgerState}
        />
        {this.state.burgerIsActive ? (
          ""
        ) : (
          <React.Fragment>
            <Table />
            <HelpSupport />
            <Product />
            <div className="section">
              <div className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">404</h1>
                    <h2 className="subtitle">
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
