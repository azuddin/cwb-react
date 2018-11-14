import React, { Component } from "react";

class HelpSupport extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="tile is-ancestor box">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-10">
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor box">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-10">
            <div class="tile is-parent">
              <article class="tile is-child">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpSupport;
