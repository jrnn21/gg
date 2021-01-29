import React, { Component } from "react";
class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="gallery my-5 ">
        <h4 className="text-center">
          {" "}
          The Courses we made is for beginer learner..
        </h4>
        <div className="row galleryBox">
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website2.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website1.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website3.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website1.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website1.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 p-3">
            <img
              className="card p-1"
              src={require("../img/carousel/website1.PNG")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
