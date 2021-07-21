import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  return (
    <div className='error-container'>
      <h2>{error}</h2>
    </div>
  );
};

export default Error;
