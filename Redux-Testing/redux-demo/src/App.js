import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App mt-3">
        <CakeContainer />
      </div>
    </Provider>
  );
}


export default App;
