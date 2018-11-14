import React, { Component } from "react";
import Menu from "../components/menu/Menu";

class Dashboard extends Component {
  state = {
    menu: [
      {
        name: "Account",
        isActive: true,
        isOpen: false,
        icon: "fa fa-user",
        menuItem: [
          {
            name: "Profile",
            isActive: false
          },
          {
            name: "Roles",
            isActive: false
          },
          {
            name: "Active Plan",
            isActive: false
          },
          {
            name: "Payment History",
            isActive: true
          },
          {
            name: "S-Drive Usage History",
            isActive: false
          },
          {
            name: "Uploaded Credential",
            isActive: false
          }
        ]
      },
      {
        name: "Private Group",
        isActive: false,
        isOpen: false,
        icon: "fa fa-users",
        menuItem: [
          {
            name: "Info",
            isActive: false
          },
          {
            name: "Members",
            isActive: false
          },
          {
            name: "Allocation History",
            isActive: false
          },
          {
            name: "S-Drive Usage History",
            isActive: false
          }
        ]
      },
      {
        name: "Agent",
        isActive: false,
        isOpen: true,
        icon: "fa fa-code-branch",
        menuItem: [
          {
            name: "List",
            isActive: false
          },
          {
            name: "Stock",
            isActive: false
          },
          {
            name: "Installation List",
            isActive: false
          },
          {
            name: "Training List",
            isActive: false
          },
          {
            name: "Credential List",
            isActive: false
          },
          {
            name: "Allocation History",
            isActive: false
          },
          {
            name: "Transaction History",
            isActive: false
          },
          {
            name: "S-Drive Usage History",
            isActive: false
          }
        ]
      },
      {
        name: "Rebates",
        isActive: false,
        isOpen: false,
        icon: "fa fa-money-check-alt",
        menuItem: []
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.menu.length > 0
          ? this.state.menu.map(i => <Menu menu={i} />)
          : ""}
      </React.Fragment>
    );
  }
}

export default Dashboard;
