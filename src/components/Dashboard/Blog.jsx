import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import BlogCard from "../subcomponent/blog/blog_card";
import AddBlog from "../subcomponent/blog/add_blog";
import BlogStatus from "../subcomponent/blog/blog_status";
import AddStatus from "../subcomponent/blog/add_status";

class Blog extends Component {
  state = {};
  render() {
    const { blogs } = this.props;
    return (
      <div className="container-fluid m-0 p-0 row">
        <div className="col-lg-8">
          <div className="ml-auto" style={{ maxWidth: "800px" }}>
            <div className="row w-100 m-0 p-0 mt-2 bg-light shadow-lg rounded" style={{ maxWidth: "800px" }}>
                <div className="col-6 p-0 m-0"><AddBlog /></div>
                <div className="col-6 p-0 m-0"><AddStatus /></div>
            </div>
            <div className="mt-2">
              
              {blogs &&
                blogs.map((blog) =>
                  blog.type === "blog" ? (
                    <BlogCard blog={blog} key={blog.id} />
                  ) : (
                    <BlogStatus blog={blog} key={blog.id} />
                  )
                )}
            </div>
          </div>
        </div>
        <div className="col lg 4 bg-info">
          <div className="bg-dark">dddd</div>
        </div>

        {/* <div className="row">
          <div className="col-lg-8">
            <div className="mt-4">
              {blogs &&
                blogs.map((blog) => (
                  <div
                    className="bg-light rounded-lg overflow-hidden shadow-lg mb-2"
                    key={blog.id}
                  >
                    <div className="row">
                      <div className="col-md-5">
                        <img
                          className="w-100"
                          src={require("../../img/cover/5.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-7 text-justify">
                        <h4 className="text-center mt-2">{blog.title}</h4>
                        <p className="pr-md-3">
                          <span className="mr-4"></span>
                          {blog.descriptions}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 text-center m-0 p-0 border-top">
                        <Button
                          className="w-100 py-2 m-0"
                          startIcon={
                            <DeleteIcon style={{ fontSize: "28px" }} />
                          }
                          color="secondary"
                        ></Button>
                      </div>
                      <div className="col-6 text-center m-0 p-0 border-top">
                        <Button className="w-100 py-2 m-0" color="secondary">
                          <i
                            className="fas fa-pen"
                            style={{ fontSize: "26px" }}
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="bg-light rounded-lg overflow-hidden shadow-lg mb-2 pl-md-3">
                <div className="row">
                  <div className="col-md-5 d-md-none">
                    <img
                      className="w-100"
                      src={require("../../img/cover/5.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 text-justify">
                    <h4 className="text-center mt-2">
                      How to Build a Web Application
                    </h4>
                    <p>
                      <span className="mr-4"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aperiam natus architecto maiores provident porro alias
                      qui minus! Odit consequatur, accusantium ea, qui deserunt
                      quis, tempore dolorum eum pariatur iusto alias iste porro
                      impedit nisi reprehenderit ratione veniam harum suscipit
                      assumenda aspernatur? Cumque voluptatibus perferendis
                      dignissimos ipsa eius asperiores ad?
                    </p>
                  </div>
                  <div className="col-md-5 d-none d-md-block">
                    <img
                      className="w-100"
                      src={require("../../img/cover/5.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-dark">dddd</div>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const blogs = state.firestore.ordered.blog;
  const users = state.firestore.data.users;

  return {
    blogs,
    users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "blog",
      orderBy: ["date", "desc"],
    },
    {
      collection: "users",
    },
  ])
)(Blog);
