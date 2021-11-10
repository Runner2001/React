import React from "react";

class AddCart extends React.Component {
  render() {
    console.log(this.props.cart);
    const items = this.props.cart.map((item, i) => {
      return (
        <div key={i} className="card">
          <h3 className="cardtitle mt-2">
            <small className="fs-6 me-2 fw-normal">#{i}</small>
            {item.Name}
          </h3>
          <hr />
          <div className="card-body position-relative">
            <ul>
              <li>{item.Cpu}</li>
              <li>{item.Ram}</li>
              <li>{item.Storage}</li>
            </ul>
            <p className="text-muted mt-3">{item.Brief}</p>
            <button className="btn btn-primary">Buy</button>
            <button
              onClick={() => this.props.delete(i)}
              className="btn ms-2 btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">{items}</div>
      </div>
    );
  }
}

export default AddCart;
