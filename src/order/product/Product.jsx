import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Our Products &amp; Plans</h1>
              <h2 className="subtitle">
                We provide a wide range of products and plans that would likely
                meet your needs.
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="tile is-mobile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <div className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder"
                    />
                  </div>
                </div>
              </div>
              <div className="tile is-10">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child">
                    <div className="content">
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
                  <div className="tile is-child">
                    <div className="content">
                      <div className="buttons are-medium">
                        <a href="#null" className="button">
                          Add to Cart
                        </a>
                        <a href="#null" className="button">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <div className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder"
                    />
                  </div>
                </div>
              </div>
              <div className="tile is-10">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child">
                    <div className="content">
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
                  <div className="tile is-child">
                    <div className="content">
                      <div className="buttons are-medium">
                        <a href="#null" className="button">
                          Add to Cart
                        </a>
                        <a href="#null" className="button">
                          Buy Now
                        </a>
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
