// *** Include Modules: npm (react, mdbreact), /utils
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from "../utils/API.js";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    ClassId: "",
    userPhotoUrl: "",
    redirect: false
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      ClassId: this.state.ClassId,
      userPhotoUrl: this.state.userPhotoUrl
    }).then((res) => {
      this.setState({
        name: "",
        email: "",
        password: "",
        ClassId: "",
        userPhotoUrl: ""
      });
      this.setRedirect();
      this.renderRedirect();
    })
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
      <div >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4">
              <form className="form"> {/* //for comp */}
                <div className="form-group">
                  <input size="30" name="name" className="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input size="30" name="email" className="form-control" placeholder="Your e-mail" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input size="30" type="password" name="password" className="form-control" placeholder="Your password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <select name="ClassId" className="browser-default custom-select" value={parseInt(this.state.ClassId)} onChange={this.handleInputChange}>
                    <option>-- Choose your class --</option>
                    <option value="1">UCB</option>
                    <option value="2">Bootcamp2</option>
                    <option value="3">Bootcamp3</option>
                  </select>
                </div>
                <div className="form-group">
                  <input size="30" name="userPhotoUrl" className="form-control" placeholder="Profile Pic URL" value={this.state.userPhotoUrl} onChange={this.handleInputChange} />
                </div>
                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-lg btn-danger float-right">
                  Sign Up
                </button>
                { this.renderRedirect() }
              </form>
            </MDBCol>
            <MDBCol md="4"></MDBCol>
          </MDBRow>
          <Footer />
        </MDBContainer>
      </div>
    );
  }
}
export default SignUp;
