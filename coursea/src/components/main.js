import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./new-component";
import Contact from "./Contact";
import Home from "./Home";
import { Switch, Route, withRouter } from "react-router-dom";
import Selected from "./selected";
import About from "./About";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comment: state.comments,
    promotion: state.promotion,
    leader: state.leader
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DishWithId = ({ match }) => {
      return (
        <Selected selectedDish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comment.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotion.filter((promo) => promo.featured)[0]}
            leader={this.props.leader.filter((leader) => leader.featured)[0]}
          />} />
          <Route
            exact
            path="/menu"
            exact
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path="/contact" component={() => <Contact />} />
          <Route path='/about'>
            <About leaders={this.props.leader} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
