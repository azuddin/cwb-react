import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>&copy; Copyright 2018 Cell Wellbeing </strong> by{" "}
            <a href="https://www.azuddin.com">Ahmad Azuddin</a>
            .&nbsp;&nbsp;&nbsp;
            <a href="#null">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="#null">Help and Support</a>
            &nbsp;&nbsp;&nbsp;<a href="#null">Terms and Conditions</a>
            &nbsp;&nbsp;&nbsp;
            <a href="#null">Privacy Policy</a>&nbsp;&nbsp;&nbsp;
            <a href="#null">Disclaimer</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
