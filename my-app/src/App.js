import './App.css';
import React, { Component } from 'react'; 
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/new-component';
import {Dishes} from './share.js/share';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {dishes: Dishes};
  }
  render() { 
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Runner</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
    );
  }
}
 
export default App;