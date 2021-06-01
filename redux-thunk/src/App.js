import { Component } from "react";
import { connect } from "react-redux";
import getProducts from "./action/ProductActions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.my_fun();
  }
  render() {
    const { loading, products, message } = this.props.response;
    console.log(
      "This is loading",
      loading,
      "products",
      products,
      "message",
      message,
    );
    return <>
       <h4>{JSON.stringify(loading)}</h4>
       <h4>{JSON.stringify(products)}</h4>
       <h4>{JSON.stringify(message)}</h4>
    </>;
  }
}
// subscription

const recive = (state) => {
  console.log("This is State ", state);
  return {
    response: state,
  };
};

// dispatch
const send = (dispatch) => {
  console.log("This is dispatch", dispatch);
  return {
    my_fun: () => {
      dispatch(getProducts());
    },
  };
};

export default connect(recive, send)(App);
