import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Lesson from "./components/pages/Lesson"
import NoMatch from "./components/pages/NoMatch";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import AddLesson from "./components/pages/AddLesson"
import Profile from "./components/pages/Profile";
import Chart from "./components/pages/Chart";
import ChartReg from "./components/pages/ChartReg";
import Contact from "./components/pages/Contact";

import "./components/pages/style.css";

function App() {
  return (
    <Router>
      <div className="wrapping">
        <NavTabs />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/lessons" component={Lesson} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/addlesson" component={AddLesson} />
        <Route path="/chart" component={Chart} />
        <Route path="/chartreg" component={ChartReg} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
