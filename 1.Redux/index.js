const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log("1st", store.getState());

const logIN = (data) => {
  return {
    //action
    type: "LOG_IN",
    data,
  };
};

const logOut = (data) => {
  return {
    //action
    type: "LOG_OUT",
    data,
  };
};

const addPost = (data) => {
  return {
    //action
    type: "ADD_POST",
    data,
  };
};

store.dispatch(changeCopmA("b"));

console.log("2st", store.getState());
console.log(initialState);
