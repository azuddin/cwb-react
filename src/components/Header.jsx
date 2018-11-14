import React, { Component } from "react";
import logo from "../cell-wellbeing-logo.png";
import Dashboard from "../dashboard/Dashboard";
import Order from "../order/Order";
import Invite from "../invite/Invite";
import HelpSupport from "../helpSupport/HelpSupport";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src={logo}
                alt="Bulma: a modern CSS framework based on Flexbox"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
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
            <a className="is-active">Dashboard</a>
            <a>Order</a>
            <a>Invite</a>
            <a>Helps &amp; Supports</a>
          </p>
          {/* <Dashboard /> */}
          {/* <Order /> */}
          {/* <Invite /> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
