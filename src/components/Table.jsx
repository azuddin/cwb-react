import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    return (
      <div className="section" style={{ minHeight: "auto" }}>
        <div className="container">
          <div className="panel" style={{ overflowX: "auto" }}>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09/27/18 11:51am</td>
                  <td>Optimize Wellness Plan 2 - Regeneration Wellness</td>
                  <td>hsbc</td>
                  <td>USD 100.00</td>
                  <td>paid</td>
                  <td>
                    <a className="button is-light" href="#null">
                      <span className="icon">
                        <i className="fa fa-file-export" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>09/27/18 11:51am</td>
                  <td>Optimize Wellness Plan 2 - Regeneration Wellness</td>
                  <td>hsbc</td>
                  <td>USD 100.00</td>
                  <td>paid</td>
                  <td>
                    <a className="button is-light" href="#null">
                      <span className="icon">
                        <i className="fa fa-file-export" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>09/27/18 11:51am</td>
                  <td>Optimize Wellness Plan 2 - Regeneration Wellness</td>
                  <td>hsbc</td>
                  <td>USD 100.00</td>
                  <td>paid</td>
                  <td>
                    <a className="button is-light" href="#null">
                      <span className="icon">
                        <i className="fa fa-file-export" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>09/27/18 11:51am</td>
                  <td>Optimize Wellness Plan 2 - Regeneration Wellness</td>
                  <td>hsbc</td>
                  <td>USD 100.00</td>
                  <td>paid</td>
                  <td>
                    <a className="button is-light" href="#null">
                      <span className="icon">
                        <i className="fa fa-file-export" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>09/27/18 11:51am</td>
                  <td>Optimize Wellness Plan 2 - Regeneration Wellness</td>
                  <td>hsbc</td>
                  <td>USD 100.00</td>
                  <td>paid</td>
                  <td>
                    <a className="button is-light" href="#null">
                      <span className="icon">
                        <i className="fa fa-file-export" />
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 45"
                  href="#null"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 45"
                  href="#null"
                >
                  <i className="fa fa-caret-left" />
                </a>
              </li>
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                  href="#null"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 47"
                  href="#null"
                >
                  <i className="fa fa-caret-right" />
                </a>
              </li>
              <li>
                <a
                  className="pagination-link"
                  aria-label="Goto page 45"
                  href="#null"
                >
                  45
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Table;
