import React, { Component } from "react";
import logo from "../cell-wellbeing-logo.png";
import Dashboard from "../dashboard/Dashboard";
import Order from "../order/Order";
import Invite from "../invite/Invite";
import Menu from "./menu/Menu";

class Header extends Component {
  state = {
    burgerIsActive: this.props.burgerIsActive,
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
    ]
  };
  handleBurgerState = () => {
    this.props.handleBurgerState();
    const burgerIsActive = this.state.burgerIsActive ? false : true;
    this.setState({ burgerIsActive });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#null">
              <img
                src={logo}
                alt="Bulma: a modern CSS framework based on Flexbox"
                height="28"
              />
            </a>

            <a
              role="button"
              className={
                this.state.burgerIsActive
                  ? "navbar-burger is-active"
                  : "navbar-burger"
              }
              aria-label="menu"
              aria-expanded="false"
              href="#null"
              onClick={this.handleBurgerState}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
        {this.state.burgerIsActive ? (
          <nav className="panel">
            {this.state.menu.length > 0
              ? this.state.menu.map((i, key) => (
                  <Menu key={"burger-" + key} menu={i} />
                ))
              : ""}
          </nav>
        ) : (
          <nav className="panel">
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Try search for 'S-drive'"
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>
              </p>
            </div>
            <p className="panel-tabs">
              <a className="is-active" href="#null">
                Dashboard
              </a>
              <a href="#null">Order</a>
              <a href="#null">Invite</a>
              <a href="#null">Helps &amp; Supports</a>
            </p>
            <Dashboard />
            <Order />
            <Invite />
          </nav>
        )}
      </React.Fragment>
    );
  }
}

export default Header;
