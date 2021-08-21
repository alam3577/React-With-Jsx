import React, { Component } from "react";

export default class Screen1 extends Component {
  handleNavigation = () => {
    this.props.history.push("/screen2/111?qty=10");
  };

  render() {
    return (
      <>
        <h1>this is button</h1>
        <button onClick={this.handleNavigation}>
          Click to Navigate from one screen to another
        </button>
      </>
    );
  }
}
