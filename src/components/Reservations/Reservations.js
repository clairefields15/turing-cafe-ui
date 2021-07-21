import React from 'react';
import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const Reservations = ({ reservations, deleteReservation }) => {
  const makeCards = () => {
    return reservations.map(reservation => {
      return (
        <ReservationCard
          key={reservation.id}
          {...reservation}
          deleteReservation={deleteReservation}
        />
      );
    });
  };

  return <div className='card-container'>{makeCards()}</div>;
};

export default Reservations;
