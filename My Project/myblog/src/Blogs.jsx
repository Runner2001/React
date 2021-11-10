import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Customhook from "./Customhook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import React from "react";
import Detail from "./Detail";

class Blogs extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Customhook}></Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/detail/:postid">
              <Detail />
            </Route>
            <Route path="/login">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Blogs;
