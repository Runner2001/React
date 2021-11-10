import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Customhook from './customhook';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-dom'

class App extends React.Component {
  // state = {
  //   blogs: null,
  //   loading: true,
  //   jsonerror: null
  // }

  // componentDidMount() {
  //   console.log("Did Mount");

  //   //for Just See How it work

  //   //we will use custom componnet
  //   // setTimeout(() => {
  //   //   fetch('http://localhost:8000/blogs')
  //   //     .then((res) => {
  //   //       if (res.ok !== true) {
  //   //         throw Error(`Cant't Fetch Data From the Server`)
  //   //       }
  //   //       return res.json();
  //   //     })
  //   //     .then(data => {
  //   //       this.setState({ blogs: data })
  //   //       this.setState({ loading: false })
  //   //     }, 1000)
  //   //     .catch(err => {
  //   //       this.setState({ jsonerror: err.message });
  //   //       this.setState({ loading: false })
  //   //     })
  //   // }, 1000)
  // }

  // delete = (id) => {
  //   const blogs = [...this.state.blogs]
  //   const blog = blogs.filter(blog => blog.id !== id)
  //   return this.setState({ blogs: blog });
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Customhook />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;