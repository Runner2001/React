import { useState } from "react";

const Form = () => {
  const [emial, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [check, setCheck] = useState("Dell");

  const handelsubmit = (e) => {
    e.preventDefault();
    const blog = { emial, password, check };
    console.log(blog);
  };
  return (
    <div className="container">
      <form onSubmit={handelsubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            valid={emial !== ""}
            invalid={emial === ""}
            className="form-control"
            value={emial}
            id="exampleInputEmail1"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <select
          value={check}
          onChange={(e) => setCheck(e.target.value)}
          className="btn btn-outline-info"
        >
          <option value="Dell">Dell</option>
          <option value="Apple">Apple</option>
        </select>
        <button type="submit" className="btn ms-2 btn-primary">
          Submit
        </button>
      </form>
      {/* <p>
        Your emial : {emial} <br />
        Your passowrd : {password} <br />
        Your Fav : {check}
      </p> */}
    </div>
  );
};
export default Form;
