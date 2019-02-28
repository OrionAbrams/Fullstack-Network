import React from "react";
import axios from "axios";
import { MDBContainer} from "mdbreact";
import "./style.css";
import Footer from "../components/Footer";

class Logout extends React.Component {


  componentDidMount() {
    axios.get("/logout/")
      .then(res => {
          console.log(res.data)
          alert(res.data)
      })
  }

  render() {
    return (
      <div>
          <MDBContainer>
            <Footer />
          </MDBContainer>
      </div>
    );
  }
}

export default Logout;

