import React, { Component } from "react";

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
  }
  handleButton = () => {
    this.props.history.push("/signup/sajjad?qyt=123");
  };

  render() {
    return (
      <>
        <h1>Welcome to the signin screen</h1>
        <button onClick={this.handleButton}> SignUp Screen</button>
      </>
    );
  }
}
