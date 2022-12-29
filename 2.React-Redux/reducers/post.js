const initialState = [];

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      // reducer을 나눠서 이제 더이상 prevState는 inittialState가 아니라 posts 이다.
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

module.exports = postReducer;
