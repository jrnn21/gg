import React, { Component } from "react";
import { Button } from "@material-ui/core";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="row mt-3">
        <div className="col-lg-6 col-sm-12">
          <div className="row offset-lg-1 offset-sm-0 landing_text">
            <div className="col-md-10">
              <h3>Welcome to technology learning site</h3>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                ipsam quas pariatur nihil repellat officiis libero nisi deleniti
              </p>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  background:
                    "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                }}
              >
                Click me
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 text-center">
          <img
            style={{
              width: "55%",
              //   height: "50%",
            }}
            src={require("../img/signup.svg")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
