import React, { Component } from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, date, time, number }) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  );
};
export default ReservationCard;
