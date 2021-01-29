import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <h4 className="text-center my-5">OUR TEAM</h4>
        <div className="about_content row">
          <div className="col-md-3 col-sm-6 mt-1">
            <div className="rounded_img">
              <img
                className="card p-1 rounded-circle col-sm-12 offset-sm-0 col-8 offset-2"
                src={require("../img/carousel/person1.jpg")}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
            <p className="text-center">Software Engineer</p>
            <a className="btn _bg-sea d-block text-light _btn_seeMore" href="#">
              See More
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mt-1">
            <div className="rounded_img">
              <img
                className="card p-1 rounded-circle col-sm-12 offset-sm-0 col-8 offset-2"
                src={require("../img/carousel/person1.jpg")}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
            <p className="text-center">Software Engineer</p>
            <a className="btn _bg-sea d-block text-light _btn_seeMore" href="#">
              See More
            </a>
          </div>
          <div className="col-md-3 col-sm-6 mt-1">
            <div className="rounded_img">
              <img
                className="card p-1 rounded-circle col-sm-12 offset-sm-0 col-8 offset-2"
                src={require("../img/carousel/person1.jpg")}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
            <p className="text-center">Software Engineer</p>
            <a className="btn _bg-sea d-block text-light _btn_seeMore" href="#">
              See More
            </a>
          </div>
          <div className="col-md-3 col-sm-6 mt-1">
            <div className="rounded_img">
              <img
                className="card p-1 rounded-circle col-sm-12 offset-sm-0 col-8 offset-2"
                src={require("../img/carousel/person1.jpg")}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
            <p className="text-center">Software Engineer</p>
            <a className="btn _bg-sea d-block text-light _btn_seeMore" href="#">
              See More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
