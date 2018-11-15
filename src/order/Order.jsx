import React, { Component } from "react";
import Menu from "../components/menu/Menu";

class Order extends Component {
  state = {
    menu: [
      // {
      //   name: "Credits Top Up",
      //   isActive: false,
      //   isOpen: false,
      //   icon: "fa fa-plus-circle",
      //   menuItem: []
      // },
      // {
      //   name: "Products",
      //   isActive: false,
      //   isOpen: false,
      //   icon: "fa fa-shopping-cart",
      //   menuItem: []
      // }
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

export default Order;
