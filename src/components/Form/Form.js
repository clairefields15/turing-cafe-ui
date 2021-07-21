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
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={e => this.handleChange(e)}
          required
        />
        <input
          type='number'
          placeholder='Number of guests'
          name='number'
          min='0'
          value={this.state.number}
          onChange={e => this.handleChange(e)}
          required
        />
        <button onClick={e => this.handleClick(e)}>Make Reservation</button>
      </form>
    );
  }
}
export default Form;
