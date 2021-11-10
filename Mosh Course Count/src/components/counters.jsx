import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    return (
      <div className="container mt-5">
        {this.props.counter.map((count) => (
          <Counter
            key={count.id}
            counter={count} //All objects
            increase={this.props.increase}
            delete={this.props.delete}
          >
            {/* Pass Data to child */}
            <h4>Counter {count.id} </h4>
          </Counter>
        ))}
        <button onClick={this.props.reset}
          className="btn btn-warning btn-md m-5 "
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
