import alerts from "../components/subcomponent/Alert";

const courseReducers = (state = {}, action) => {
  switch (action.type) {
    case "ENROLLED":
      alerts("bg-success", "Course enrolled successfully!");
      return state;
    case "ENROLLED_ERR":
      alerts("bg-danger", "Course enrolled error!");
      return state;
    case "WATCHED":
      alerts("bg-success", "You've watched this video!");
      return state;
    case "WATCHED_ERR":
      alerts("bg-danger", "Watched error");
      return state;
    case "IMAGE_UPLOADING":
      alerts("bg-info", "Uploading image...!");
      return state;
    case "ADD_COURSE":
      alerts("bg-success", "Course added successfully!");
      return state;
    case "ADD_COURSE_ERR":
      alerts("bg-danger", "Course added error!");
      return state;
    case "UPDATED_COURSE_ERR":
      alerts("bg-danger", "Course updated error!");
      return state;
    case "UPDATED_COURSE":
      alerts("bg-success", "Course updated successfully!");
      return state;

    case "ADDED_VIDEO":
      alerts("bg-success", "Video added successfully!");
      return state;

    case "ADD_VIDEO_ERR":
      alerts("bg-danger", "Video added error!");
      return state;

    case "UPDATED_VIDEO":
      alerts("bg-success", "Video updated successfully!");
      return state;

    case "UPDATE_VIDEO_ERR":
      alerts("bg-danger", "Video updated error!");
      return state;
    case "REMOVED_VIDEO":
      alerts("bg-success", "Video removed successfully!");
      return state;
    case "REMOVED_VIDEO_ERR":
      alerts("bg-danger", "Video removed error!");
      return state;
    case "ENROLL_NOT_ALLOW":
      alerts("bg-warning", "Please Enroll this Course first !");
      return state;
    default:
      return state;
  }
};
export default courseReducers;
