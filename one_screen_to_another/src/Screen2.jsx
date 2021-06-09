import React, { Component } from "react";
import { match, NavLink } from "react-router-dom";

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const qty = this.props.location.search
      ? Number(this.props.location.search.split("=")[1])
      : 1;

    return (
      <>
        <h1>{this.props.match.params.p_id}</h1>
        <h2>{qty}</h2>
        <NavLink to="/" exact={true} strict>
          Back to the home
        </NavLink>
      </>
    );
  }
}
