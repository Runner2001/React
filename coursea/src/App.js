import './App.css';
import React, { Component } from 'react';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/main'

const store = ConfigureStore();

class App extends Component {
  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;