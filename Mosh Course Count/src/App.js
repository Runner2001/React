import React from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends React.Component {

  state = {
    counters: [
      { id: 1, countvalue: 0 },
      { id: 2, countvalue: 0 },
      { id: 3, countvalue: 0 },
      { id: 4, countvalue: 0 },
    ],
  };

  handelIncrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].countvalue++;
    this.setState({ counters });
  }

  handleDelete = (id) => {
    const counter = this.state.counters.filter(
      (selected) => selected.id !== id
    );
    this.setState({ counters: counter });
  };

  handelReset = () => {
    const counters = this.state.counters.map( c => {
      c.countvalue = 0;
      return c;
    });
    this.setState({ counters })
  }

  render(){
    return (
      <React.Fragment>
      <NavBar 
        totalCount={this.state.counters.filter(c => c.countvalue > 0).length}
      />
      <main className='container'>
        <Counters 
          delete={this.handleDelete}
          increase={this.handelIncrease}
          reset={this.handelReset}
          counter={this.state.counters}
        />
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;
