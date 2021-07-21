import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({
  id,
  name,
  date,
  time,
  number,
  deleteReservation
}) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button id={id} onClick={e => deleteReservation(e)}>
        Cancel
      </button>
    </div>
  );
};
export default ReservationCard;
