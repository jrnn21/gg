import alerts from "../components/subcomponent/Alert";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      alerts("bg-success", "Signed in successfully!");
      return state;
    case "SIGN_IN_ERR":
      alerts("bg-danger", "You can not sign in. Incorrect Email or Password! ");
      return state;
    case "SIGN_OUT":
      alerts("bg-success", "You've signed out successfully!");
      return state;
    case "SIGN_UP":
      alerts("bg-success", "Registration successfully!");
      return state;
    case "SIGN_UP_ERR":
      alerts("bg-danger", "Can not register with your information!");
      console.log(state);
      return state;
    default:
      return state;
  }
};
export default authReducer;
