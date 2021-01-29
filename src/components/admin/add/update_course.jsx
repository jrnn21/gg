import React, { useState } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextArea from "antd/lib/input/TextArea";
const Update_course = ({ courses, user, UpdateCourse }) => {
  const [course, setCourse] = useState({
    description: courses.description,
    title: courses.title,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((course) => ({ ...course, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateCourse(courses, course);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>
          <input
            type="text"
            placeholder="Course Name"
            className="text-center w-100 border-0 input_update"
            name="title"
            onChange={handleChange}
            defaultValue={courses && courses.title}
            required
          />
        </h1>
        <p>
          <TextArea
            type="text-area"
            placeholder="Course Description"
            className=" w-100 border-0 input_update m-0 p-0"
            name="description"
            onChange={handleChange}
            defaultValue={courses && courses.description}
            required
            rows="3"
          />
        </p>
        <small>
          By : {user && user.firstName + " " + user.lastName} <br />
          {course && moment(courses.date.toDate()).calendar()}
        </small>
        <br />
        <Button
          type="submit"
          //   fullWidth
          variant="contained"
          color="secondary"
          className=""
        >
          Update Course
        </Button>
      </form>
    </>
  );
};

export default Update_course;
