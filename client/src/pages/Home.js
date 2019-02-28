import React from "react";
// import Lesson from "./Lesson";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import ChartsPage from "../components/ChartsPage";
import Footer from "../components/Footer";
// import { img } from "./assets/images/dataFlow.png";

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        {/* ----------- Home: Left Column ----------- */}
        <MDBCol md="4">
          <MDBContainer>
            {/* -------------- Details -------------- */}
            <MDBCard color="peachy" text="white" className="text-center mt-40">
              <MDBCardBody>
                <MDBIcon icon="code" className="fa-7x"/>
              </MDBCardBody>
            </MDBCard>
            <hr />
            <MDBCard color="stylish-color" text="white" className="text-center maxHeight">
              <MDBCardBody>
                <blockquote>
                  Developers:
                  <hr />
                  * Jason Villaluz<br />
                  * Orion Abrams<br />
                  * John Kawahara<br />
                  * Jarren Patao<br />
                </blockquote>
              </MDBCardBody>
            </MDBCard>
            <hr />
            <MDBCard color="bluey" text="white" className="text-center">
              <MDBCardBody>
                <MDBIcon icon="code" className="fa-7x"/>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        {/* ----------- Home: Right Column ----------- */}
        <MDBCol sm="8">
          {/* ----- Why: About Fullstack Network ----- */}
          <MDBCard color="unique-color-dark" text="white" className="text-center">
            <MDBCardBody>
              <p>
                Fullstack is a web based application that enable users, affiliated with coding boot camps, to organize their curriculum and increase networking engagement.<br />
                <br />
                We've designed Fullstack with boot camps in mind. <br />
                <br />
                As students we've found that in many programs the lessons are often separated into segments which is understandable from an educational standpoint, but what about after you've learned the material? How many times have you learned something too quickly and you need to go back to refer to your notes? We have, many- many times. So we built this application for you.
              </p>
              <MDBRow>
                <MDBCol md="8">
                  <ChartsPage />
                </MDBCol>
                <MDBCol md="4">
                  <p>
                    As a boot camp administrator, how often have you struggled with platforms to manage your student's data analytics? With Fullstack you'll be able to upload lessons belonging to your cohort for easy management.
                    <hr />
                    In possible future updates, we will add live editing to an IDE with multiple sockets for mentoring sessions and more!
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <Footer />
    </MDBContainer>
  );
}

export default Home;
