import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const [name, setName] = useState("");
  const [title, settitle] = useState("");
  const history = useHistory();
  // const [author, setAuthor] = useState("Runner");

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { name, title };
    console.log(blog);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Add is finish");
      history.push("/");
    });
  };
  return (
    <div className="container m-5">
      <h3>Login</h3>
      <form className="m-4" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="text-area mt-2"
        ></textarea>
        {/* <select
          className="btn btn-outline-primary mt-2"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Runner">Runner</option>
          <option value="Min Thein">Min Thein</option>
        </select> */}
        <br />
        <button className="btn btn-outline-primary">Add blog</button>
        <button
          onClick={() => {
            setName("");
            settitle("");
            // setAuthor("Runner");
          }}
          className="btn btn-outline-danger m-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default About;
