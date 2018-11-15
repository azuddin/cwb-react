import React, { Component } from "react";
import logo from "../cell-wellbeing-logo.png";
import Dashboard from "../dashboard/Dashboard";
import Order from "../order/Order";
import Invite from "../invite/Invite";
import Menu from "./menu/Menu";

class Header extends Component {
  state = {
    burgerIsActive: this.props.burgerIsActive,
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
    ]
  };
  handleBurgerState = () => {
    this.props.handleBurgerState();
    const burgerIsActive = this.state.burgerIsActive ? false : true;
    this.setState({ burgerIsActive });
  };
  handleMenuTab = tab => {
    const menuTab = tab;
    this.setState({ menuTab });
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
              <a
                className="is-active"
                href="#null"
                onClick={() => this.handleMenuTab(<Dashboard />)}
              >
                Dashboard
              </a>
              <a href="#null" onClick={() => this.handleMenuTab(<Order />)}>
                Order
              </a>
              <a href="#null" onClick={() => this.handleMenuTab(<Invite />)}>
                Invite
              </a>
              <a href="#null" onClick={() => this.handleMenuTab("")}>
                Helps &amp; Supports
              </a>
            </p>
            {this.state.menuTab}
          </nav>
        )}
      </React.Fragment>
    );
  }
}

export default Header;
