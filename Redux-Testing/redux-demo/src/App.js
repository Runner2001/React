import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HookCake from './components/HookCake';
import IceContainer from './components/IceContainer';
import HookIce from './components/HookIce';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App mt-3">
        {/* <CakeContainer />
        <HookCake />
        <HookIce />
        <IceContainer />

        <ItemContainer name='cake' />
        <ItemContainer name='ice' /> */}

        <UserContainer />
      </div>
    </Provider>
  );
}


export default App;
