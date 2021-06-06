import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }

  handleUserNameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      userName: e.target.value,
    });
  };

  handleComment = (e) => {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value,
    });
  };

  handltopic = (e) => {
    console.log(e.target.value);
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Input Values are :---->>> ${this.state.userName}----->${this.state.comment}------>${this.state.topic}`,
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
          <br />

          <label htmlFor="">Comments</label>
          <textarea
            value={this.props.comment}
            onChange={this.handleComment}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div>
            <label htmlFor="">Languages</label>
            <select value={this.state.topic} onChange={this.handltopic}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vuejs">Vue Js</option>
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
        <h1>This is UserName :- {this.state.userName}</h1>
        <h1>This is Comments :- {this.state.comment}</h1>
        <h1>This is Comments :- {this.state.topic}</h1>
      </>
    );
  }
}
