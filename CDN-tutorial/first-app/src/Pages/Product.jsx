import React from "react";
import { Link, Route } from "react-router-dom";
import SeeMore from "./SeeMore";

class Product extends React.Component {
  state = {
    seemore: [],
  };
  render() {
    const card = this.props.products.map((product, i) => {
      return (
        <div key={i} className="col">
          <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.Name}</h4>
              <p className="card-text text-secondary">{product.Brief}</p>
              <button
                onClick={() => this.SeeMore(product)}
                className="btn btn-primary me-2"
              >
                See More
              </button>
              <button className="btn btn-outline-warning me-2">Add Cart</button>
              <span className="text-primary">{product.Price}</span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h1 className="mt-2 mb-3 text-primary">Our Product</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">{card}</div>
        <SeeMore seemore={this.state.seemore} />
      </div>
    );
  }
  SeeMore(id) {
    const seemore = [...this.state.seemore];
    seemore[0] = id;
    this.setState({ seemore: seemore });
  }
}

export default Product;
