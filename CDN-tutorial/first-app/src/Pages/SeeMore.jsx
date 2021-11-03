import React from "react";

class SeeMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seemore: this.props.seemore,
    };
  }
  render() {
    const see = this.props.seemore.map((item, i) => {
      return (
        <div key={i} className="card mb-3">
          <img src={item.img} className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{item.Name}</h2>
            <p className="card-text">{item.Brief}</p>
            <button className="btn btn-primary">Buy</button>
            <span className="text-primary ms-2 fs-6">{item.Price}</span>
            <p className="card-text mt-2">
              <small className="text-muted">Release Date 12/1/2021</small>
            </p>
          </div>
        </div>
      );
    });
    return <div className="container mt-5">{see}</div>;
  }
}

export default SeeMore;
