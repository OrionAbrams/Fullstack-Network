// *** Include Modules: npm (react, mdbreact), /utils
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Bar } from "react-chartjs-2";
//import API from "../../utils/API.js";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";



class Chart extends React.Component {
  state = {
    dataBar: {
      labels: ["JavaScript", "JQuery", "React", "HTML", "Css"],
      datasets: [
        {
          label: "Average Time for Lesson",
          data: [12, 39, 3, 50, 2, 32, 84],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: "Average Time Coding",
          data: [56, 24, 5, 16, 45, 24, 8],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        },
        {
          label: "Average Time Testing",
          data: [12, 25, 54, 3, 15, 44, 3],
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
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
          </MDBRow>
          <MDBRow>
          <MDBCol md="2">
          </MDBCol>
            <MDBCol md="8">
            
            <h3 className="mt-5"> Classes Taken</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
            </MDBCol>
            <MDBCol md="2">
          </MDBCol> 
          </MDBRow>
          <MDBRow>
          </MDBRow> 
          <Footer />
        </MDBContainer>
      </div>
    );
  }
} 

export default Chart;
