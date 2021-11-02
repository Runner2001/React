import React from 'react';
import Root from './Root';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Root />
      </Router>
    );
  }
}

export default App;
