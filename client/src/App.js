import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Lesson from "./components/pages/Lesson"
import NoMatch from "./components/pages/NoMatch";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile"
import "./components/pages/style.css"

function App() {
  return (
    <Router>
      <div className="wrapping">
        <NavTabs />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route path="/lessons" component={Lesson} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/charts" component={Chart} */}
        {/* <Route path="/charts" component={Chart} */}
        <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
