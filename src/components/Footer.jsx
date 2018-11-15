import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>&copy; Copyright 2018 Cell Wellbeing </strong> by{" "}
            <a href="https://www.azuddin.com">Ahmad Azuddin</a>
            .&nbsp;&nbsp;&nbsp;
            <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="#">Help and Support</a>
            &nbsp;&nbsp;&nbsp;<a href="#">Terms and Conditions</a>{" "}
            <a href="#">Privacy Policy</a>&nbsp;&nbsp;&nbsp;
            <a href="#">Disclaimer</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
