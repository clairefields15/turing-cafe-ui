import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import Error from '../Error/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      error: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => this.checkForErrors(res))
      .then(data => this.setState({ reservations: data }))
      .catch(err => this.setState({ error: err.message }));
  }

  checkForErrors(res) {
    if (res.status === 500) {
      throw new Error('Sorry our servers are down, please try again later');
    } else if (res.status === 404) {
      throw new Error('Sorry, resource was not found');
    } else if (res.status === 200) {
      return res.json();
    } else if (res.status === 201) {
      return res.json();
    } else if (res.status === 202) {
      return res.json();
    } else {
      throw new Error('Something went wrong');
    }
  }

  makeReservation = reservation => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: parseInt(reservation.number)
      })
    })
      .then(res => this.checkForErrors(res))
      .then(data =>
        this.setState({
          reservations: [data, ...this.state.reservations]
        })
      )
      .catch(err => this.setState({ error: err.message }));
  };

  deleteReservation = e => {
    const id = parseInt(e.target.id);
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => this.checkForErrors(res))
      .then(data => this.setState({ reservations: [...data] }))
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    const { reservations, error } = this.state;
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation} />
        </div>
        {!error.length && (
          <Reservations
            reservations={reservations}
            deleteReservation={this.deleteReservation}
          />
        )}
        {!!error.length && <Error error={error} />}
      </div>
    );
  }
}

export default App;
