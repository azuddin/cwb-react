import React, { Component } from "react";

class MenuItem extends Component {
  state = {
    name: this.props.name,
    isActive: this.props.isActive
      ? "panel-block has-background-light is-active"
      : "panel-block has-background-light"
  };
  render() {
    return (
      <a className={this.state.isActive} href="/">
        <span className="panel-icon">
          <i className="fas fa-angle-double-right" aria-hidden="true" />
        </span>
        {this.state.name}
      </a>
    );
  }
}

export default MenuItem;
