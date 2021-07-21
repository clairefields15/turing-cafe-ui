import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state
    };
    this.props.makeReservation(newResy);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  };

  render() {
    const { name, date, time, number } = this.state;
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          id='nameInput'
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={date}
          id='dateInput'
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          id='timeInput'
          value={time}
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='number'
          placeholder='Number of guests'
          name='number'
          min='0'
          id='numberInput'
          value={number}
          onChange={e => this.handleChange(e)}
          required
        />
        <button
          id='makeResyBtn'
          onClick={e => this.handleClick(e)}
          disabled={!name || !date || !time || !number}
        >
          Make Reservation
        </button>
      </form>
    );
  }
}
export default Form;

// extension: error handling for form
//validate inputs:
// number does not include e or special characters
// date properly formatted mm/dd
// time properly formatted 00:00
