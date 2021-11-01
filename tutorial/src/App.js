import React from 'react';
//import Root from './Root';
// import Home from './Home'
import Login from './Login';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Root /> */}
        {/* <Home /> */}
        <Login />
      </React.Fragment>
    );
  }
}

export default App;
