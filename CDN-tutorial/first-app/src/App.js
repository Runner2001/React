import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import SeeMore from './Pages/SeeMore';
import Contact from './Pages/Contact'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { products } from './Product'
import AddCart from './Pages/AddCart';

class App extends React.Component {
  state = {
    products: products,
    cart: [],
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          cart={this.state.cart}
        />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home products={this.state.products} />
          </Route>
          <Route path='/product' >
            <Product
              products={this.state.products}
              addCart={this.addCart}
            />
          </Route>
          <Route path="/seemore/:id">
            <SeeMore
              products={this.state.products}
            />
          </Route>
          <Route path='/addcart'>
            <AddCart
              delete={this.delete}
              cart={this.state.cart}
            />
          </Route>
          <Route path='/contact' >
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
  addCart = (cart) => {
    console.log(cart);
    let carts = [...this.state.cart];
    let i = carts.length
    carts[i] = cart;
    console.log(carts)
    return this.setState({ cart: carts });
  }
  delete = (index) => {
    console.log(index);
    let carts = this.state.cart;
    const cart = carts.filter((item, i) => {
      return i !== index;
    });
    return this.setState({ cart: cart });
  };
}

export default App;