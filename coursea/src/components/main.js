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
import Selected from "./selected";
import About from "./About";

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
    const DishWithId = ({ match }) => {
      return (
        <Selected selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home
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
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path="/contact" component={() => <Contact />} />
          <Route path='/about'>
            <About leaders={this.state.leader} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
