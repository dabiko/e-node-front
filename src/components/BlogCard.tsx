import React, { Component } from "react"
import { Link } from "react-router-dom"

class BlogCard extends Component {
  render() {
    return (
      <>
        <div className={"col-3"}>
          <div className={"blog-card"}>
            <div className={"card-image"}>
              <img
                className={"img-fluid"}
                src={"images/blog-1.jpg"}
                alt={"blog"}
              />
            </div>
            <div className={"blog-content"}>
              <p className={"blog-date"}>11 OCTOBER, 2023</p>
              <h5 className={"blog-title"}>
                A Beautiful Sunday Morning Renaissance
              </h5>
              <p className={"blog-description"}>
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about You’re only
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about You’re only
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about You’re only
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about
              </p>
              <Link className={"app-button"} to={""}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BlogCard
