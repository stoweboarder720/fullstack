import React from "react";
import {Navbar, Nav, NavItem, NavLink,} from "reactstrap";
import classnames from "classnames";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
  }

  render() {
    return (
      <div className="navbarHeader">
        <Navbar className="navbarMenu pt-0 pb-2 pb-md-0" expand="sm" dark>
            <Nav>
              <NavItem className="navbarItem text-center col-xs-12">
                <NavLink className={"navbarItemLink " + classnames({ active: this.props.tab === "0" })} onClick={() => this.toggleTab("0")}>
                  Welcome
                </NavLink>
              </NavItem>
              <NavItem className="navbarItem text-center col-xs-12">
                <NavLink className={"navbarItemLink " + classnames({ active: this.props.tab === "1" })} onClick={() => this.toggleTab("1")}>
                  Major Select
                </NavLink>
              </NavItem>
              <NavItem className="navbarItem text-center col-xs-12">
                <NavLink className={"navbarItemLink " + classnames({ active: this.props.tab === "2" })} onClick={() => this.toggleTab("2")}>
                  Reqs
                </NavLink>
              </NavItem>
              <NavItem className="navbarItem text-center col-xs-12">
                <NavLink className={"navbarItemLink " + classnames({ active: this.props.tab === "3" })} onClick={() => this.toggleTab("3")}>
                  Electives
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>

      </div>
    );
  }
}

export default Navigation;
