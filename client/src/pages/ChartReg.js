// *** Include Modules: npm (react, mdbreact), /utils
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Pie } from "react-chartjs-2";
//import API from "../../utils/API.js";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";


  class ChartReg extends React.Component {
    state = {
      dataPie: {
        labels: ["North America", "South America", "Canada", "Europe", "Asia"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
             
            ]
          }
        ]
      }
    }
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
            <MDBCol md="2">{/* Spacer */}</MDBCol>
            <MDBCol md="8">
              <h3 className="mt-5">Classes By Region</h3>
              <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </MDBCol>
            <MDBCol md="2">{/* Spacer */}</MDBCol> 
          </MDBRow>
          <Footer />
        </MDBContainer>
      </div>
    );
  }
} 

export default ChartReg;
