const addPost = (data) => {
  return {
    //action
    type: "ADD_POST",
    data,
  };
};

module.exports = addPost;
