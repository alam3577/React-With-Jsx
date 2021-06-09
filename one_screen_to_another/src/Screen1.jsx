import React, { Component } from "react";

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
  }

  handleNavigation = () => {
    this.props.history.push("/screen2/111?qty=10");
  };

  render() {
    return (
      <>
        <button onClick={this.handleNavigation}>
          Click to Navigate from one screen to another
        </button>
      </>
    );
  }
}
