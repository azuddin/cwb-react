import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import HelpSupport from "./helpSupport/HelpSupport";
import Product from "./order/product/Product";
import Footer from "./components/Footer";
import Dashboard from "./dashboard/Dashboard";
import Order from "./order/Order";
import Invite from "./invite/Invite";

class App extends Component {
  state = {
    burgerIsActive: false,
    menuTab: <Dashboard />,
    menu: [
      {
        name: "Language",
        isActive: false,
        isOpen: true,
        icon: "fa fa-language",
        menuItem: [
          {
            name: "English",
            isActive: true
          },
          {
            name: "Spanish",
            isActive: false
          }
        ]
      },
      {
        name: "Currency",
        isActive: false,
        isOpen: true,
        icon: "fa fa-dollar-sign",
        menuItem: [
          {
            name: "United States of America",
            isActive: true
          },
          {
            name: "Malaysia",
            isActive: false
          }
        ]
      }
    ],
    tabs: [
      {
        name: "Dashboard",
        isActive: true,
        dropdownMenu: <Dashboard />
      },
      {
        name: "Order",
        isActive: false,
        dropdownMenu: <Order />
      },
      {
        name: "Invite",
        isActive: false,
        dropdownMenu: <Invite />
      },
      {
        name: "Help & Support",
        isActive: false,
        dropdownMenu: ""
      }
    ]
  };
  handleBurgerState = () => {
    const burgerIsActive = this.state.burgerIsActive ? false : true;
    this.setState({ burgerIsActive });
  };
  handleMenuTab = tab => {
    const tabs = [...this.state.tabs];
    const menuTab = tab.dropdownMenu;
    tabs.map((i, key) => {
      i.isActive = i === tab ? true : false;
    });
    this.setState({ tabs, menuTab });
  };
  render() {
    return (
      <div>
        <Header
          burgerIsActive={this.state.burgerIsActive}
          handleBurgerState={this.handleBurgerState}
          handleMenuTab={this.handleMenuTab}
          menuTab={this.state.menuTab}
          tabs={this.state.tabs}
        />
        {this.state.burgerIsActive ? (
          ""
        ) : (
          <React.Fragment>
            {this.state.tabs[0].isActive ? <Table /> : ""}
            {this.state.tabs[1].isActive ? (
              <div className="order">
                <Product />
              </div>
            ) : (
              ""
            )}
            {this.state.tabs[2].isActive ? (
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
            ) : (
              ""
            )}
            {this.state.tabs[3].isActive ? <HelpSupport /> : ""}
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
