import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  //Error is Alwasy Delete
  // const handeldelete = (id) => {
  //   fetch("http://localhost:8000/blogs/" + id, {
  //     method: "DELETE",
  //   });
  // };

  const blogs = props.blog.map((eachblog, i) => {
    return (
      <div key={i} className="col">
        <div className="card border-primary">
          <div className="card-header text-white bg-primary">
            {eachblog.name}
          </div>
          <div className="card-body">
            <h5 className="card-title text-primary">{eachblog.title}</h5>
            <p className="card-text fs-6">{eachblog.detail}</p>
            <button
              // onClick={handeldelete(eachblog.id)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
            <Link to={`/detail/${eachblog.id}`}>
              <button className="btn btn-info text-white ms-2">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container overflow-hidden">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {blogs}
      </div>
    </div>
  );
};

export default Blog;
