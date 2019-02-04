import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

var sectionStyle = {
  width: "100%",
  height: "100vh"
};

class Login extends React.Component {
    state = {
      login: ''
    };

render() { 
  return (
    <div style={sectionStyle} >
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    {/* if material bootstrap is installed, you should see the below button as green */}
   

    <MDBContainer>
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4"> 
        <div className="form-group">
    
    </div>
   <div className="form-group">
      <input size="30" type="email" className="form-control" placeholder="Your e-mail" />
    
    </div>
    <div className="form-group">
      <input size="30" type="password" className="form-control" placeholder="Your password" />
    
    </div>
<button className="btn-default">Login</button>
    
       

   
        </MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow >
    </MDBContainer>


    </div>
     
  );
}
}
export default Login;
