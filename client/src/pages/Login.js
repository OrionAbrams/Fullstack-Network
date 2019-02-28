// *** Include Modules: npm (react, mdbreact), /utils
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from "../utils/API";
import { FormInput, FormBtn } from "../components/FormInput";
import "./style.css";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";

class Login extends Component {
  state = {
    user: {},
    email: "",
    password: "",
    redirect: false
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Handles login via Passport
  handleLoginSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then((res) => {
          if (res.data){
            this.setState({ redirect: true })
          }
        })
        .catch(err => {
          console.log(err);
          if (err) {
            alert("Sign in credentials invalid");
          }
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to="/profile" /> : null}
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
            <MDBCol md="4">
              <form>
                <FormInput
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Your e-mail"
                />
                <FormInput
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleLoginSubmit}
                >
                  Login
                </FormBtn>
              </form>
            </MDBCol>
            <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
          </MDBRow>
          <Footer />
        </MDBContainer>
      </div>
    );
  }
}
export default Login;
