import React, { Component } from 'react';
import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const Reservations = ({ reservations }) => {
  const makeCards = () => {
    return reservations.map(reservation => {
      return <ReservationCard key={reservation.id} {...reservation} />;
    });
  };

  return <div className='card-container'>{makeCards()}</div>;
};

export default Reservations;
