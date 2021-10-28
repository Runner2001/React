import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/new-component';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Runner</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
