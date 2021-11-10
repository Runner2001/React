import React from "react";
import Nav from "./nav";
import Shopping from "./Shopping";
import Home from "./Home";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

class Root extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("Component Mount Root");
  }
  componentDidUpdate() {
    console.log("Update of Root");
  }

  state = {
    allproducts: [
      {
        id: 1,
        title: "Iphone 13",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 2,
        title: "Iphone 11 mini",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 3,
        title: "Iphone 13 mini",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 4,
        title: "Iphone 11 Pro Max",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 5,
        title: "Iphone 13 Pro Max",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 6,
        title: "Iphone 13 Pro",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 7,
        title: "Iphone 11 Pro",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
      {
        id: 8,
        title: "Iphone SE",
        detail:
          "Some quick example text to build on the card title and make up the bulk of the card content.",
        price: "999$",
        image: "assets/image/photo.jpg",
        quantity: 0,
      },
    ],
    cart: [],
  };
  addCart = (id) => {
    console.log(id);
    const cart = [...this.state.cart];
    cart.push(id);
    this.setState({ cart });
  };
  increase = (id) => {
    let quantity = [...this.state.allproducts];
    let index = quantity.indexOf(id);
    quantity[index].quantity++;
    this.setState({ allproducts: quantity });
  };
  decrease = (id) => {
    if (id.quantity !== 0) {
      let quantity = [...this.state.allproducts];
      let index = quantity.indexOf(id);
      quantity[index].quantity--;
      this.setState({ allproducts: quantity });
    } else {
      console.log("No more");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Nav cart={this.state.cart} />

        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route
          path="/shopping"
          exact
          component={() => (
            <Shopping
              allproducts={this.state.allproducts}
              cart={this.state.cart}
              addCart={this.addCart}
              increase={this.increase}
              decrease={this.decrease}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default Root;
