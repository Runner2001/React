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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products,
      seemore: [{}]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home products={this.state.products} />
          </Route>
          <Route path='/product' >
            <Product
              products={this.state.products}
              seemore={this.state.seemore}
            />
          </Route>
          <Route path='/contact' >
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;