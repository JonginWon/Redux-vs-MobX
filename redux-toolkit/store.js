const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const reducer = require("./reducers");

const firstMiddleware = (store) => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
});

module.exports = store;
