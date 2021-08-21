import React, { Component } from "react";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const qty = this.props.location.search
      ? Number(this.props.location.search.split("=")[1])
      : 1;
    const name = this.props.match.params.name;
    return (
      <div>
        <h1>This is a signup screen</h1>
        <h1>qty={qty}</h1>
        <h1>{name}</h1>
        <h1>{JSON.stringify(this.props.location.search)}</h1>
      </div>
    );
  }
}
