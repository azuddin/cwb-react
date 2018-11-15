import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <div class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Our Products &amp; Plans</h1>
              <h2 class="subtitle">
                We provide a wide range of products and plans that would likely
                meet your needs.
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child">
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
              <div class="tile is-10">
                <div class="tile is-parent is-vertical">
                  <div class="tile is-child">
                    <div class="content">
                      <p>
                        <strong>Top Up Name</strong>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                        <br />
                        <strong>USD 100</strong> <small>**(MYR 400)</small>
                      </p>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div class="content">
                      <div class="buttons are-medium">
                        <a class="button">Add to Cart</a>
                        <a class="button">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child">
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
              <div class="tile is-10">
                <div class="tile is-parent is-vertical">
                  <div class="tile is-child">
                    <div class="content">
                      <p>
                        <strong>Product Name</strong>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                        <br />
                        <strong>USD 100</strong> <small>**(MYR 400)</small>
                      </p>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div class="content">
                      <div class="buttons are-medium">
                        <a class="button">Add to Cart</a>
                        <a class="button">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
