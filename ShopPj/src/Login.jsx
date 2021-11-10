import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", emial: "", message: "" };
  }
  render() {
    return (
      <div className="container-fluid col-sm-10 justify-content-center">
        <h4 className="text-info border-bottom m-2 p-2">Login</h4>

        <div className="form-group form-row">
          <input
            className="m-2 border border-info rounded-2 col-8"
            type="text"
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
          ></input>

          <input
            className="m-2 border border-info rounded-2 col-8"
            type="text"
            placeholder="Enter Your Email"
            value={this.state.emial}
            onChange={(event) => this.setState({ emial: event.target.value })}
          ></input>

          <button
            className="btn btn-outline-info col-8 m-2"
            onClick={this.onlogin}
          >
            Login
          </button>
          <br />
          {this.state.message}
        </div>
      </div>
    );
  }
  onlogin = () => {
    console.log(this.state);
    this.state.name !== "" && this.state.emial !== ""
      ? this.setState({
          message: (
            <span className="message text-success m-1 fs-6">
              Successfull Login!
            </span>
          ),
        })
      : this.setState({
          message: (
            <span className="text-danger m-1 fs-6">Enter Your Info !!</span>
          ),
        });
  };
}

export default Login;
