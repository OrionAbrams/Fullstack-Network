import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isLoggedIn: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  loggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  loggedOut = () => {
    this.setState({ isLoggedIn: this.state.isLoggedIn });
  }

  render() {
  return (
    <MDBNavbar className="peachy marBot" light expand="md">
      <MDBNavbarBrand href="/">
        <MDBNavLink to="/">Fullstack-Network</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/ChartReg">Charts</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Lesson</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="/lessons/react/1">Lesson 1 - State</MDBDropdownItem>
                <MDBDropdownItem href="/lessons/react/2">Lesson 2 - Props</MDBDropdownItem>
                <MDBDropdownItem href="/lessons/react/3">Lesson 3 - Forms</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                {!this.state.isLoggedIn ? <MDBDropdownItem><MDBNavLink to="/SignUp">Sign Up</MDBNavLink></MDBDropdownItem> : null}
                {!this.state.isLoggedIn ? <MDBDropdownItem><MDBNavLink to="/Login" onClick={this.loggedIn}>Login</MDBNavLink></MDBDropdownItem> : null}
                {this.state.isLoggedIn ? <MDBDropdownItem><MDBNavLink to="/Profile">Profile</MDBNavLink></MDBDropdownItem> : null}
                {this.state.isLoggedIn ? <MDBDropdownItem><MDBNavLink to="/Logout" onClick={this.loggedOut}>Logout</MDBNavLink></MDBDropdownItem> : null}
                <MDBDropdownItem><MDBNavLink to="/ChartsPage">Statistics</MDBNavLink></MDBDropdownItem>                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;