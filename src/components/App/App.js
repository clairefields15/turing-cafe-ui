import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => this.checkForErrors(res))
      .then(data => this.setState({ reservations: data }));
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
    const { reservations } = this.state;
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'></div>
        <Reservations reservations={reservations} />
      </div>
    );
  }
}

export default App;
