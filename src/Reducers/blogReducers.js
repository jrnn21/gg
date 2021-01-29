import alerts from "../components/subcomponent/Alert";

const blogReducers = (state = {}, action) => {
  switch (action.type) {
    case "BLOG_ADDED":
      alerts("bg-success", "Blog added successfully!");
      return state;
    case "ADD_BLOG_ERR":
      alerts("bg-danger", "Blog added error!");
      return state;
    default:
      return state;
  }
};

export default blogReducers;
