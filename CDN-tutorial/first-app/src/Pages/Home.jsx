import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="Herosection border-bottom">
          <h1>Welcome To Our Shop</h1>
          <p className="text-secondary fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            eaque! Harum delectus quidem fugit aliquam provident tenetur quaerat
            architecto mollitia!
          </p>
          <button className="btn mb-3 btn-outline-info">Start</button>
        </div>
        <div className="product m-2 border-bottom">
          <span className="fs-6 text-secondary fw-light">Best Seller</span>
          <h2>iPhone 13 Pro</h2>
          <h5 className="text-info">The Best Phone Of the Year</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quos!
          </p>
          <button className="btn btn-primary mb-3">Buy</button>
          <button className="btn btn-outline-info ms-2 mb-3">See More</button>
          <span className="ms-4 text-primary">999$</span>
        </div>
        <div className="product m-2 border-bottom">
          <span className="fs-6 text-secondary fw-light">Best Seller</span>
          <h2>Samsung S20+</h2>
          <h5 className="text-info">The Best Camera Of the Year</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quos!
          </p>
          <button className="btn btn-primary mb-3">Buy</button>
          <button className="btn btn-outline-info ms-2 mb-3">See More</button>
          <span className="ms-4 text-primary">999$</span>
        </div>
        <div className="product m-2 border-bottom">
          <span className="fs-6 text-secondary fw-light">Best Seller</span>
          <h2>Huawei Mate 20</h2>
          <h5 className="text-info">The Best Phone Of the Year</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quos!
          </p>
          <button className="btn btn-primary mb-3">Buy</button>
          <button className="btn btn-outline-info ms-2 mb-3">See More</button>
          <span className="ms-4 text-primary">999$</span>
        </div>
      </div>
    );
  }
}

export default Home;
