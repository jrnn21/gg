import React from "react";
import "./footer.css";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <>
      <div
        className="text-light container-fluid bg-dark"
        style={{
          minHeight: "10rem",
          padding: "4rem 0 1rem 0",
          marginTop: "10rem",
          // background: "black",
        }}
      >
        <div className="mx-auto p-1" style={{ maxWidth: "1600px" }}>
          <div className="row text-center text-md-center text-lg-left w-100 p-0 m-0">
            <div className="col-lg-3">
              <h3 className="">CODING CAMBODIA</h3>
            </div>
            <div className="col-lg-3">
              <h5 className="text-danger">Support</h5>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Downloads</p>
              <p>Locate A Dealer</p>
              <p>Product Registration</p>
              <p>Spare Parts</p>
            </div>
            <div className="col-lg-3">
              <h5 className="text-danger">Coding Cambodia</h5>
              <p>About Coding</p>
              <p>Locate A Dealer</p>
              <p>Product Registration</p>
              <p>Spare Parts</p>
            </div>
            <div className="col-lg-3">
              <h5 className="text-danger">
                Stay up to date of Coding Cambodia
              </h5>
              <input
                type="text"
                className="w-100 text-light"
                placeholder="Enter your Email"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid white",
                  outline: "none",
                  height: "40px",
                }}
              />
              <input
                type="button"
                value="SIGN UP"
                className="btn mt-3 w-100 bg-danger text-light text-md-center"
                style={{ outline: "none" }}
              />
            </div>
          </div>
          <hr color="warning" />
          <div className="text-center mt-4">
            <i
              style={{ fontSize: "20px" }}
              className=" mx-4 fab fa-facebook-f"
            ></i>
            <i
              style={{ fontSize: "20px" }}
              className=" mx-4 fab fa-instagram"
            ></i>
            <i
              style={{ fontSize: "20px" }}
              className=" mx-4 fab fa-twitter"
            ></i>
            <i
              style={{ fontSize: "20px" }}
              className=" mx-4 fab fa-youtube"
            ></i>
            <Typography
              variant="body2"
              align="center"
              className="text-light mt-2"
              style={{ fontSize: "17px" }}
            >
              {"Copyright © "}
              <Link color="inherit" href="/" className="text-light">
                Coding Cambodia
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
