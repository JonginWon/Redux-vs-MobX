const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

exports.logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // 비동기 요청, axios 요청
  // pending, fulfilled, rejected
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: "jongin",
  });
  return result;
});
