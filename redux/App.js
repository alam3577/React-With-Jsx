const { createStore } = require("redux");

const initialState = {
  bal: 10000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_NUM":
      return {
        ...state,
        bal: state.bal + action.payload,
      };
      break;
    case "DEC_NUM":
      return {
        ...state,
        bal: state.bal - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// subscribe

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch

store.dispatch({ type: "INC_NUM", payload: 5000 });
store.dispatch({ type: "DEC_NUM", payload: 1000 });
