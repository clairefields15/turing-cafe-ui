import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => this.checkForErrors(res))
      .then(data => console.log(data));
  }

  checkForErrors(res) {
    if (res.status === 500) {
      throw new Error('Sorry our servers are down, please try again later');
    } else if (res.status === 404) {
      throw new Error('Error: 404, not found');
    } else if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Something went wrong');
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'></div>
        <div className='resy-container'></div>
      </div>
    );
  }
}

export default App;
