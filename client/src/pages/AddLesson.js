// *** Include Modules: npm (react, mdbreact), /utils
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from "../utils/API.js";

class AddLesson extends React.Component {
  state = {
    name: "",
    frontEndName: "",
    lessonUrl: "",
    ClassId: "",
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
    console.log(this.state)
    API.saveLesson({
      name: this.state.name,
      frontEndName: this.state.frontEndName,
      lessonUrl: this.state.lessonUrl,
      ClassId: this.state.ClassId
    }).then((res) => {
      this.setState({
        name: "",
        frontEndName: "",
        lessonUrl: "",
        ClassId: ""
      });
      alert("Lesson added!")
    })
  };


  render() {
    return (
      <div >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4">
              <form className="form"> {/* //for comp */}
                <div className="form-group">
                  <input size="30" name="name" className="form-control" placeholder="Lesson + Number" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input size="30" name="frontEndName" className="form-control" placeholder="Full Lesson Name" value={this.state.frontEndName} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input size="30" name="lessonUrl" className="form-control" placeholder="Full Lesson URL" value={this.state.lessonUrl} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                <select name="ClassId" className="browser-default custom-select" onChange={this.handleInputChange} >
                  <option>-- Class for Lesson --</option>
                  <option value="1">UCB</option>
                  <option value="2">Bootcamp2</option>
                  <option value="3">Bootcamp3</option>
                </select>
                </div>
                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-lg btn-danger float-right">
                  Add Lesson
                </button>
              </form>
            </MDBCol>
            <MDBCol md="4"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default AddLesson;
