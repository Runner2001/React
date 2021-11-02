import { BrowserRouter, Redirect, Link, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import NoPage from './Pages/NoPage';
import Post from './Pages/Post';
import { useState } from 'react';

function App() {

  const [Login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ul className='nav'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
        <button
          onClick={() => setLogin(!Login)}
        >{Login ? 'Logout' : 'Login'}</button>
        <Switch>
          <Route path='/home' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/profile' >
            {/* Login Normal Way */}
            {/* {Login ? <Profile /> : <Redirect to='/' />} */}
            {/* Login with parameter */}
            <Profile login={Login} />
          </Route>
          <Route path='/post/:id' component={Post} />
          {/* parameter data */}
          <Route component={NoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
