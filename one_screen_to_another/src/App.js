import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact={true} strict component={Screen1}></Route>
          <Route
            path="/screen2/:p_id"
            exact={true}
            strict
            component={Screen2}
          ></Route>
          
        </Router>
      </>
    );
  }
}
