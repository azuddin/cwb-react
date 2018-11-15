import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <a
          href="#null"
          className={
            this.props.menu.isActive ? "panel-block is-active" : "panel-block "
          }
          onClick={() =>
            this.props.menu.menuItem.length > 0
              ? this.props.handleDropdown(this.props)
              : this.props.handleIsActive(this.props)
          }
        >
          <span className="panel-icon">
            <i className={this.props.menu.icon} aria-hidden="true" />
          </span>
          {this.props.menu.name}&nbsp;
          {this.props.menu.menuItem.length > 0 ? (
            <span className="icon is-small">
              <i
                className={
                  this.props.menu.isOpen
                    ? "fa fa-caret-down"
                    : "fa fa-caret-right"
                }
                aria-hidden="true"
              />
            </span>
          ) : (
            ""
          )}
        </a>
        {this.props.menu.isOpen && this.props.menu.menuItem.length > 0
          ? this.props.menu.menuItem.map((i, key) => (
              <MenuItem
                key={"menu-item-" + key}
                name={i.name}
                isActive={i.isActive}
              />
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default Menu;
