import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    const card = this.props.products.map((product, i) => {
      return (
        <div key={i} className="col">
          <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.Name}</h4>
              <p className="card-text text-secondary">{product.Brief}</p>
              <button className="btn btn-primary me-2">
                <Link className="link" to={`/seemore/${product.id}`}>
                  See More
                </Link>
              </button>
              <button
                className="btn btn-outline-warning me-2"
                onClick={() => this.props.addCart(product)}
              >
                Add Cart
              </button>
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
      </div>
    );
  }
}

export default Product;
