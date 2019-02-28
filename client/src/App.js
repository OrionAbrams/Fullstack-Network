import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson"
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AddLesson from "./pages/AddLesson"
import Profile from "./pages/Profile";
import Chart from "./components/Chart";
import ChartReg from "./pages/ChartReg";
import Contact from "./pages/Contact";

import "./components/style.css";

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
