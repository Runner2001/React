import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./new-component";
import Contact from "./Contact";
import { Dishes } from "../share.js/share";
import { Comments } from "../share.js/comment";
import { Leader } from "../share.js/leader";
import { Promotion } from "../share.js/promotion";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      leader: Leader,
      comments: Comments,
      promotion: Promotion,
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/home" exact component={() => <Home
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotion.filter((promo) => promo.featured)[0]}
            leader={this.state.leader.filter((leader) => leader.featured)[0]}
          />} />
          <Route
            exact
            path="/menu"
            exact
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/contact" component={() => <Contact />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
