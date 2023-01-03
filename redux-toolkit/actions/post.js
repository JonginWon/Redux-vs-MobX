const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

exports.addPost = createAsyncThunk("post/add", async (data, thunkAPI) => {
  // 비동기 요청, axios 요청
  // pending, fulfilled, rejected
  console.log(data);
  const result = await delay(500, {
    title: "새 게시글",
    content: "블라블라블라",
  });
  return result;
});
