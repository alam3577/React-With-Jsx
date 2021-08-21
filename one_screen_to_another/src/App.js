import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TwoScreen from "./hooks/TwoScreen";
import OneScreen from "./hooks/OneScreen";
import SigninScreen from "./classbased/SigninScreen";
import SignupScreen from "./classbased/SignupScreen";
function App() {
  return (
    <>
      {/* <Router>
        <Route exact={true} path="/" component={OneScreen}></Route>
        <Route exact={true} path="/screen2/:id" component={TwoScreen}></Route>
      </Router> */}

      {/* <Router>
          <Route strict exact={true} path="/" component={Screen1}></Route>
          <Route
            strict
            exact={true}
            path="/screen2/:p_id"
            component={Screen2}
          ></Route>
        </Router> */}

      <Router>
        <Route strict exact={true} path="/" component={SigninScreen}></Route>
        <Route
          strict
          exact={true}
          path="/signup/:name"
          component={SignupScreen}
        ></Route>
      </Router>
    </>
  );
}

export default App;
