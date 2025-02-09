import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
  
  const Button = ({ value, type }) => {
    let path = '';
  
    // Define the link path based on the type of booking
    if ( type === 'schedule') {
      path = '/time-booking'; // Book a time slot
    } else {
      path = '/lectures-booking'; // Parent path for gift booking
    }
  
    return (
      <Link to={path} className={`button button__book-time`}>
        {value}
      </Link>
    );
  };
  
  export default Button
