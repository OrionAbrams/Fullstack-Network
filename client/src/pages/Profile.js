import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./style.css";
import Footer from "../components/Footer";
import API from "../utils/API.js";

let profileNum;
let usersArray = [];

class Profile extends React.Component {

  state = {
    userPhotoUrl: "",
    id: "",
    name: "",
    class: "",
    lessons: "",
    users: [],
    isAdmin: false,
    needMentor: false,
    usersInClass: usersArray
  };
  loadCurrentUser = () => {
    let thisUserClass;
    let currentProfile = this.props.match.params.id
    axios.get("/profile")
      .then(res => {
        this.setState({
          isAdmin: res.data.isAdmin,
          id: res.data.id,
          needMentor: res.data.needMentor
        })
        if (typeof res.data !== 'object') {
          alert("Must sign in first!")
        }
        else if (res.data.isAdmin && !currentProfile) {
          this.setState({
            isAdmin: true
          })
          profileNum = res.data.id
        }
        else if (res.data.isAdmin) {
          this.setState({
            isAdmin: true
          })
          profileNum = currentProfile
        }
        else {
          profileNum = res.data.id
        }
      }).then(() =>
        axios.get("/profile/" + profileNum)
          .then(res => {
            thisUserClass = res.data.ClassId
            this.setState({ userPhotoUrl: res.data.userPhotoUrl, name: res.data.name })
          }).then(() => {
            axios.get("/profile/class/" + thisUserClass)
              .then(res => {
                let lessonsArray = [];
                if (typeof res.data === 'object') {
                  for (let i = 0; i < res.data.Lessons.length; i++) {
                    if (this.state.isAdmin && !res.data.Lessons[i].original) {
                      lessonsArray.push(
                        <li>
                          <a target="_blank" rel="noopener noreferrer" href={res.data.Lessons[i].lessonUrl}>{res.data.Lessons[i].frontEndName}</a>
                          <button onClick={this.handleDeleteSubmit.bind(this, res.data.Lessons[i].id)} data-id={res.data.Lessons[i].id} className="btn btn-danger btn-sm text-white">
                            ✗
                          </button>
                        </li>)
                    } else {
                      lessonsArray.push(
                        <li>
                          <a target="_blank" rel="noopener noreferrer" href={res.data.Lessons[i].lessonUrl}>{res.data.Lessons[i].frontEndName}</a>
                        </li>
                      )
                    }
                  }
                    usersArray.push(res.data.Users)
                }
                this.setState({ class: res.data.name, lessons: lessonsArray})
                if (this.state.isAdmin) {
                  this.setState({ usersInClass: usersArray})
                }
              })
            this.usersNeedMentor();
          }))
  }
  componentDidMount() {
    this.loadCurrentUser()
  }

  // Deletes a lesson if it's not an original one
  handleDeleteSubmit = (id, event) => {
    API.deleteLesson(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };
  getData = () => {
    API.getUsers()
      .then((res) => {
        this.componentDidMount()
      })
      .catch(err => {
        console.log(err);
      });
  };
  // Get users that need mentor
  usersNeedMentor = () => {
    API.getUsers()
      .then((res) => {
        const needMentor = [];
        res.data.map(user => {
          if (user.needMentor) {
            needMentor.push(user);
          }
        })
        this.setState({
          users: needMentor
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Handles update to needMentor
  handleGetMentor = event => {
    event.preventDefault();
    API.updateUser(
      {
        id: this.state.id,
        needMentor: 1
      },
    ).then((res) => {
      this.setState({
        needMentor: true
      })
    })
      .catch(err => {
        console.log(err);
      });
  };

  // Handles update to become admin
  handleBeAdmin = event => {
    event.preventDefault();
    API.updateAdmin(
      {
        id: this.state.id,
        isAdmin: true
      },
    ).then((res) => {
      this.setState({
        isAdmin: true
      })
      this.forceUpdate()
    })
      .catch(err => {
        console.log(err);
      });
  };

  handleBeStudent = event => {
    event.preventDefault();
    API.updateStudent(
      {
        id: this.state.id,
        isAdmin: false
      },
    ).then((res) => {
      this.setState({
        isAdmin: false
      })
      this.forceUpdate()
    })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <h2>Welcome, {this.state.name}</h2>
          <div right>
            <Link to="/logout">
              <MDBBtn className="peachy">
                Logout
              </MDBBtn>
            </Link>
            <Link to="/addLesson">
              {this.state.isAdmin ? <MDBBtn className="peachy"> Add Lesson </MDBBtn> : null}
            </Link>
          </div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <img alt="Profile Pic" className="smallPic" src={this.state.userPhotoUrl} />
                {this.state.isAdmin ? <h5>Students in this Class</h5> : null}
                {this.state.isAdmin ?
                  <div>
                    {this.state.usersInClass.length ? (
                      <ul>
                        {this.state.usersInClass[0].map(user => (
                          <li>
                            <Link onClick={this.getData} to={"/profile/" + user.id}> {user.name} </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                        null
                      )}
                  </div>
                  : null}
              </MDBCol>
              <MDBCol md="4">
                <h3>
                  Class: {this.state.class}
                </h3>
                <h5>
                  Lessons: {this.state.lessons}
                </h5>
              </MDBCol>
              {this.state.isAdmin ? (
                <MDBCol md="2">
                  <h5>Users Needing Mentor:</h5>
                  {this.state.users.length ? (
                    <ul>
                      {this.state.users.map(user => (
                        <li>{user.name}</li>
                      ))}
                    </ul>
                  ) : (
                      <h3>No current requests for mentor</h3>
                    )}
                </MDBCol>
              ) : (
                  <MDBCol>
                    <div>
                      {!this.state.needMentor ? (
                        <MDBBtn onClick={this.handleGetMentor} className="peachy">
                          Click for a mentor!
                    </MDBBtn>
                      ) : (
                          <h3>A mentor will be in contact soon</h3>
                        )}
                    </div>
                  </MDBCol>
                )}
            </MDBRow>
            <MDBRow>
              <div>
                {this.state.isAdmin ? (
                  <MDBBtn onClick={this.handleBeStudent} className="peachy">Become Student</MDBBtn>
                ) : (
                    <MDBBtn onClick={this.handleBeAdmin} className="peachy">Become Admin</MDBBtn>
                  )}
              </div>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
