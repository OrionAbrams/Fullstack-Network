import React from "react";
import axios from "axios";

class Profile extends React.Component {
  state = {
    userPhoto: ""
  };

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");

      //need a route to get user info based on req.user
      axios.get("/api/userprofile")

        .then(res => {
          console.log("we need req.user from passport to know which profile page to send user to, also to load this user's data")
          console.log(res.data.userPhotoUrl)
          this.setState({ lesson: res.data.userPhotoUrl })
        })
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div>
          <p>user profile info will go here</p>
        </div>
      </div>
    );
  }
}

export default Profile;

