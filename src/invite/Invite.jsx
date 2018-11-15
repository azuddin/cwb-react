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
  handleIsActive = item => {
    const menu = [...this.state.menu];
    menu.map((i, key) => {
      i.isActive = i === item.menu ? true : false;
    });
    this.setState({ menu });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.menu.length > 0
          ? this.state.menu.map((i, key) => (
              <Menu
                key={"menu-" + key}
                menu={i}
                handleIsActive={this.handleIsActive}
              />
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default Invite;
