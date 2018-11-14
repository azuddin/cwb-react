import React, { Component } from "react";
import Menu from "../components/menu/Menu";

class Order extends Component {
  state = {
    menu: [
      {
        name: "Credits Top Up",
        isActive: false,
        isOpen: false,
        icon: "fa fa-plus-circle",
        menuItem: []
      },
      {
        name: "Products",
        isActive: false,
        isOpen: false,
        icon: "fa fa-shopping-cart",
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

export default Order;
