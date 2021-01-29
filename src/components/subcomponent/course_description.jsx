import React, { Component } from "react";
class Course_description extends Component {
  state = {};
  render() {
    return (
      <div className="p-3">
        <div className="row">
          <div className=" border _border-sea card p-4 bg-transparent">
            <h4>What you'll learn</h4>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <span className="col-2 text-center">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="col-10">
                    Learn to use Python professionally.
                  </span>
                </div>
                <div className="row">
                  <span className="col-2 text-center">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="col-10">
                    Learn to use Python professionally, learning both Python 2
                    and Python 3!
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <span className="col-2 text-center">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="col-10">
                    Learn to use Python professionally, learning both Python 2
                    and Python 3!
                  </span>
                </div>
                <div className="row">
                  <span className="col-2 text-center">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="col-10">
                    Learn to use Python professionally.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course_description;
