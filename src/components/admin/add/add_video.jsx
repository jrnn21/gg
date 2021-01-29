import React, { useState } from "react";
import { Button } from "@material-ui/core";

const Add_Video = ({ cid, AddVideo }) => {
  const [video, setVideo] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((video) => ({ ...video, [name]: value }));
  };
  const handdleSubmit = (e) => {
    e.preventDefault();
    AddVideo(video, cid);
  };

  return (
    <>
      <h4 className="text-center">Course Videos</h4>
      <form className="form-inline row" onSubmit={handdleSubmit}>
        <div className="form-group col-lg-5">
          <input
            className="form-control w-100"
            type="text"
            placeholder="Video title"
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-lg-5">
          <input
            className="form-control w-100"
            type="text"
            placeholder="Video url"
            name="url"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-2">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="w-100"
          >
            add video
          </Button>
        </div>
      </form>
    </>
  );
};

export default Add_Video;
