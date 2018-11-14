import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    name: this.props.menu.name,
    menuItem: this.props.menu.menuItem,
    isActive: this.props.menu.isActive,
    isOpen: this.props.menu.isOpen,
    icon: this.props.menu.icon
  };
  render() {
    return (
      <React.Fragment>
        <a
          className={
            this.state.isActive ? "panel-block is-active" : "panel-block "
          }
        >
          <span className="panel-icon">
            <i className={this.state.icon} aria-hidden="true" />
          </span>
          {this.state.name}&nbsp;
          {this.state.menuItem.length > 0 ? (
            <span className="icon is-small">
              <i
                className={
                  this.state.isOpen ? "fa fa-caret-down" : "fa fa-caret-right"
                }
                aria-hidden="true"
              />
            </span>
          ) : (
            ""
          )}
        </a>
        {this.state.isOpen && this.state.menuItem.length > 0
          ? this.state.menuItem.map(i => (
              <MenuItem name={i.name} isActive={i.isActive} />
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default Menu;
