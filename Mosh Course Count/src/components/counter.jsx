import React, { Component } from "react";

class Counter extends Component {
  
  render() {
    console.log("Props", this.props); //values from the parent components data
    return (
      <div className="container mt-4">
        <div>
          <button
            onClick={() => this.props.delete(this.props.counter.id)}
            className="btn btn-danger text-white btn-sm m-2"
          >
            Delete
          </button>

          <button
            onClick={() => this.props.increase(this.props.counter)}
            className="btn btn-sm btn-secondary text-white"
          >
            Increment
          </button>
          <span className={this.badgeClass()}> {this.badge()} </span>
        </div>
      </div>
    );
  }

  badgeClass() {
    let classes = "badge badge-sm m-2 bg-";
    classes += this.props.counter.countvalue === 0 ? "warning" : "primary";
    return classes;
  }

  badge() {
    return this.props.counter.countvalue === 0 ? "Zero" : this.props.counter.countvalue;
  }
}

export default Counter;
