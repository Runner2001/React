import React from "react";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor of shopping");
  }

  componentDidMount() {
    console.log("Component Mount Shopping");
  }
  componentDidUpdate() {
    console.log("Update of Shopping");
  }
  comp;
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          {this.props.allproducts.map((all) => {
            return (
              <div
                key={all.id}
                className="card m-2 col-10 col-sm-4 col-lg-3 p-2"
              >
                <div className="col">
                  <img src={all.image} className="card-img-top" alt="Cart" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {all.title}
                      <span className="ms-2 fs-6 text-primary">
                        {all.price}
                      </span>
                    </h5>
                    <p className="card-text text-secondary fs-6 lh-sm">
                      {all.detail}
                    </p>

                    <button
                      href="/#"
                      onClick={() => this.props.addCart(all.id)}
                      className="btn btn-warning text-white"
                    >
                      Add Card
                    </button>
                    <button href="/#" className="btn btn-primary ms-2">
                      Buy
                    </button>
                    <span className="badge ms-5 badge-sm bg-info">
                      {all.quantity}
                    </span>
                    <div className="btn-group ms-2">
                      <button
                        onClick={() => this.props.increase(all)}
                        className="btn btn-outline-success btn-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => this.props.decrease(all)}
                        className="btn btn-outline-success btn-sm"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shopping;
