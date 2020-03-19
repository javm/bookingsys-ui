import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Bookings from './components/bookings';
const apiServiceURL = 'http://localhost:3000/bookings';

class App extends Component {
  render() {
    return (<Bookings bookings={this.state.bookings} />);
  }

  state = {
    bookings: []
  };

  componentDidMount() {
    fetch(apiServiceURL)
    .then( res => res.json())
    .then( data => {
      console.log("data", data);
      this.setState({ bookings: data});
    })
    .catch(console.log);
  }
}

export default App;
