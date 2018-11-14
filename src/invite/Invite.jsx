import React, { Component } from "react";
import Menu from "../components/menu/Menu";

class Invite extends Component {
  state = {
    menu: [
      {
        name: "Email Invite",
        isActive: false,
        isOpen: false,
        icon: "fa fa-at",
        menuItem: []
      },
      {
        name: "Direct Invite",
        isActive: false,
        isOpen: false,
        icon: "fa fa-address-card",
        menuItem: []
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.menu.length > 0
          ? this.state.menu.map(i => <Menu menu={i} />)
          : ""}
      </React.Fragment>
    );
  }
}

export default Invite;
